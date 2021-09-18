import React from 'react'

import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SearchBikesCategories extends React.Component{
    render(){
        return(

            <View>
            <ScrollView >

             
            
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Bikes and MotorCycles')
                this.props.navigation.navigate('QuickSearch')
            }}
             
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Bikes and MotorCycles</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Spare Parts')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Spare Parts</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Bicycles')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Bicycles</Text>
             </TouchableOpacity>




             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','ATV and Quads')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>ATV and Quads</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Scooty and Scooters')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Scooty and Scooters</Text>
             </TouchableOpacity>

            



             </ScrollView>
         </View>
        )
    }
}

export default SearchBikesCategories