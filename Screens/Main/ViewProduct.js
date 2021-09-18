import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import NetworkError from './NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'
import Heart from './heart'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Product from './Product'
import * as SMS from 'expo-sms';
import { SliderBox } from "react-native-image-slider-box";

const {width} = Dimensions.get('window');
const height = width*100/180
import {AdMobBanner} from 'expo-ads-admob'
import { LogBox } from 'react-native';

class ViewProduct extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            product:[],
            is_loading:true,
            network_error:false,
            favorite:false,
            related_products:[],
            related_products_call_count:0,
            user_id:'',
            product_owner_info:[],
            product_owner_info_func_call_count:0,
            status_func_call_count:0,
            status:'',
            isLoggedIn:false
        }
        LogBox.ignoreAllLogs()
        this.bannerAdId = Platform.OS == 'ios'?"ca-app-pub-6656021178623765~9816867734":"ca-app-pub-6656021178623765~6155796659"

        this.isLoggedIn()
        this.get_user_id()
        this.get_product()
        
    }

    get_product = async()=>{

      await  Axios.get(base_url+'view_product?product_id='+this.props.route.params.product_id)
        .then(res=>{
            console.log(res.data.product)
            
            this.setState({product:res.data.product,is_loading:false})

        })
        .catch(err=>this.setState({network_error:true}))

    }


    isLoggedIn = async()=>{
        console.log('Checking')
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
      
        if(parse == null){
           this.setState({isLoggedIn:false})
        }else{
            this.setState({isLoggedIn: true})
        }

        }



    get_related_product = (product_category)=>{
            
          if(this.state.related_products_call_count<1){

        if(this.state.user_id){
            Axios.get(base_url+'get_related_products?is_loggedin=true&&product_category='+product_category+"&&my_id="+this.state.user_id+'&&product_id='+this.props.route.params.product_id)
            .then(res=>{
    
                console.log('Related')
                console.log(res.data.products)
    
                this.setState({related_products:res.data.products})
            })
            this.setState({related_products_call_count:1})
        }else{
            Axios.get(base_url+'get_related_products?is_loggedin=false&&product_category='+product_category+'&&product_id='+this.props.route.params.product_id)
            .then(res=>{
    
                console.log('Related')
                console.log(res.data.products)
    
                this.setState({related_products:res.data.products})
            })
            this.setState({related_products_call_count:1})
        }
       

    }

    }

    recreate = (ad_id)=>{
        Axios.get(base_url+'recreate_ad?post_id='+ad_id)
        .then(res=>{
            Alert.alert(res.data.msg)
            this.setState({is_loading:true})
            this.get_product()
        })
        .catch(err=>Alert.alert(err))
    }

    openSMS = async(phone_no,user_name,image)=>{
        const { result } = await SMS.sendSMSAsync(
            [phone_no],
            'Hi ,'+user_name,
            {
                attachments: {
                    uri: base_url+'static/product_images/'+image,
                    mimeType: 'image/'+image.split('.'),
                    filename: image,
                  },
                
            },
           
          );
    }

    get_user_id = async()=>{
        const user =await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        this.setState({user_id:parse.user_id})
    }

    get_product_owner_info = (info)=>{
        if(this.state.product_owner_info_func_call_count < 1){

        this.setState({product_owner_info:info,product_owner_info_func_call_count:1})
    }

        
    }

    get_status = (status)=>{
        if(this.state.status_func_call_count<1){
            this.setState({status:status,status_func_call_count:1})
        }
    }


    change_product_status = async(product_id)=>{
       
       await Axios.get(base_url+'mark_it_as_sold_or_unsold?product_id='+product_id)
        .then(res=>{
           
            if(this.state.status == 'sold'){
                this.setState({status:'unsold'})
            }else{
                this.setState({status:'sold'})
                
            }
          
        })
        .catch(err=>Alert.alert('Something Went Wrong'))

      
    }

    dialCall = (number) => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = `tel:${number}`;
        }
        else {
          phoneNumber = `telprompt:${number}`;
        }
    
        Linking.openURL(phoneNumber);
      };


      fix_network_error = ()=>{
        this.setState({is_loading:true,network_error:false})
        this.get_product()

     }


  
    render(){
        if(!this.state.network_error){
        if(!this.state.is_loading){

        return (

            <View style={{ flex:1 }}>

            {this.state.product?<ScrollView style={{ width,height }}>
               {this.state.product.map(data=>(

                <View key={data.product_id}>
                    {this.get_related_product(data.product_category)}
                    {this.get_product_owner_info(data)}
                    {this.get_status(data.status)}
                <View>
                

                <SliderBox
                images={[
                    {uri:base_url+'static/product_images/'+data.product_image1},
                    {uri:base_url+'static/product_images/'+data.product_image2},
                    {uri:base_url+'static/product_images/'+data.product_image3}

                ]}
                dotColor="black"
                sliderBoxHeight={height}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                autoplay
                circleLoop
                parentWidth={width}
                />

               
                </View>

                <View style={{ flexDirection:'row',marginLeft:Dimensions.get('window').width*2/40,justifyContent:'space-between',top:5 }}>
                <Text style={{ fontSize:20,marginTop:15 }}>Rs {data.price}</Text>
                

                <View style={{ position:'absolute',marginLeft:Dimensions.get('window').width*2/2.4 }}>
                <Heart   is_favorite={this.props.route.params.is_favorite} product_id={this.props.route.params.product_id}/>
              
                </View>

                {this.state.product_owner_info.user_id == this.state.user_id && this.state.status != 'pending'?<TouchableOpacity onPress={()=>{
                    this.change_product_status(data.product_id)
                    
                }
                    } style={{ backgroundColor:'skyblue',justifyContent:'center',alignItems: 'center',padding:3,marginRight:Dimensions.get('window').width*2/6,marginTop:5,borderRadius:5}}>
                    {this.state.status != 'sold'?<Text>Mark it as sold</Text>:<Text>Mark it as Unsold</Text>}
                </TouchableOpacity>:null}


               

                </View>


                {this.state.product_owner_info.user_id == this.state.user_id && data.is_expired ==1?
                <View style={{alignSelf:'center',alignItems:'center',left:18}}>
                <TouchableOpacity onPress={()=>this.recreate(data.product_id)} style={{ backgroundColor:'#229dd0',justifyContent:'center',alignItems: 'center',padding:8,marginTop:15,borderRadius:5}}>
                   <Text >Recreate it</Text>
                </TouchableOpacity>

                <Text style={{color:'red',alignSelf:'center',right:15,top:5}}>Click on Recreate.Because your ad is expired</Text>
                    </View>
                :null}


                
                <Text style={{ fontSize:15,marginTop:10,marginLeft:Dimensions.get('window').width*2/40, }}>{this.state.product.product_title}</Text>

                <View style={{ flexDirection:'row',marginLeft:Dimensions.get('window').width*2/40,marginTop:10,justifyContent:'space-between' }}>
                
                <View style={{ flexDirection:'row'}}>
                <Entypo name='location-pin' color='black' size={30} style={{right:10}}/>
                <Text style={{ top:10 ,right:10}}>{data.product_location}</Text>
                </View>

                <Text style={{ marginRight:20,marginTop:10 }}>{data.posted_date}</Text>
                </View>



                <View style={{ marginTop:20}}>

                <AdMobBanner 
                bannerSize='fullBanner'
                adUnitID={this.bannerAdId}
                servePersonalizedAds ={false}

              
                />
                </View>


            <View style={{ marginLeft:Dimensions.get('window').width*2/40 }}>
                <Text style={{ fontWeight:'bold',fontSize:16 }}>Details</Text>

                <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
                <Text style={{ fontSize:15 }}>Price</Text>
                <Text style={{ right:20,fontSize:15 }}>{data.price}</Text>
                </View>

                {data.new_or_used?<View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
                <Text style={{ fontSize:15 }}>Condition</Text>
                <Text style={{ right:20,fontSize:15 }}>{data.new_or_used}</Text>
                </View>:null}

                <Text style={{height:0,borderColor:'gray',borderWidth:.5,marginTop:5,marginRight:20}}> </Text>

                <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
                <Text style={{ fontSize:15 }}>Type</Text>
                <Text style={{ right:20,fontSize:15 }}>{data.product_category}</Text>
                </View>

                <Text style={{height:0,borderColor:'gray',borderWidth:.5,marginTop:5,marginRight:20}}> </Text>

                <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
                <Text style={{ fontSize:15 }}>Location</Text>
                <Text style={{ right:20,fontSize:15 }}>{data.product_location}</Text>
                </View>

            </View>


            <View style={{ marginLeft:Dimensions.get('window').width*2/40,marginTop:30 }}>
            <Text style={{ fontWeight:'bold',fontSize:16 }}>Description</Text>

            <Text style={{ marginTop:5 }}>{data.product_description}</Text>
            </View>


           



            <View style={{ flexDirection:'row',marginTop:40,left:5}}>
            {data.profile_pic ?
             
             <Image source={{uri:base_url+'static/profile_pics/'+data.profile_pic}} style={{width:75,height:75,borderRadius:100}}/>
           
             :
             
             <MaterialCommunityIcons name='account-circle' size={90}/>
             
             }

             <View style={{ marginTop:10,marginLeft:10 }}>
             <Text style={{ color:'black',fontSize:20,fontWeight:'bold' }}>{data.user_name}</Text>
             
             <TouchableOpacity style={{ marginTop:10 }} onPress={()=>this.props.navigation.navigate('SeeAnotherUserProfile',{user_id:data.user_id})}>
            <Text style={{ color:'blue',fontSize:16,fontWeight:'bold',textDecorationLine: 'underline' }}>See Profile</Text>
             </TouchableOpacity>
             </View>
            

            </View>



            </View>
            ))}


            <View style={{ marginTop:20,}}>
                <Text style={{ fontWeight:'bold',fontSize:16,marginLeft:Dimensions.get('window').width*2/45, }}>Related Ads</Text>
                <ScrollView 
                
                horizontal style={{ marginTop:10,flex:1 }}>
                   
                {this.state.related_products.map(data=>(
                    <View key={data.product_id} style={{ marginLeft:20 }}> 
                  <Product data={data}  navigation={this.props.navigation} />
                  
                  </View>
                ))}
                </ScrollView>
            </View>

           

            <View style={{ marginTop:20}}>

            <AdMobBanner 
            bannerSize='fullBanner'
            adUnitID={this.bannerAdId}
            servePersonalizedAds ={false}

            
            />
            </View>

            <Text style={{ marginBottom:20 }}> </Text>
            </ScrollView>:null}


               {this.state.product_owner_info.user_id != this.state.user_id && this.state.status != 'sold' && this.state.isLoggedIn?<View style={{borderWidth:.5,borderColor:'black',position:'relative',padding:5,borderRadius:3,width:'100%',backgroundColor:'black'}}>
                   <Text style={{ color:'white' }}>Safety Tips!</Text>
                   <Text style={{ color:'white',marginLeft:5,fontSize:13  }}>. Never transfer money in advance</Text>

                   <Text style={{ color:'white',marginLeft:5,fontSize:13   }}>. Meet the seller at a public place</Text>

                   <Text style={{ color:'white',marginLeft:5,fontSize:13 }}>. Avoid items with unrealistic prices</Text>
                   <Text style={{ color:'white' ,marginLeft:5,fontSize:13  }}>. Don't proceed if something seems wrong</Text>
                   <Text style={{height:0,borderColor:'white',borderWidth:.5,marginTop:5,width:'100%'}}> </Text>

                   <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:5,padding:5 }}>
                    <TouchableOpacity onPress={()=>this.dialCall(this.state.product_owner_info.phone_no)} style={{ backgroundColor:'skyblue',padding:5,borderRadius:5,justifyContent:'center',alignItems: 'center',width:80 }}>
                    <Foundation name='telephone' size={25} color='white'/>
                   <Text style={{ color:'white',fontSize:16 }}>CALL</Text>

                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=>this.openSMS(this.state.product_owner_info.phone_no,this.state.product_owner_info.user_name,this.state.product_owner_info.product_image1)} style={{ backgroundColor:'skyblue',padding:5,borderRadius:5,justifyContent:'center',alignItems: 'center',width:80 }}>
                    <FontAwesome5 name='sms' size={25} color='white'/>
                   <Text style={{ color:'white',fontSize:16 }}>SMS</Text>

                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chats',{product_owner_id:this.state.product_owner_info.user_id})} style={{ backgroundColor:'skyblue',padding:5,borderRadius:5,justifyContent:'center',alignItems: 'center',width:80 }}>
                    <MaterialIcons name='sms' size={25} color='white'/>
                   <Text style={{ color:'white',fontSize:16 }}>CHAT</Text>

                    </TouchableOpacity>
                   </View>

                </View> :null}

                {this.state.product_owner_info.user_id != this.state.user_id && this.state.status == 'sold'?
                <View style={{borderWidth:.5,borderColor:'black',position:'relative',padding:5,borderRadius:3,width:'100%',backgroundColor:'black'}}>
                    <Text style={{ color:'white',fontSize:15 }}>This Product Has Been Sold</Text>
                    </View>
                    :null
                     }

                

            </View>

        )
    }else{
        return <ActivityIndicator size="large" color='black' style={{ marginTop:50 }} />
    }

    }else{
        return <NetworkError get_all_my_ads={this.fix_network_error}/>
    }

    }
}

export default ViewProduct