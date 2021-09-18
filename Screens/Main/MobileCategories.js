import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,Image,ScrollView } from 'react-native';
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,FontAwesome,Entypo,MaterialIcons,Foundation} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import base_url from '../../base_url'
import NetworkError  from './NetworkError';


class MobileCategories extends React.Component {
    render(){

        if(this.props.route.params.filters_category == 'true'){

        return (
            <ScrollView >

                
               
            <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','IOS')
                    this.props.navigation.navigate('Filters')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             <View  style={{marginLeft:10, backgroundColor:'#ffcc99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
             <MaterialCommunityIcons name='apple-ios' color='black' size={30}/>

             
             </View>

             <Text style={{ marginLeft:10,top:15 }}>IOS</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Android')
                this.props.navigation.navigate('Filters')
            }}
              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

             <View  style={{ marginLeft:10,backgroundColor:'#99ffcc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
             <FontAwesome name='android' color='black' size={40}/>

             </View>

             <Text style={{ marginLeft:10,top:15 }}>Android</Text>
             </TouchableOpacity>

             </ScrollView>
        )
    }else{
        return (
            <ScrollView >

                
               
            <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','IOS')
                    this.props.navigation.navigate('QuickSearch')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             <View  style={{marginLeft:10, backgroundColor:'#ffcc99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
             <MaterialCommunityIcons name='apple-ios' color='black' size={30}/>

             
             </View>

             <Text style={{ marginLeft:10,top:15 }}>IOS</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Android')
                this.props.navigation.navigate('QuickSearch')
            }}
              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

             <View  style={{ marginLeft:10,backgroundColor:'#99ffcc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
             <FontAwesome name='android' color='black' size={40}/>

             </View>

             <Text style={{ marginLeft:10,top:15 }}>Android</Text>
             </TouchableOpacity>

             </ScrollView>
        )
    }

    }
}

export default MobileCategories