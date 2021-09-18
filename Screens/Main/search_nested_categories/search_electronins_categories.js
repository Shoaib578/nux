import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SearchElectronicsCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity 
              onPress={()=>{
               
                this.props.navigation.navigate('SearchComputerAndAccessories')
            }}
             
              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Computer and Accessories</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={()=>{
                this.props.navigation.navigate('SearchTvVideoAndAudioCategory')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>TV-Video-Audio</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
              onPress={()=>{
               
                this.props.navigation.navigate('SearchCameraAccessoriesCategories')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Camera and Accessories</Text>
             </TouchableOpacity>




             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Games and Entertainment')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Games and Entertainment</Text>
             </TouchableOpacity>


             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Other Home Appliances')
                this.props.navigation.navigate('QuickSearch')
            }}
             onPress={()=>this.props.navigation.navigate('Sell',{category:'Other Home Appliances',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Home Appliances</Text>
             </TouchableOpacity>

             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Generators,Ups and Power Solutions')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Generators,Ups and Power Solutions</Text>
             </TouchableOpacity>

            

             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Kitchen Appliances')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Kitchen Appliances</Text>
             </TouchableOpacity>


             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','AC and Cooler')
                this.props.navigation.navigate('QuickSearch')
            }}
           
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>AC and Cooler</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Fridges and Freezers')
                this.props.navigation.navigate('QuickSearch')
            }}
           
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Fridges and Freezers</Text>
             </TouchableOpacity>


             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Washing Machines and Dryers')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Washing Machines and Dryers</Text>
             </TouchableOpacity>


             </ScrollView>
         </View>
        )
    }
}
export default SearchElectronicsCategories