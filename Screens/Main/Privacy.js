import React from 'react'

import { View,Text,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetworkError from './NetworkError'
import Axios from 'axios'
import base_url from '../../base_url'


class Privacy extends React.Component{

    delete_account = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        Axios.get(base_url+'delete_account?user_id='+parse.user_id)
        .then(res=>{
            AsyncStorage.removeItem('user')
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'auth', screen: 'GetStart' }]
            });
        })
        .catch(err=>{
            Alert.alert('Something Went Wrong')
            return false
        })
    }


    confirm_deleting_account = ()=>{
        Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove this beautiful box?",
            [
              // The "Yes" button
              {
                text: "Yes",
                onPress: () => {
                  this.delete_account()
                },
              },
              // The "No" button
              // Does nothing but dismiss the dialog when tapped
              {
                text: "No",
              },
            ]
          );
    }
    render(){
        return(
            <View>
                <TouchableOpacity style={[styles.buttons,{marginTop:10}]} onPress={()=>this.props.navigation.navigate('CreateNewPassword')}>
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Create Password</Text>
                  

              </TouchableOpacity>

              <TouchableOpacity style={[styles.buttons,{marginTop:10,backgroundColor:'red'}]} onPress={this.confirm_deleting_account}>
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Delete Account</Text>
                  

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
export default Privacy