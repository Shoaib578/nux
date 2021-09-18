import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SearchPropertyForRent extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

            <TouchableOpacity 
             
             onPress={async()=>{
                await AsyncStorage.setItem('category','Land and Plots for rent')
                this.props.navigation.navigate('QuickSearch')
            }} 

              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Land and Plots</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Houses for rent')
                this.props.navigation.navigate('QuickSearch')
            }} 
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Houses</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Apartments and Flats for rent')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Apartments and Flats</Text>
             </TouchableOpacity>




             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Shop-Offices-Commertial Spaces for rent')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Shop-Offices-Commertial Spaces</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Portion and floors for rent')
                this.props.navigation.navigate('QuickSearch')
            }}
             
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Portion and floors</Text>
             </TouchableOpacity>

             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Roomates and Paying Guests')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Roomates and Paying Guests</Text>
             </TouchableOpacity>

            

             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Rooms')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Rooms</Text>
             </TouchableOpacity>


             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Vocation Rentals-Guest Houses')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Vocation Rentals-Guest Houses</Text>
             </TouchableOpacity>


             </ScrollView>
         </View>
        )
    }
}

export default SearchPropertyForRent