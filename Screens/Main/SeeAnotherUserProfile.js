import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import NetworkError from './NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo} from '@expo/vector-icons'
import Heart from './heart'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LogBox } from 'react-native';

import Product from './Product'


class SeeAnotherUserProfile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            user_info:[],
            is_loading:true,
            network_error:false,
            all_my_ads:[],
        }

        this.getUserInfo()
        
    }

    get_all_my_ads = async()=> {
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        
        if(parse == null){
            Axios.get(base_url+'another_user_ads?is_loggedin=false&&product_owner_id='+this.props.route.params.user_id)
            .then(res=>{
                console.log(res.data.products)
                this.setState({all_my_ads:res.data.products})
                
            })
        }else{
            try{
                Axios.get(base_url+'another_user_ads?is_loggedin=true&&my_id='+parse.user_id+'&&product_owner_id='+this.props.route.params.user_id)
                .then(res=>{
                    console.log(res.data.products)
                    this.setState({all_my_ads:res.data.products})
                    
                })
            }catch(err){
                console.log(err)
            }
           
        }
        
        
        }


    getUserInfo = ()=>{
        
        Axios.get(base_url+'get_user_info?user_id='+this.props.route.params.user_id)
        .then(res=>{
          
         this.setState({user_info:res.data.user, is_loading:false,})
        this.get_all_my_ads()

        })
        .catch(err=>this.setState({network_error:true}))
       }

       fix_network_error = ()=>{
        this.setState({is_loading:true,network_error:false})
        this.getUserInfo() 
     }


     componentDidMount() {
         this.props.navigation.addListener('focus',()=>{
             this.setState({is_loading:true})
             this.getUserInfo()
         })
     }
       
    render(){
        if(!this.state.network_error){
         if(!this.state.is_loading){
        return(
            <View>
             <View style={{ flexDirection:'row',padding:20 }}>
             {this.state.user_info.profile_pic ?
             
             <Image source={{uri:base_url+'static/profile_pics/'+this.state.user_info.profile_pic}} style={{width:75,height:75,borderRadius:100}}/>
           
             :
             
             <MaterialCommunityIcons name='account-circle' size={90}/>
             
             }

             <View style={{ marginTop:10,marginLeft:10 }}>
             <Text style={{ color:'black',fontSize:20,fontWeight:'bold',marginTop:10 }}>{this.state.user_info.user_name}</Text>
             <Text style={{ color:'gray',fontSize:17,marginTop:7 }}>Member Since {this.state.user_info.member_since}</Text>

             </View>
            

            </View>


            <Text style={{height:0,width:Dimensions.get('window').width,borderColor:'gray',borderWidth:.5,marginTop:5,}}> </Text>

            <Text style={{ fontSize:18,fontWeight:'bold',marginLeft:20,marginTop:20 }}>Published Ads</Text>

            
            <ScrollView >
                <View style={{flex:1, flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',padding:30}}>
            {this.state.all_my_ads.map(data=>(
                <View>
               

                <Product data={data} key={data.product_id} navigation={this.props.navigation} />

                
                   
                </View>
                 

            ))}
            </View>

            <Text style={{ marginBottom:150 }}> </Text>    

            </ScrollView>
           


           

            </View>
        )

         }else{
             return <ActivityIndicator size="large" color='black' style={{ marginTop:50 }} />
         }
        
        }else{
            return <NetworkError get_all_my_ads={this.fix_network_error}/>
        }
    }
}

export default SeeAnotherUserProfile