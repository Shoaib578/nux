import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Picker,LogBox} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import * as Notifications from 'expo-notifications';

import AsyncStorage from '@react-native-async-storage/async-storage'


class LoginWithGoogle extends React.Component {

    constructor(props){
        super(props)
        LogBox.ignoreAllLogs()
        this.state = {
            next_loading:false,
     
            location:'',
            phone_no:'',
            token:'',
            //errors
           
            location_error_state:''
    
        }
    }
    

    validate = ()=>{
   
    let location_error = ''

   
    let phone_error = ''
    let phone_number_regex = /^[+#*\(\)\[\]]*([0-9][ ext+-pw#*\(\)\[\]]*){6,45}$/

    if(phone_number_regex.test(this.state.phone_no) == false){
        phone_error = 'Invalid Phone no'
    }

    

    if(this.state.location.length<1){
        location_error = 'Please Fill the Location Field'
    }

    if(location_error || phone_error){
        this.setState({location_error_state:location_error,phone_error_state:phone_error})
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



   
    login = ()=>{
        let is_validate = this.validate()

        if(is_validate){
         this.setState({location_error_state:'',phone_error_state:'',next_loading:true})
         let formData = new FormData()
         formData.append('req_time','2')
        
         
         formData.append('user_name',this.props.route.params.user_name)
         formData.append('email',this.props.route.params.email)
         formData.append('location',this.state.location)
         formData.append('phone_no',this.state.phone_no)
         formData.append('token',this.state.token)

         Axios.post(base_url+'login_with_google',formData)
         .then(res=>{
            this.setState({next_loading:false})
            AsyncStorage.setItem('user',JSON.stringify(res.data.user))
            AsyncStorage.setItem('location',this.state.location)

            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'home', screen: 'Home' }]
            });
         })
         .catch(err=>Alert.alert(err))
        }
    }

   
    componentDidMount(){
        this.registerForPushNotificationsAsync()
    }
    
    render(){
        return(
            <View style={styles.container}>
          <View style={{ marginTop:50 }}>

          <View style={{ borderWidth:1,borderColor:this.state.location_error_state?'red':'white',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10,backgroundColor:'white',alignSelf:'center' }}>
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



         
             
             <Text style={{ color:'red',fontSize:17 }}>{this.state.location_error_state}</Text>

             <TextInput placeholder="Your Phone Number"  style={[styles.textInput,{borderColor:this.state.phone_error_state?'red':'white',
            borderWidth:this.state.phone_error_state?2:1,} ]}
                
                onChangeText={(val)=>this.setState({phone_no:val})}
                />
             
             <Text style={{ color:'red',fontSize:17 }}>{this.state.phone_error_state}</Text>  
          </View>
          {this.state.next_loading?<ActivityIndicator color='white' size='large'/>:null}

          <TouchableOpacity style={styles.buttons} onPress={this.login}>
                   
                   <Text style={{ color:'white',fontSize:16,fontWeight:'bold'}}>Login</Text>
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
        
        marginTop:20,
        alignItems:'center',
        
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
        marginTop:Dimensions.get('window').height*2/12,
        
        
    },
    container:{
        flex:1,
        
         alignItems:'center',
        backgroundColor:'#229dd0'
    }
})

export default LoginWithGoogle