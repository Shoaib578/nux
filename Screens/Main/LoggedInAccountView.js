import React from 'react';

import { View,Text,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,Image } from 'react-native';
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import base_url from '../../base_url'
import NetworkError  from './NetworkError';
import {AdMobBanner} from 'expo-ads-admob'


class LoggedInAccountView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_info:[],
           
            network_error:false,
            is_loading:true,
            image:''
        }
        this.bannerAdId = Platform.OS == 'ios'?"ca-app-pub-6656021178623765~9816867734":"ca-app-pub-6656021178623765~6155796659"

    }
    





    logout = async()=>{
        
        await AsyncStorage.removeItem('user')
        this.props.navigation.reset({
           index: 0,
           routes: [{ name: 'auth', screen: 'GetStart' }]
       });
     
    };
   

    getUserInfo = async()=>{
     const user =await AsyncStorage.getItem('user')
     const parse = JSON.parse(user)
     Axios.get(base_url+'get_user_info?user_id='+parse.user_id)
     .then(res=>{
       
      this.setState({user_info:res.data.user, is_loading:false,})
     })
     .catch(err=>this.setState({network_error:true}))
    }

    fix_network_error = ()=>{
        this.setState({is_loading:true,network_error:false})
        this.getUserInfo() 
     }


  async componentDidMount() {
      await this.getUserInfo()
       this.props.navigation.addListener('focus',async () => {
        this.setState({is_loading:true})
        await  this.getUserInfo()
      });
   }
    render(){
        if(!this.state.network_error){
        if(!this.state.is_loading){
        

        return(
            <View>
           <View style={{ flexDirection:'row',padding:20 }}>

            

           {this.state.user_info.profile_pic ?
             
             <Image source={{uri:base_url+'static/profile_pics/'+this.state.user_info.profile_pic}} style={{width:75,height:75,borderRadius:100}}/>
           
             :
             
             <MaterialCommunityIcons name='account-circle' size={90}/>
             
             }
             <View style={{ marginTop:15,marginLeft:10 }}>
             <Text style={{ color:'black',fontSize:20,fontWeight:'bold',marginTop:10 }}>{this.state.user_info.user_name?this.state.user_info.user_name.substring(0, 6):null}</Text>
             
            
             </View>
            

            </View>

            



                <TouchableOpacity onPress={()=>this.props.navigation.navigate('View_or_Edit_Profile')} style={[styles.buttons,{marginTop:20}]} >
                  
                    <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>View or Edit profile</Text>
                 

                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttons,{marginTop:10}]} onPress={()=>this.props.navigation.navigate('Settings')}>
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Settings</Text>
                  <Text style={{ color:'gray' }}>Privacy and Logout</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.buttons,{marginTop:10}]} onPress={()=>this.props.navigation.navigate('Help and Support')}>
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Help & Support</Text>
                  <Text style={{ color:'gray' }}>Help Center and Legal terms</Text>

              </TouchableOpacity>


                <View style={{ marginTop:Dimensions.get('window').height*2/5}}>

            <AdMobBanner 
            bannerSize='fullBanner'
            adUnitID={this.bannerAdId}
            servePersonalizedAds ={false}
           
            
            />
            </View>


            </View>

        )

    

    }else{
        return <ActivityIndicator size="large" color='black' style={{alignSelf: 'center',marginTop:50}}/>
    }

    }else{
        return <NetworkError get_all_my_ads={this.fix_network_error}/>
    }

    }
}

const styles = StyleSheet.create({
    buttons:{
        borderWidth:1,
        borderColor:'#E4E4E4',
        padding:10,
        width:Dimensions.get('window').width,
        
        borderRadius:5 ,
        alignSelf:'center',
        backgroundColor:'#E4E4E4'
      
    },
    container:{
        flex:1,
        
        alignItems: 'center',
        backgroundColor:'#1A1AFF'
    }
})
export default LoggedInAccountView