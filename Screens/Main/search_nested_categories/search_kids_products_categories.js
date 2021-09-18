import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'

class SearchKidsProductsCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity
              onPress={async()=>{
                await AsyncStorage.setItem('category','Kids Furniture')
                this.props.navigation.navigate('QuickSearch')
            }}
              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Kids Furniture</Text>
             </TouchableOpacity>



             <TouchableOpacity 
            
             onPress={async()=>{
                await AsyncStorage.setItem('category','Toys')
                this.props.navigation.navigate('QuickSearch')
            }}
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Toys</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
            
             onPress={async()=>{
                await AsyncStorage.setItem('category','Prams and Walkers')
                this.props.navigation.navigate('QuickSearch')
            }}
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Prams and Walkers</Text>
             </TouchableOpacity>




             <TouchableOpacity 
           
             onPress={async()=>{
                await AsyncStorage.setItem('category','Swing and Slides')
                this.props.navigation.navigate('QuickSearch')
            }}
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Swing and Slides</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Kids Bikes')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Kids Bikes</Text>
             </TouchableOpacity>

            


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Kids Accessories')
                this.props.navigation.navigate('QuickSearch')
            }}
             
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Kids Accessories</Text>
             </TouchableOpacity>

            




             </ScrollView>
         </View>
        )
    }
}
export default SearchKidsProductsCategories