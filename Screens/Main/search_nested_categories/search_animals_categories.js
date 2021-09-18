import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'


class SearchAnimalsCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity
               onPress={async()=>{
                await AsyncStorage.setItem('category','Fish and Aquariums')
                this.props.navigation.navigate('QuickSearch')
            }}

               style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Fish and Aquariums</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Birds')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Birds</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Hens and Aseel')
                this.props.navigation.navigate('QuickSearch')
            }}
          

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Hens and Aseel</Text>
             </TouchableOpacity>




             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Cats')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Cats</Text>
             </TouchableOpacity>


             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Dogs')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Dogs</Text>
             </TouchableOpacity>

             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Lives Stock')
                this.props.navigation.navigate('QuickSearch')
            }}
          

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Lives Stock</Text>
             </TouchableOpacity>
            
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Horses')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Horses</Text>
             </TouchableOpacity>

             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Pet Food and Accessories')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Pet Food and Accessorie</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Other Animals')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Animals</Text>
             </TouchableOpacity>


             </ScrollView>
         </View>
        )
    }
}

export default SearchAnimalsCategories