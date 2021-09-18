import React from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import Axios from 'axios';
import base_url from '../../base_url'

class EnterYourEmail extends React.Component {

    state = {
        email:'',
        next_loading:false,
        //error
        email_error_state:''


    }
    validate = ()=>{
    email_error = ''
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email_regex.test(this.state.email) == false){
        email_error = 'Invalid email'
    }

    if(email_error){
        this.setState({email_error_state:email_error})
        return false

    }

    return true
    }




    next = ()=>{
    let is_validate = this.validate()

    if(is_validate){
        this.setState({email_error_state:''})

        let formData = new FormData()
        formData.append('req_time','1')
        formData.append('email',this.state.email)

        Axios.post(base_url+'register_user_with_email',formData)
        .then(res=>{
        this.setState({next_loading:true})
        setTimeout(()=>{

        },1000)
        this.setState({next_loading:false})
        this.props.navigation.navigate('EnterVerificationCode',{v_code:res.data.v_code,email:this.state.email})

        })
        .catch(err=>Alert.alert(err))

    }
    }



    componentDidMount(){
    this.props.navigation.addListener('focus', () => {
        this.setState({email:'',email_error_state:''})
      });
    }

    render(){
        return(
            <ScrollView style={styles.container}>

                <FontAwesome5 name='user-circle' color='white' size={50} style={{marginLeft:20,marginTop:30}}/>
                <Text style={{ color:'white',fontSize:20,fontWeight:'bold',marginLeft:20,marginTop:30 }}>Enter Your Email : </Text>
                <TextInput value={this.state.email} placeholder="Enter Your Email" style={[styles.textInput,{borderColor:this.state.email_error_state?'red':'white',borderWidth:this.state.email_error_state?2:1,}]}
                
                onChangeText={(val)=>this.setState({email:val})}
                />

                <Text style={{ color:'red',fontSize:20,marginLeft:20 }}>{this.state.email_error_state}</Text>


               {this.state.next_loading?<ActivityIndicator size='large' color='white'/>:null}

                <TouchableOpacity style={styles.buttons} onPress={this.next}>
                   
                    <Text style={{ color:'white',fontSize:16,fontWeight:'bold'}}>Next</Text>
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
        marginTop:Dimensions.get('window').height*2/4.5,
        position:'relative'
        
    },
    container:{
        flex:1,
        
        
        backgroundColor:'#229dd0'
    }
})
export default EnterYourEmail