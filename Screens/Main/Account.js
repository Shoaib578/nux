import React from 'react'
import Axios from 'axios'
import {View,Text,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import LoggedOutAccountView from './LoggedOutAccountView'
import LoggedInAccountView from './LoggedInAccountView'

class Account extends React.Component{

    constructor(props){
        super(props)
 

        this.state = {
            isLoggedIn: false
        }
        this.isLoggedIn()
    }
 
 
   
     isLoggedIn = async()=>{
         console.log('Checking')
         const user = await AsyncStorage.getItem('user')
         const parse = JSON.parse(user)
       
         if(parse == null){
            this.setState({isLoggedIn:false})
         }else{
             this.setState({isLoggedIn: true})
         }
 
         }


    render(){
        if(this.state.isLoggedIn){

        return <LoggedInAccountView navigation={this.props.navigation} />
            
       
    }else{
        return <LoggedOutAccountView  navigation={this.props.navigation}/>

    }

    }
}

export default Account