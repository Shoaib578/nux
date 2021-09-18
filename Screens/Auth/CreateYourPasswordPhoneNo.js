import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Picker,LogBox} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import Axios from 'axios';
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'

class CreateYourPasswordPhoneNo extends React.Component {
    constructor(props){
        super(props)
        LogBox.ignoreAllLogs()
        this.state = {
            password:'',
            confirm_password:'',
            user_name:'',
            location:'',
            next_loading:false,
            token:'',
            //errors
            confirm_pass_error_state:'',
            pass_error_state:'',
            user_name_error_state:'',
            location_error_state:'',
            
    
        }
    

    }
    
    validate = ()=>{
    let confirm_password_error = ''
    let password_error = ''
    let user_name_error = ''
    let location_error = ''

    if(this.state.confirm_password != this.state.password){
     confirm_password_error = 'Password Does Not Match'
    }

    
    

   

    if(this.state.password.length < 8){
        password_error = 'Password Must Be at least 8 characters'
    }else if(this.state.password.length > 15){
       password_error = 'Password Max Length is 15'
    }

    if(this.state.user_name.length < 5){
    user_name_error = 'Username Must Be at least 5 characters'
    }

    if(this.state.location.length<1){
        location_error = 'Please Fill the Location Field'
    }

    if(confirm_password_error || password_error || user_name_error || location_error ){
        this.setState({confirm_pass_error_state:confirm_password_error,pass_error_state:password_error,user_name_error_state:user_name_error,location_error_state:location_error,})
        return false
    }

    return true
    }


    registerForPushNotificationsAsync = async()=>{
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        this.setState({token:token})
        
      }




    create_password = ()=>{
        let is_validate = this.validate()
        

        if(is_validate){

            console.log('hello there')


         this.setState({confirm_pass_error_state:'',pass_error_state:'',user_name_error_state:'',location_error_state:'',next_loading:true})
         let formData = new FormData()
         formData.append('req_time','3')
        
         formData.append('password',this.state.password)
         formData.append('user_name',this.state.user_name)
         formData.append('location',this.state.location)
         formData.append('phone_no',this.props.route.params.phone_no)
         formData.append('token',this.state.token)
         Axios.post(base_url+'register_phone_number',formData)
         .then(res=>{
            this.setState({next_loading:false})
            AsyncStorage.setItem('user',JSON.stringify(res.data.user))
            AsyncStorage.setItem('location',this.state.location)
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'home', screen: 'Home' }]
            });
         })
         .catch(err=>console.log('Something Went Wromg'))
        }
    }

    componentDidMount(){
        this.registerForPushNotificationsAsync()
    }
    render() {
        return (
           <ScrollView style={styles.container}>
            <View style={{ marginTop:50 }}>


            <TextInput placeholder="Username" style={[ styles.textInput,{borderColor:this.state.user_name_error_state?'red':'white',
            borderWidth:this.state.user_name_error_state?2:1,}] }
                
                onChangeText={(val)=>this.setState({user_name:val})}
                />
           <Text style={{ color:'red',textAlign:'center' }}>{this.state.user_name_error_state}</Text>

            <TextInput placeholder="Password" secureTextEntry style={[ styles.textInput,{borderColor:this.state.pass_error_state?'red':'white',
            borderWidth:this.state.pass_error_state?2:1,}] }
                
                onChangeText={(val)=>this.setState({password:val})}
                />
                <Text style={{ color:'red',textAlign:'center' }}>{this.state.pass_error_state}</Text>

            <TextInput placeholder="Confirm Password" secureTextEntry style={[styles.textInput,{borderColor:this.state.confirm_pass_error_state?'red':'white',
            borderWidth:this.state.confirm_pass_error_state?2:1,} ]}
                
                onChangeText={(val)=>this.setState({confirm_password:val})}
                />

        <Text style={{ color:'red',textAlign:'center' }}>{this.state.confirm_pass_error_state}</Text>
                
        <View  style={{ borderWidth:1,borderColor:this.state.location_error_state?'red':'white',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10,backgroundColor:'white',alignSelf:'center',}}>
                <Picker

                selectedValue={this.state.location}
                onValueChange={(val)=>{this.setState({location:val})}}

                mode="dropdown">
                <Picker.Item label="Location" value='' />

                <Picker.Item label="Badakhshan" value='Badakhshan' />
                <Picker.Item label="Badghis" value='Badghis'/>

                <Picker.Item label="Baghlan" value='Baghlan'/>

                <Picker.Item label="Balkh" value='Balkh'/>

                <Picker.Item label="Bamyan" value='Bamyan'/>

                <Picker.Item label="Daykundi" value='Daykundi'/>
                <Picker.Item label="Farah" value='Farah'/>
                <Picker.Item label="Faryab" value='Faryab'/>
                <Picker.Item label="Ghazni" value='Ghazni'/>
                <Picker.Item label="Ghor" value='Ghor'/>
                <Picker.Item label="Helmand" value='Helmand'/>
                <Picker.Item label="Herat" value='Herat'/>
                <Picker.Item label="Jowzjan" value='Jowzjan'/>
                <Picker.Item label="Kabul" value='Kabul'/>
                <Picker.Item label="Kandahar" value='Kandahar'/>
                <Picker.Item label="Kapisa" value='Kapisa'/>
                <Picker.Item label="Khost" value='Khost'/>
                <Picker.Item label="Kunar" value='Kunar'/>
                <Picker.Item label="Kunduz" value='Kunduz'/>
                <Picker.Item label="Laghman" value='Laghman'/>
                <Picker.Item label="Logar" value='Logar'/>
                <Picker.Item label="Nangarhar" value='Nangarhar'/>
                <Picker.Item label="Nimruz" value='Nimruz'/>
                <Picker.Item label="Nuristan" value='Nuristan'/>

                <Picker.Item label="Paktia" value='Paktia'/>
                <Picker.Item label="Paktika" value='Paktika'/>
                <Picker.Item label="Panjshir" value='Panjshir'/>
                <Picker.Item label="Parwan" value='Parwan'/>
                <Picker.Item label="Samangan" value='Samangan'/>
                <Picker.Item label="Sar-e Pol" value='Sar-e Pol'/>



                <Picker.Item label="Takhar" value='Takhar'/>
                <Picker.Item label="Uruzgan" value='Uruzgan'/>
                <Picker.Item label="Maidan Wardak" value='Maidan Wardak'/>
                <Picker.Item label="Zabul" value='Zabul'/>
                

                </Picker>
                </View>



                <Text style={{ color:'red',textAlign:'center' }}>{this.state.location_error_state}</Text>
         
             
                  

            </View>

            {this.state.next_loading?<ActivityIndicator color='white' size='large'/>:null}


            <TouchableOpacity style={styles.buttons} onPress={this.create_password}>
                   
                   <Text style={{ color:'white',fontSize:16,fontWeight:'bold'}}>Create</Text>
               </TouchableOpacity>

               <Text style={{ marginBottom:10 }}> </Text>
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
        marginTop:Dimensions.get('window').height*2/24,
        
        
    },
    container:{
        flex:1,
        
        
        backgroundColor:'#229dd0'
    }
})
export default CreateYourPasswordPhoneNo