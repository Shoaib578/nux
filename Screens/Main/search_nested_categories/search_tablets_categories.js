import React from 'react'

import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SearchTabletsCategories extends React.Component{
    render(){
        return(

            <View>
            <ScrollView >

             
            
             <TouchableOpacity
              onPress={async()=>{
                await AsyncStorage.setItem('category','TABLET-APPLE')
                this.props.navigation.navigate('QuickSearch')
            }}
             
         style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>TABLET-APPLE</Text>
             </TouchableOpacity>



             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','DANNY-TABS')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>DANNY-TABS</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','QTABS')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>QTABS</Text>
             </TouchableOpacity>




             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','TABLETS-SAMSUNG')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>TABLETS-SAMSUNG</Text>
             </TouchableOpacity>


             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','OTHER-TABLETS')
                this.props.navigation.navigate('QuickSearch')
            }}
            
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>OTHER-TABLETS</Text>
             </TouchableOpacity>









             </ScrollView>
         </View>
        )
    }
}

export default SearchTabletsCategories