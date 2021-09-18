import React from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import Axios from 'axios';
import base_url from '../../base_url'

class EnterYourPhoneNumber extends React.Component {

    state = {
        phone_no:'',
        next_loading:false,
       
        //error
        phone_error_state:'',
       


    }
    validate = ()=>{
    let phone_error = ''
    
    let phone_number_regex = /^[+#*\(\)\[\]]*([0-9][ ext+-pw#*\(\)\[\]]*){6,45}$/

    if(phone_number_regex.test(this.state.phone_no) == false){
        phone_error = 'Invalid Phone no'
    }



    if(phone_error ){
        this.setState({phone_error_state:phone_error})
        return false

    }

    return true
    }




    next = ()=>{
    let is_validate = this.validate()

    if(is_validate){
        console.log(this.state.phone_no)


        this.setState({phone_error_state:'',next_loading:true})

        let formData = new FormData()
        formData.append('req_time','1')
        formData.append('phone_no',this.state.phone_no)
        


        Axios.post(base_url+'register_phone_number',formData)
        .then(res=>{
          
            if(res.data.msg == 'need a password'){
                this.setState({next_loading:false})
                this.props.navigation.navigate('PhoneNumberPassword',{phone_no:this.state.phone_no})
            }else{
                this.setState({next_loading:false})

                this.props.navigation.navigate('CreateYourPasswordPhone',{phone_no:this.state.phone_no})

            }

        })
        .catch(err=>Alert.alert(err))

    }
    }


    


    componentDidMount(){

        
    this.props.navigation.addListener('focus', () => {
        this.setState({phone_no:'',phone_error_state:''})
      });
    }

    render(){
        return(
            <ScrollView style={styles.container}>

                <FontAwesome5 name='user-circle' color='white' size={50} style={{marginLeft:20,marginTop:30}}/>
                <Text style={{ color:'white',fontSize:20,fontWeight:'bold',marginLeft:20,marginTop:30 }}>Enter Your Phone no : </Text>
                <TextInput keyboardType='numeric' placeholder='Enter Your Phone Number' value={this.state.phone_no}  style={[styles.textInput,{borderColor:this.state.phone_error_state?'red':'white',borderWidth:this.state.phone_error_state?2:1,}]}
                
                onChangeText={(val)=>{
                    this.setState({phone_no:val})
                    console.log(this.state.phone_no)
                }}
                />

                <Text style={{ color:'red',fontSize:20,marginLeft:20 }}>{this.state.phone_error_state}</Text>



               


              {this.state.next_loading?<ActivityIndicator color='white' size='large'/>:null}

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
        marginTop:Dimensions.get('window').height*2/6.5,
        position:'relative'
        
    },
    container:{
        flex:1,
        
        
        backgroundColor:'#229dd0'
    }
})
export default EnterYourPhoneNumber