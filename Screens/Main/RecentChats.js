import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator, ScrollView,Alert} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'
import NetworkError from './NetworkError'

class RecentChats extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            recent_chats:[],
            is_loading:true,
            network_error:false,
        }

        this.isLoggedIn()
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


    get_recent_chats = async()=> {
    const user = await AsyncStorage.getItem('user')
    const parse = JSON.parse(user)
    Axios.get(base_url+'get_recent_chats?my_id='+parse.user_id)
    .then(res=>{
        console.log(res.data.recent_chats)
       this.setState({recent_chats:res.data.recent_chats,is_loading:false})
    })
    .catch(err=>this.setState({network_error:true}))
    }

    fix_network_error = ()=>{
        this.setState({is_loading:true})
        this.get_recent_chats()
    }

  async  componentDidMount() {
    await    this.get_recent_chats()

        this.props.navigation.addListener('focus',async()=>{
          await  this.setState({is_loading:true})
           await this.get_recent_chats()
        })

    }

    render(){
        if(!this.state.network_error){
        if(!this.state.is_loading){
        if(this.state.recent_chats.length>0){

        return(
            <ScrollView >
               {this.state.recent_chats.map(data=>(
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chats',{product_owner_id:data.user_id})} style={{ width:Dimensions.get('window').width,padding:15,flexDirection:'row',backgroundColor:'#E4E4E4',marginTop:20}} key={data.recent_id}>
             {data.profile_pic?
             <Image source={{uri:base_url+'static/profile_pics/'+data.profile_pic}} style={{width:75,height:75,borderRadius:100}}/>
             
            :
            <MaterialCommunityIcons name='account-circle' size={60}/>
            
            }

                <Text style={{ color:'black',fontSize:18,top:20,left:5 }}>{data.user_name}</Text>
                </TouchableOpacity>    
               
               ))}

            </ScrollView>
        )
    }else{
        return <Text style={{ fontSize:20,textAlign:'center',marginTop:90 }}>Dont Have RecentChats</Text>
    }

        }else{
        return <ActivityIndicator size="large" color='black' style={{alignSelf: 'center',marginTop:50}}/>
             
        }
    
    }else{
        return <NetworkError get_all_my_ads={this.fix_network_error}/>

    }

    }
}

export default RecentChats