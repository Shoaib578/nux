import React from 'react';
import {View,Text, Button, TouchableOpacity,Dimensions,StyleSheet,Image,Alert, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Feather} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import NUX from '../../Components/images/NUX.png'
import * as Facebook from 'expo-facebook';
import Axios from 'axios'
import base_url from '../../base_url'
import { LogBox } from 'react-native';
import * as Google from 'expo-google-app-auth';

 






class GetStart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
        }
        LogBox.ignoreAllLogs()
    }

      logIn= async()=> {
        try {
          await Facebook.initializeAsync({
            appId: '1627472480784654',
          });
          const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {
              this.setState({loading:true})
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            const user_name = (await response.json()).name
            this.check_facebook_user_name_exist(user_name)
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
      



      loginWithGoogle = async()=>{
        try{
            const { type, accessToken, user } = await Google.logInAsync({
                iosClientId: "45903613101-4qtkjde1jmlnle86938mcvprjfnuo4ot.apps.googleusercontent.com",
                androidClientId: `602019086862-gbuv3erg4lml66bcp8ijrpsaglhsibnc.apps.googleusercontent.com`,
               
              });
              

        if(type === 'success'){
            this.setState({loading:true})

            this.check_google_user_exist(user)
        }else{
            console.log('Cancelled')
        }
        }catch(e){
            console.log(e)
        }
      }



      check_google_user_exist = (user)=>{
          console.log(user.email)
       let formData = new FormData()
       formData.append('email',user.email)
       formData.append('req_time','1')

       Axios.post(base_url+'login_with_google',formData)
       .then(res=>{
           console.log(res.data.msg)
           if(res.data.msg == 'found'){
            AsyncStorage.setItem('user',JSON.stringify(res.data.user))
            AsyncStorage.setItem('location',res.data.user.location)
            this.setState({loading:false})

            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'home', screen: 'Home' }]
            });
           }else{
            this.setState({loading:false})

            this.props.navigation.navigate('LoginWithGoogle',{email:user.email,user_name:user.name})

           }
       })

      }



   check_facebook_user_name_exist = (user_name)=>{
        console.log(user_name)
        let formData = new FormData()
        
        formData.append('req_time','1')
        formData.append('user_name',user_name)
        
        Axios.post(base_url+'register_with_facebook',formData)
        .then(res=>{
            console.log(res.data.msg)

            if(res.data.msg == 'found'){

                AsyncStorage.setItem('user',JSON.stringify(res.data.user))
                 AsyncStorage.setItem('location',res.data.user.location)
                 this.setState({loading:false})

                this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'home', screen: 'Home' }]
                });
            }else{
                this.setState({loading:false})

                this.props.navigation.navigate('LoginWithFacebook',{user_name:user_name})
            }
        })
        
        
        
        }
      

    render(){
        return(
            <View style={styles.container}>

                <TouchableOpacity style={{ top:50,marginRight:Dimensions.get('window').width*2/2.5 }} onPress={async()=>{ 
                    
               await AsyncStorage.setItem('location','Kabul')    
                this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'home', screen: 'Home' }]
            })
            
            }}
            
            >
                <AntDesign name="close" size={30} color='white'/>

                </TouchableOpacity>


                <Image source={NUX} style={{width:320,height:320,position:'absolute'}}/>

                    <Text style={{ color:'white',fontWeight:'bold',fontSize:25 ,marginTop:Dimensions.get('window').height*2/7}}>Welcome To NUX</Text>
                    <Text style={{ color:'white',fontSize:20 }}>The trusted community of</Text>
                    <Text style={{ color:'white',fontSize:20 }}>buyers and sellers</Text>
                    

                <TouchableOpacity disabled={this.state.loading} style={[styles.buttons,{marginTop:30}]} onPress={()=>this.props.navigation.navigate('EnterYourPhoneNumber')}>
                    <Feather name="smartphone" color="white" size={25}/>
                    <Text style={{ color:'white',fontSize:16,fontWeight:'bold',left:10 }}>Continue With Phone</Text>
                </TouchableOpacity>


                <TouchableOpacity disabled={this.state.loading} style={[styles.buttons,{marginTop:20}]} onPress={this.logIn}>
                    <Feather name="facebook" color="white" size={25} style={{left:5}}/>
                    <Text style={{ color:'white',fontSize:16,fontWeight:'bold',left:10 }}>Continue With Facebook</Text>
                </TouchableOpacity>


                <TouchableOpacity disabled={this.state.loading} style={[styles.buttons,{marginTop:20}]} onPress={this.loginWithGoogle}>
                    <AntDesign name="google" color="white" size={25}/>
                    <Text style={{ color:'white',fontSize:16,fontWeight:'bold',left:10 }}>Continue With Google</Text>
                </TouchableOpacity>

                {this.state.loading?<ActivityIndicator style={{position:'absolute',top:Dimensions.get('window').height*2/5}} size="large" color='white'/>:null}

                <TouchableOpacity disabled={this.state.loading} style={[styles.buttons,{marginTop:20}]} onPress={()=>this.props.navigation.navigate('EnterYourEmail')}>
                    <Feather name="mail" color="white" size={25}/>
                    <Text style={{ color:'white',fontSize:16,fontWeight:'bold',left:10 }}>Continue With Email</Text>
                </TouchableOpacity>



                <Text style={{ color:'white',marginTop:30 }}>if you Continue, it mean that you</Text>
                <View style={{ flexDirection:'row' }}>
                <Text style={{ color:'white'}}>are accepting this</Text>

                <TouchableOpacity disabled={this.state.loading} onPress={()=>this.props.navigation.navigate('Privacy Policy')} style={{ left:5 }}>
                    <Text style={{ color:'black',fontWeight:'bold' }}>term and conditions</Text>
                </TouchableOpacity>

                 </View>
               
            </View>
        )
    }
}


const styles = StyleSheet.create({
    buttons:{
        borderWidth:1,
        borderColor:'white',
        padding:10,
        width:Dimensions.get('window').width*2/2.5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5 ,
        flexDirection:'row'
    },
    container:{
        flex:1,
        
        alignItems: 'center',
        backgroundColor:'#229dd0'
    }
})
export default GetStart