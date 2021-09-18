import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

class Heart extends React.Component {
    state = {
        favorite:false,
    }
    make_favorite = async (product_id)=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
       

        if(this.props.is_favorite == 1){
            this.setState({favorite:false})
        }else{
            this.setState({favorite:true})

        }

        Axios.get(base_url+'make_favorite?user_id='+parse.user_id+'&&product_id='+product_id)
        .then(res=>{
          console.log(res.data)
        })
        .catch(err=>Alert.alert('Something Went Wrong'))
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
        if(this.props.is_favorite == 1){
            this.setState({favorite:true})
        }else{
            this.setState({favorite:false})

        }
       
    }


    render(){
        return(

        <TouchableOpacity onPress={async()=>{
          await this.isLoggedIn()
            this.make_favorite(this.props.product_id)

            if(this.props.get_favorite){
                this.props.get_favorite()
            }
            
          }
            
            
            
            } style={{ backgroundColor:'black',width:30,height:30,borderRadius:100,justifyContent: 'center',alignItems:'center',position:'absolute',left:'73%',marginTop:10}}>
            {this.state.favorite?
                <AntDesign name='heart' color='white' size={20}/>:

                <AntDesign name='hearto' color='white' size={20}/>}

            </TouchableOpacity>
        )

    }
}

export default Heart