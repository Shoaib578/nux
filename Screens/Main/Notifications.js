import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'
import NetworkError from './NetworkError'

class Notifications extends React.Component {

    constructor(props) {
        super(props)
        this.isLoggedIn()
    }
    state = {
        is_loading:true,
        network_error:false,
        notifications:[]
    }

    delete_notification = (id)=>{
        Axios.get(base_url+'delete_notifications?notification_id='+id)
        .then(res=>{
            this.setState({is_loading:true})
            this.get_notifications()
        })
        .catch(err=>{
            return false
        })
    }


    isLoggedIn = async()=>{
        console.log('Checking')
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
      
        if(parse == null){
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'auth', screen: 'GetStart' }]
            });
        }

        }



    get_notifications = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)

        Axios.get(base_url +'get_notifications?my_id='+parse.user_id)
        .then(res=>{
            console.log(res.data)
            this.setState({notifications:res.data.notifications,is_loading:false})
        })
        .catch(err=>this.setState({network_error:true}))
    }


    componentDidMount() {
        this.get_notifications()
        this.props.navigation.addListener('focus',async()=>{
          await  this.get_notifications()
        })
    }
    render(){
        if(!this.state.network_error){
            if(!this.state.is_loading){
            if(this.state.notifications.length>0){

            return(
                <ScrollView >
                   {this.state.notifications.map(data=>(
                   <TouchableOpacity key={data.notification_id} onPress={()=>this.props.navigation.navigate('Chats',{product_owner_id:data.user_id})} style={{ width:Dimensions.get('window').width,padding:15,flexDirection:'row',backgroundColor:'#E4E4E4',marginTop:20}} key={data.recent_id}>
                 <MaterialCommunityIcons name='account-circle' size={43}/>
    
                    <Text style={{ color:'black',fontSize:16,top:12,left:5 }}>{data.user_name} {data.notification_txt}</Text>

                    <TouchableOpacity onPress={()=>this.delete_notification(data.notification_id)} style={{ marginLeft:40 }}>
                    <MaterialCommunityIcons name="delete" color="red" size={35}/>
                    </TouchableOpacity>


                    </TouchableOpacity>    
                   
                   ))}
    
                </ScrollView>
            )
        }else{
            return <Text style={{ fontSize:18,textAlign:'center',marginTop:90 }}>You Dont Have Notifications</Text>
        }

            }else{
            return <ActivityIndicator size="large" color='black' style={{alignSelf: 'center',marginTop:50}}/>
                 
            }
        
        }else{
            return <NetworkError get_all_my_ads={this.fix_network_error}/>
    
        }
    
        }
    
}

export default Notifications