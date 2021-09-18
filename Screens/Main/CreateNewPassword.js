import React from 'react'
import {View,Text,TextInput,Share,TouchableOpacity,ScrollView, Alert,ActivityIndicator,Dimensions,Platform,StyleSheet,Linking} from 'react-native';
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../base_url'


class CreateNewPassword extends React.Component{
    state = {
        password:'',
        confirm_password:''
    }

    update_password = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
      

        if(this.state.confirm_password == this.state.password){

        let formData = new FormData();
        formData.append('password',this.state.password)
        formData.append('user_id',parse.user_id)
        Axios.post(base_url+'update_password',formData)
        .then(res=>{
            this.setState({password:'',confirm_password:''})
            Alert.alert(res.data.msg)
            
        })
        .catch(err=>Alert.alert('Something Went Wrong'))
    }else{
        Alert.alert('Please Confirm Your Password')
    }


    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center',}}>
                <TextInput onChangeText={(val)=>{
                    console.log(val)
                    this.setState({password:val})}} value={this.state.password} placeholder='Password' style={{ borderWidth:1,borderColor:'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,padding:9,marginTop:40 }}/>
                <TextInput value={this.state.confirm_password} onChangeText={(val)=>this.setState({confirm_password:val})} placeholder='Confirm New Password' style={{ borderWidth:1,borderColor:'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,padding:9,marginTop:20 }}/>
                <TouchableOpacity onPress={this.update_password} style={{ borderWidth:1,borderColor:'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,padding:14,marginTop:70,justifyContent:'center',alignItems:'center' }}>
                    <Text>Create Password</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default CreateNewPassword