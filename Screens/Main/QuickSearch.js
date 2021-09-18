import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import {FontAwesome5,AntDesign,FontAwesome,Entypo,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import Product from './Product'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetworkError from './NetworkError'
import HomePageProductsAds from './HomePageProductsAds'
import {AdMobBanner} from 'expo-ads-admob'

class QuickSearch extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            is_loading:true,
            network_error:false,
            ads:[],
            location:'',
            category:'',
            
        }
        this.bannerAdId = Platform.OS == 'ios'?"ca-app-pub-6656021178623765~9816867734":"ca-app-pub-6656021178623765~6155796659"

        this.get_location()
        this.get_category()
    }
    

    get_location = async()=>{
        let location = await AsyncStorage.getItem('location')
        console.log(location)
        this.setState({location:location})
    }

    get_category = async()=>{
        let category = await AsyncStorage.getItem('category')
        this.setState({category:category})
    }


    get_ads_by_quick_search = async()=>{
    const user = await AsyncStorage.getItem('user')
    const parse = JSON.parse(user)
    
    if(parse == null){
        Axios.get(base_url+'quicksearch?is_loggedin=false&&category='+this.state.category+'&&location='+this.state.location)
        .then(res=>{
            console.log(res.data)
            this.setState({ads:res.data.products,is_loading:false})
        })
        .catch(err=>this.setState({network_error:true}))
        }else{
            try{
                Axios.get(base_url+'quicksearch?is_loggedin=true&&category='+this.state.category+'&&location='+this.state.location+'&&my_id='+parse.user_id)
                .then(res=>{
                    console.log(res.data)
                    this.setState({ads:res.data.products,is_loading:false})
                })
                .catch(err=>this.setState({network_error:true}))
            }catch(err){
                console.log(err)
            }
        }
    }
   


    fix_network_error = ()=>{
        this.setState({is_loading:true})
        this.get_ads_by_quick_search()
    }
    componentDidMount() {
        this.get_location()
        this.get_category()

        this.get_ads_by_quick_search()
        this.props.navigation.addListener('focus',()=>{
            this.setState({is_loading:true})
            this.get_location()
            this.get_category()

            this.get_ads_by_quick_search()
            
        })
    }
    render(){
        if(!this.state.network_error){
        if(!this.state.is_loading){
        return(
            <View>

                <View style={{flexDirection:'row', backgroundColor:'#E4E4E4',width:Dimensions.get('window').width,padding:15 }}>
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('QuickSearchCategories')} style={{ flexDirection:'row',padding:5,backgroundColor:'white',borderRadius:5,width:'90%' }}>
                <FontAwesome name='search' color='black' size={25} style={{marginLeft:Dimensions.get('window').width*2/60,}}/>

                <Text  style={{left:10,top:5}}>{this.state.category+' in '+this.state.location}</Text>
                </TouchableOpacity>

            <TouchableOpacity style={{left:20}} onPress={()=>this.props.navigation.navigate('Filters')}>
            <FontAwesome name="filter" color="black" size={30} />

            </TouchableOpacity>
                </View>

                <ScrollView>
        {this.state.ads.length>0?<View style={{flex:1, flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginTop:20,padding:20}}>
          
          {this.state.ads.map((data,index)=>(
               <View key={index}>
              
              <Product data={data} navigation={this.props.navigation} />
              <Text> </Text>
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
              </View>:<Text style={{ fontSize:18,textAlign:'center',marginTop:50 }}>We Dont Have Any Product</Text>}
              </ScrollView>
            </View>
            
        )
        }else{
            return <ActivityIndicator size="large" color='black' style={{alignSelf: 'center',marginTop:50}}/>

        }
    }else{
        return <NetworkError get_all_my_ads={this.fix_network_error} />

    }
    }
}

export default QuickSearch