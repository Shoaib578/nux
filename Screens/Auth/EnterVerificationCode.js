import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,LogBox} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import Axios from 'axios';
import base_url from '../../base_url'

import AsyncStorage from '@react-native-async-storage/async-storage'

class EnterVerificationCode extends React.Component {
    constructor(props){
        super(props)
        LogBox.ignoreAllLogs()
        this.state = {
            verification_code:'',
            next_loading:false,

        }
    
    }
    
    verify_code = ()=>{
    if(this.state.verification_code == this.props.route.params.v_code){
        this.setState({next_loading:true})

        let formData = new FormData();
        formData.append('email',this.props.route.params.email)
        formData.append('req_time','2')
            Axios.post(base_url+'register_user_with_email',formData)
            .then(res=>{
                if(res.data.msg == 'You are Successfully Registered'){
                    this.setState({next_loading:false})
                    AsyncStorage.setItem('user',JSON.stringify(res.data.user))
                    AsyncStorage.setItem('location',res.data.user.location)
                        this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'home', screen: 'Home' }]
                        });
                    console.log('Hello')
                   
                }else{
                    this.setState({next_loading:false})

                    console.log('Not OK')
                    this.props.navigation.navigate('CreateYourPassword',{email:this.props.route.params.email})
                }
            })
            .catch(err=>Alert.alert(err))
    
    }else{
        this.setState({next_loading:false})

        Alert.alert('Incorrect Verification Code. Please Try Again')
    }
    
    }


    componentDidMount(){
        this.props.navigation.addListener('focus', () => {
            this.setState({verification_code:''})
          });
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={{ color:'white',fontSize:20,fontWeight:'bold',marginLeft:20,marginTop:30 }}>Enter  Verification Code : </Text>
                <TextInput placeholder="Enter Verification Code" style={ styles.textInput }
                keyboardType='numeric'
                onChangeText={(val)=>this.setState({verification_code:val})}
                />

                

             
                {this.state.next_loading?<ActivityIndicator color='white' size='large'/>:null}

                <TouchableOpacity style={styles.buttons} onPress={this.verify_code}>
                   
                    <Text style={{ color:'white',fontSize:16,fontWeight:'bold'}}>Verify</Text>
                </TouchableOpacity>
            </View>
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
        borderColor:'white',
        borderWidth:1,
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
        marginTop:Dimensions.get('window').height*2/3.3,
        position:'relative'
        
    },
    container:{
        flex:1,
        
        
        backgroundColor:'#229dd0'
    }
})
export default EnterVerificationCode