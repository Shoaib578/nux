import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,ScrollView } from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetworkError  from './NetworkError';
import Product from './Product'
import HomePageProductsAds from './HomePageProductsAds'
import {AdMobBanner} from 'expo-ads-admob'

class Favorites extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ads:[],
            is_loading:true,
            network_error:false,
            
        }
        this.bannerAdId = Platform.OS == 'ios'?"ca-app-pub-6656021178623765~9816867734":"ca-app-pub-6656021178623765~6155796659"


    }
   
    get_favorite_ads = async()=>{
        const user= await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        Axios.get(base_url +'my_favorite?user_id='+parse.user_id)
        .then(res=>this.setState({ads:res.data.products,is_loading:false}))
        .catch(err=>this.setState({network_error:true}))
    }

    get_favorite_ads_after_update = async()=>{
        
        

      await  this.setState({is_loading:true})

        this.get_favorite_ads()

    }

    isLoggedIn = async()=>{
        console.log('Checking')
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
      
        if(parse == null){
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'auth', screen: 'GetStart' }]
            });
        }

        }

        
    fix_network_error = ()=>{
        this.setState({is_loading:true,network_error:false})
        this.get_favorite_ads() 
     }

  async  componentDidMount(){
     await   this.get_favorite_ads()

        this.props.navigation.addListener('focus', async() => {
            this.setState({is_loading:true})
           await this.get_favorite_ads()

          });
    }


    render(){
        if(!this.state.network_error){
        if(!this.state.is_loading){
        return(
            <ScrollView >

            <View style={{ marginTop:20}}>

                    <AdMobBanner 
                    bannerSize='fullBanner'
                    adUnitID={this.bannerAdId}
                    servePersonalizedAds ={false}


                    />
                    </View>

                {this.state.ads.length>0?<View style={{flex:1, flexDirection:'row',marginRight:30,flexWrap:'wrap',justifyContent:'space-between',marginTop:20}}>
              {this.state.ads.map((data,index)=>(
                  <View>
                  <Product  data={data}  key={data.product_id} navigation={this.props.navigation} get_favorite={this.get_favorite_ads_after_update} />

                  {index%6 == 5?
                  <View style={{ padding:20 }}>
                    
                       
                     <AdMobBanner 
                     bannerSize='banner'
                     adUnitID={this.bannerAdId}
                     servePersonalizedAds ={false}
                    
                     
                     />
 
            
                    
 
                   
                     </View>
                     :null}

                  </View>
              ))}
              </View>:
              <View style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
                  <Text style={{ fontSize:18,marginTop:50 }}>You Dont Have Any Favorite items</Text>
              </View>
              }

             <Text style={{ marginBottom:150 }}> </Text>    

                  </ScrollView>
        
        )
        }else{
            return <ActivityIndicator size="large" color='black' style={{alignSelf: 'center',marginTop:50}}/>
        }
    
    }else{
        return <NetworkError get_all_my_ads={this.fix_network_error}/>

    }

    }
}

export default Favorites