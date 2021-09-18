import React from 'react';
import {View,Text,Button,TouchableOpacity,ScrollView, Alert,ActivityIndicator,Dimensions,Platform,LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetworkError from './NetworkError'
import Axios from 'axios'
import base_url from '../../base_url'
import Product from './Product'
import {FontAwesome5,AntDesign,FontAwesome,Entypo,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import {AdMobBanner} from 'expo-ads-admob'




// android banner = ca-app-pub-6796247302325530/5311464753


// IOS Banner =  ca-app-pub-6796247302325530/7523814683




//banner test id = ca-app-pub-3940256099942544/6300978111

let adsLenVar = []
class Home extends React.Component {
    constructor(props) {
        super(props)
        LogBox.ignoreAllLogs()
        this.state = {
            is_loading:true,
            network_error:false,
            all_ads:[],
            filter:'',
            location:'',
            notifications_count:0,
            product_count:0,
            
        }
        LogBox.ignoreAllLogs()
        this.bannerAdId = Platform.OS == 'ios'?"ca-app-pub-6656021178623765~9816867734":"ca-app-pub-6656021178623765~6155796659"
        this.get_loctation()
    }

    get_all_ads = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)

        if(parse == null){
            Axios.get(base_url+'get_all_ads?want_all=true&&want_to_filter=false')
            .then(res=>{
                console.log(res.data)
                this.setState({all_ads:res.data.products,is_loading:false})
            })
            .catch(err=>this.setState({network_error:true}))
        }else{
            try{
                Axios.get(base_url+'get_all_ads?my_id='+parse.user_id+'&&want_all=false&&want_to_filter=false&&location='+parse.location)
                .then(res=>{
                    console.log(res.data)
                    this.setState({all_ads:res.data.products,is_loading:false})
                })
                .catch(err=>this.setState({network_error:true}))
            }catch(err){
                console.log(err)
            }
           
        }
        

    }

    knowtheLengthOfAds = (len)=>{
        if(this.state.knowLenFuncCallCount<1){
            this.setState({knowLenFuncCallCount:1})
            for(i=1;i<=len;i++){
                adsLenVar.push(i)
            }
        }else{
            return false
        }
       
    }

    see_all_notifications = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        try{
            Axios.get(base_url+'see_all_notifications?my_id='+parse.user_id)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
        
    }

    get_loctation = async()=>{
        let location =await  AsyncStorage.getItem('location')
        console.log('location')

        console.log(location)
        this.setState({location:location})
    }

    fix_network_error = ()=>{
        this.setState({is_loading:true,network_error:false})
        this.get_all_ads() 
     }


     get_notifications_count = async()=>{
         const user = await AsyncStorage.getItem('user')
         const parse = JSON.parse(user)

         Axios.get(base_url+'get_notifications?my_id='+parse.user_id)
         .then(res=>{
             console.log('Notifications Count')
             console.log(res.data.notifications_count)
            this.setState({notifications_count:res.data.notifications_count})
         })
         .catch(err=>console.log(err))
     }


    componentDidMount() {
       
          this.get_all_ads()
         this.get_notifications_count()
        this.get_loctation()
         this.props.navigation.addListener('focus',()=>{
             this.setState({is_loading:true})
             this.get_all_ads()
             this.get_loctation()
            
            this.get_notifications_count()

         })
     }
     

    
    render(){
        if(!this.state.network_error){
         if(!this.state.is_loading){
        

        return (
            <ScrollView>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SetLocationForSearch')} style={{ flexDirection:'row',padding:10,width:'100%',backgroundColor:'#E4E4E4', }}>
            <Entypo name='location-pin' color='black' size={30} style={{marginLeft:Dimensions.get('window').width*2/40,}}/>
            <Text style={{marginLeft:12 ,top:10 }}>{this.state.location}</Text>

            <Entypo name='chevron-down' size={20} style={{marginLeft:Dimensions.get('window').width*2/3.5,top:10}}/>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('QuickSearchCategories')} style={{ flexDirection:'row',padding:10,width:'100%',backgroundColor:'#EEEEEE', }}>
            <FontAwesome name='search' color='black' size={25} style={{marginLeft:Dimensions.get('window').width*2/40,}}/>
            <Text style={{marginLeft:12 ,top:10 }}>Find Cars,Mobile Phones and more</Text>

            <TouchableOpacity style={{ flexDirection:'row' }} onPress={async()=>{
              await  this.see_all_notifications()
                this.props.navigation.navigate('Notifications')
            }
            }>
            <AntDesign name='bells' size={25} style={{marginLeft:Dimensions.get('window').width*2/11}}/>

            {this.state.notifications_count?<View style={{backgroundColor:'green',height:22,width:22,borderRadius:100,position:'absolute',left:Dimensions.get('window').width*2/8.4,justifyContent:'center',alignItems: 'center',top:5}}>
            <Text >{this.state.notifications_count}</Text>

            </View>:null}

            
            </TouchableOpacity>


            </TouchableOpacity>

            <View style={{ flexDirection:'row' ,marginTop:20, }}>
            <Text style={{left:15 }}>Browse Categories</Text>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('See All Categories')} style={{ marginLeft:Dimensions.get('window').width*2/3.7, }}>
                <Text style={{ color:'blue' }}>See All</Text>
            </TouchableOpacity>
            </View>
            

            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop:20 }}>
            <View style={{ marginLeft:10 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('VehicleCategoriesForSearch')} style={{marginLeft:10, backgroundColor:'#ffcc99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='car' color='black' size={30}/>

                
                </TouchableOpacity>

                <Text style={{ marginLeft:10 }}>Vehicle</Text>
                </View>



                <View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mobile Categories For Search')} style={{ marginLeft:30,backgroundColor:'#99ffcc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='mobile-phone' color='black' size={40}/>

                </TouchableOpacity>

                <Text style={{ marginLeft:34 }}>Mobile</Text>
                </View>


               

                <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBikesCategories')} style={{ marginLeft:30,backgroundColor:'#ff9999',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='motorcycle' color='black' size={30}/>

                </TouchableOpacity>

                <Text style={{ marginLeft:35 }}>Bikes</Text>

                </View>
                
            

                <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchElectronicsCategories')} style={{ marginLeft:40,backgroundColor:'#9999ff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome name='tv' color='black' size={30}/>

               </TouchableOpacity>
                <Text style={{ marginLeft:35 }}>Electronics</Text>

                </View>
               

                <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchAnimalsCategories')} style={{ marginLeft:30,backgroundColor:'#99ccff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialCommunityIcons name='dog' color='black' size={30}/>
               </TouchableOpacity>
               <Text style={{ marginLeft:30 }}>Animals</Text>
               
                </View>


                <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchLaptopCategories')} style={{ marginLeft:30,backgroundColor:'#99ccff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <Entypo name='laptop' color='black' size={30}/>

               </TouchableOpacity>
               <Text style={{ marginLeft:30 }}>Laptops</Text>
               
                </View>


               
                <View style={{ marginRight:10 }}>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchFashionAndBeautyCategories')} style={{ marginLeft:40,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome5 name='tshirt' color='black' size={30}/>

               </TouchableOpacity>
               <Text style={{ marginLeft:45 }}>Fashion</Text>

               </View>
            
            </ScrollView>

               

            <View style={{ marginTop:20}}>

            <AdMobBanner 
            bannerSize='fullBanner'
            adUnitID={this.bannerAdId}
            servePersonalizedAds ={false}
           
            
            />
            </View>
           

          {this.state.all_ads.length>0?<View style={{ flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginTop:20,padding:20}}>
        
          
              {this.state.all_ads.map((data,index)=>(
                  <View key={index}>
                
                      
                  <Product data={data}  navigation={this.props.navigation} />
                  
                  
                  {index%6 == 5?
                  <View style={{ padding:20 }}>
                    
                       
                     <AdMobBanner 
                     bannerSize='banner'
                     adUnitID={this.bannerAdId} 
                     servePersonalizedAds ={false}
                    
                     
                     />
 
            
                    
 
                   
                  
                   
                     
                  </View>:null}
                  </View>
              ))}
                  </View>:<Text style={{ fontSize:15,textAlign:'center',marginTop:30 }}>We Dont Have Any Product</Text>}
            


           
                 
            </ScrollView>
        )
   

    }else{
        return <ActivityIndicator size="large" color='black' style={{alignSelf: 'center',marginTop:50}}/>

    }
            
            
     }else{
        return <NetworkError get_all_my_ads={this.fix_network_error} />

     }
    }
}


export default Home