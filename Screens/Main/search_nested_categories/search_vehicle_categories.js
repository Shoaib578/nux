import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SearchVehicleCategories extends React.Component{
    render(){
        return(
            <View>
               <ScrollView >

                
               
                <TouchableOpacity 
                 onPress={async()=>{
                    await AsyncStorage.setItem('category','Cars')
                    this.props.navigation.navigate('QuickSearch')
                }} 
                  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                

                <Text style={{ marginLeft:10 }}>Cars</Text>
                </TouchableOpacity>



                <TouchableOpacity 
                 onPress={async()=>{
                    await AsyncStorage.setItem('category','Cars on Installements')
                    this.props.navigation.navigate('QuickSearch')
                }} 

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Cars on Installements</Text>
                </TouchableOpacity>


                
                <TouchableOpacity 
                 onPress={()=>{
                    
                    this.props.navigation.navigate('SearchCarSparePartsCategories')
                }} 
                

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10, }}>Spare Parts</Text>
                </TouchableOpacity>




                <TouchableOpacity 
                 onPress={async()=>{
                    await AsyncStorage.setItem('category','Buses,Vans and Trucks')
                    this.props.navigation.navigate('QuickSearch')
                }} 
                

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Buses,Vans and Trucks</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={async()=>{
                    await AsyncStorage.setItem('category','Rickshaw and Chingchi')
                    this.props.navigation.navigate('QuickSearch')
                }} 
              

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Rickshaw and Chingchi</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                  onPress={async()=>{
                    await AsyncStorage.setItem('category','other Vehicles')
                    this.props.navigation.navigate('QuickSearch')
                }} 
             

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>other Vehicles</Text>
                </TouchableOpacity>


                <TouchableOpacity
                 onPress={async()=>{
                    await AsyncStorage.setItem('category','Boats')
                    this.props.navigation.navigate('QuickSearch')
                }} 
                

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Boats</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                 onPress={async()=>{
                    await AsyncStorage.setItem('category','Tractors and Trailers')
                    this.props.navigation.navigate('QuickSearch')
                }}
               

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Tractors and Trailers</Text>
                </TouchableOpacity>


                </ScrollView>
            </View>
        )
    }
}

export  default SearchVehicleCategories