import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import Axios from 'axios' 
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'


class Like extends React.Component {

   

    constructor(props){
        super(props)
        this.state = {
            is_liked:false,
            likes_count:this.props.likes_count
        }


       
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

    componentDidMount() {
        if(this.props.is_liked == 1){
            this.setState({is_liked:true})

        }else{
            this.setState({is_liked:false})
        }

        console.log(this.props)
    }
    like_or_unlike = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)

        if(this.state.is_liked)
        {
        this.setState({is_liked:false,likes_count:this.state.likes_count-1})
        }
        else{
            this.setState({is_liked:true,likes_count:this.state.likes_count+1})

        }

        Axios.get(base_url+'like_or_unlike?user_id='+parse.user_id+'&&product_id='+this.props.product_id)
        .then(res=>{
            console.log(res.data.msg)
        })
        .catch(err=>Alert.alert('Something Went Wrong'))


    }

    render(){
        return(
            <View style={{ flexDirection:'row' }}>
            <TouchableOpacity style={{ flexDirection:'row'}} onPress={async()=>{
               await this.isLoggedIn()
                this.like_or_unlike()
                
                }}>
            {!this.state.is_liked?<AntDesign name='staro' color='orange' size={20}/>:
            <AntDesign name='star' color='orange' size={20}/>
            }
            
            </TouchableOpacity>
           <Text style={{ color:'gray', fontSize:10}}>({this.state.likes_count})</Text>
            </View>
        )
    }
}

export default Like