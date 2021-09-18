import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Dimensions ,TextInput,Image,ScrollView, Alert,ActivityIndicato,Picker} from 'react-native';
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import base_url from '../../base_url'
import NetworkError from './NetworkError'
import * as ImagePicker from 'expo-image-picker';


class View_or_Edit_Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_info:[],
            network_error:false,
            user_name:'',
            phone_no:'',
            location:'',
            description:'',
            image:'',
            //errors
            user_name_error_state:'',
            location_error_state:'',
            phone_no_error_state:'',
        }

        this.getUserInfo()
    }
    
    getUserInfo = async()=>{
        const user =await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        Axios.get(base_url+'get_user_info?user_id='+parse.user_id)
        .then(res=>{
            console.log(res.data.user)
         this.setState({description:res.data.user.descriptions,user_info:res.data.user,user_name:res.data.user.user_name,phone_no:res.data.user.phone_no,location:res.data.user.location,is_loading:false})
        })
        .catch(err=>this.setState({network_error:true}))
       }


       pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({image:result})
         
         
        }
     
      }

       validate = ()=>{
        let user_name_error = ''
        let location_error = ''
        let phone_error = ''


        let phone_number_regex = /^[+#*\(\)\[\]]*([0-9][ ext+-pw#*\(\)\[\]]*){6,45}$/

        if(phone_number_regex.test(this.state.phone_no) == false){
            phone_error = 'Invalid Phone no'
        }

    if(this.state.user_name.length < 5){
        user_name_error = 'Username Must Be at least 5 characters'
        }else if(this.state.user_name.length > 15){
            user_name_error = 'Username Maximum Be 15 characters'
        }

    if(this.state.location.length<1){
        location_error = 'Please Fill the Location Field'
    }

    if(user_name_error || location_error || phone_error){
        this.setState({location_error_state: location_error,phone_no_error_state:phone_error,user_name_error_state:user_name_error})
        return false
    }
    return true


       }

       edit_profile = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        let is_validate = this.validate()

        if(is_validate){
         this.setState({user_name_error_state:'',
         location_error_state:'',
         phone_no_error_state:'',})

         let formData = new FormData()
         formData.append('user_id',parse.user_id)
         formData.append('phone_no',this.state.phone_no)
         formData.append('user_name',this.state.user_name)
         formData.append('location',this.state.location)
         let match = /\.(\w+)$/.exec(this.state.image.uri.split('/').pop());
         let type = match ? `image/${match[1]}` : `image`;
         formData.append('image',{
            name: this.state.image.uri.split('/').pop(),
            type: type,
            uri: Platform.OS === 'ios' ? this.state.image.uri.replace('file://', '') : this.state.image.uri,
        })

         if(this.state.description){
             formData.append('description',this.state.description)

             
         }


         Axios.post(base_url +'edit_profile',formData)
         .then(res=>{
             Alert.alert(res.data.msg)

             AsyncStorage.getItem( 'user' )
            .then( data => {

            // the string value read from AsyncStorage has been assigned to data
            console.log( data );

            // transform it back to an object
            data = JSON.parse( data );
            console.log( data );

            // Decrement
            data.phone_no=this.state.phone_no;
            data.user_name=this.state.user_name;
            data.location=this.state.location;

            console.log( data );

            //save the value to AsyncStorage again
            AsyncStorage.setItem( 'user', JSON.stringify( data ) );

            }).done();
            this.setState({is_loading:true})
            this.getUserInfo()

         })
         .catch(err=>Alert.alert(err))


        }
       }


       fix_network_error = ()=>{
        this.setState({is_loading:true,network_error:false})
        this.getUserInfo() 
     }
   
    
    render(){
        if(!this.state.network_error){
        if(!this.state.is_loading){
        return(
            <ScrollView>
                



            <View style={{ flexDirection:'row',padding:20 }}>

               
            <TouchableOpacity style={{ position:'absolute',marginLeft:Dimensions.get('window').width*2/2.4,marginTop:10 }} onPress={this.edit_profile}>
                   <Text style={{ color:'blue',fontSize:16 }}>Save</Text>
                </TouchableOpacity>

                {this.state.user_info.profile_pic || this.state.image.uri?
             <TouchableOpacity onPress={this.pickImage}>
             <Image source={{uri:this.state.image?this.state.image.uri:base_url+'static/profile_pics/'+this.state.user_info.profile_pic}} style={{width:75,height:75,borderRadius:100}}/>
             </TouchableOpacity>
             :
             <TouchableOpacity onPress={this.pickImage}>
             <MaterialCommunityIcons name='account-circle' size={90}/>
             </TouchableOpacity>
             }
            
             <View style={{ marginTop:10,marginLeft:10 }}>
                 <Text>Enter Your name</Text>
             <TextInput placeholder='Enter Your name' value={this.state.user_name} onChangeText={(val)=>this.setState({user_name:val})} 
             style={{ borderWidth:1,borderColor:'black',borderRadius:5,width:Dimensions.get('window').width*2/3,padding:5,marginTop:10 }}
             />
             </View>
            

            </View>

            <View >
            <Text style={{ marginLeft:23 }}>Something about you</Text>

            <TextInput multiline = {true}
            numberOfLines = {2} placeholder='something about you' value={this.state.description?this.state.description:''} onChangeText={(val)=>this.setState({description:val})} 
             style={{ borderWidth:1,borderColor:'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,padding:5,marginTop:10,marginLeft:26 }}
             />
        </View>
        <Text style={{height:0,width:'100%',borderColor:'gray',borderWidth:.5,marginTop:25,}}> </Text>


        <View style={{ padding:20, }}>
        <Text style={{ fontSize:18,fontWeight:'bold' }}>Contact Informations</Text>

        <Text style={{ marginTop:20 }}>Your Phone Number</Text>

        <TextInput keyboardType='numeric' placeholder='Phone Number' value={this.state.phone_no} onChangeText={(val)=>this.setState({phone_no:val})} 
        style={{ borderWidth:1,borderColor:'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,padding:5,marginTop:10 }}
        />
        

        <Text style={{ marginTop:20 }}>Your Location</Text>


            <View style={{ borderWidth:1,borderColor:'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10 }}>
                


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

        </View>
        
        

            </ScrollView>
        )
        }else{
            return <ActivityIndicator size='large' color='black' style={{alignSelf: 'center',marginTop:50}}/>
        }
    }else{
        return <NetworkError get_all_my_ads={this.fix_network_error} />
    }
    }
}


export default View_or_Edit_Profile