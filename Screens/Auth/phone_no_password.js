import React from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import Axios from 'axios';
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'

class PhoneNumberPassword extends React.Component {

    state = {
     
        next_loading:false,
        password:'',
        //error
      
        password_error_state:''


    }
    validate = ()=>{
   
    let password_error = ''
    

   
    if(this.state.password.length<8){
        password_error = 'Password Must Be Atlease 8 Chars' 
    }

    if(password_error){
        this.setState({password_error_state:password_error})
        return false

    }

    return true
    }




    next = ()=>{
    let is_validate = this.validate()

    if(is_validate){
        


        this.setState({password_error_state:'',next_loading:true})

        let formData = new FormData()
        formData.append('req_time','2')
        formData.append('password',this.state.password)
        formData.append('phone_no',this.props.route.params.phone_no)


        Axios.post(base_url+'register_phone_number',formData)
        .then(res=>{
          
            if(res.data.msg == 'logged in'){
                this.setState({next_loading:false})
                AsyncStorage.setItem('user',JSON.stringify(res.data.user))
                AsyncStorage.setItem('location',res.data.user.location)
                this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'home', screen: 'Home' }]
                });
            }else{
                this.setState({next_loading:false})

                Alert.alert('Wrong Password')
                return false
            }

        })
        .catch(err=>Alert.alert(err))

    }
    }


    


   

    render(){
        return(
            <ScrollView style={styles.container}>

                <FontAwesome5 name='user-circle' color='white' size={50} style={{marginLeft:20,marginTop:30}}/>
                <Text style={{ color:'white',fontSize:20,fontWeight:'bold',marginLeft:20,marginTop:30 }}>Account Already Exist By this Phone Number Need a Password : </Text>
                



                <TextInput secureTextEntry  placeholder='Enter Your Password' value={this.state.password}  style={[styles.textInput,{borderColor:this.state.password_error_state?'red':'white',borderWidth:this.state.password_error_state?2:1,}]}
                
                onChangeText={(val)=>{
                    this.setState({password:val})
                   
                }}
                />

                <Text style={{ color:'red',fontSize:20,marginLeft:20 }}>{this.state.password_error_state}</Text>


          {this.state.next_loading?<ActivityIndicator color='white' size='large'/>:null}
              

                <TouchableOpacity style={styles.buttons} onPress={this.next}>
                   
                    <Text style={{ color:'white',fontSize:16,fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    textInput:{
        
        
        padding:8,
        width:Dimensions.get('window').width*2/2.2,
        color:'black',
        backgroundColor:'white',
        borderRadius:5 ,
        flexDirection:'row',
        marginLeft:20,
        marginTop:20,
    },
    buttons:{
        borderWidth:1,
        borderColor:'white',
        padding:10,
        width:Dimensions.get('window').width*2/2.3,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5 ,
        flexDirection:'row',
        alignSelf:'center',
        marginTop:Dimensions.get('window').height*2/6.5,
        position:'relative'
        
    },
    container:{
        flex:1,
        
        
        backgroundColor:'#229dd0'
    }
})
export default PhoneNumberPassword