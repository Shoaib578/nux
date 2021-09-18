import React from 'react'
import {View,Text,Button,TouchableOpacity,ScrollView, Alert,ActivityIndicator,Dimensions,Platform,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetworkError from './NetworkError'
import Axios from 'axios'
import base_url from '../../base_url'
import Product from './Product'
import {FontAwesome5,AntDesign,FontAwesome,Entypo,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import {AdMobBanner} from 'expo-ads-admob'
import { LogBox } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Application from 'expo-application';
class Settings extends React.Component {

    logout = async()=>{
        
        await AsyncStorage.removeItem('user')
        this.props.navigation.reset({
           index: 0,
           routes: [{ name: 'auth', screen: 'GetStart' }]
       });
     
    };


    openAppSettings = () => {
        IntentLauncher.startActivityAsync(
            IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
            {
              data: `package:${Application.applicationId}`,
            }
          );

      }



    render(){
        return(
            <View>


            <TouchableOpacity onPress={this.openAppSettings} style={[styles.buttons,{marginTop:10}]} >
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Notifications</Text>
                  

              </TouchableOpacity>



                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Privacy')} style={[styles.buttons,{marginTop:10}]} >
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Privacy</Text>
                  

              </TouchableOpacity>
               

              


            <TouchableOpacity style={[styles.buttons,{marginTop:10}]} onPress={this.logout}>
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Logout</Text>
                  

              </TouchableOpacity>
            </View>
        )
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
export default Settings