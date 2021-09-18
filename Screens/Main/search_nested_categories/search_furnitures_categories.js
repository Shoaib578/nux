import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'

class SearchFurnituresCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity
              onPress={async()=>{
                await AsyncStorage.setItem('category','Sofa and Chairs')
                this.props.navigation.navigate('QuickSearch')
            }}
              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Sofa and Chairs</Text>
             </TouchableOpacity>



             <TouchableOpacity 
            
             onPress={async()=>{
                await AsyncStorage.setItem('category','Beds and Wardrobes')
                this.props.navigation.navigate('QuickSearch')
            }}
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Beds and Wardrobes</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
            
             onPress={async()=>{
                await AsyncStorage.setItem('category','Home and Decoration')
                this.props.navigation.navigate('QuickSearch')
            }}
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Home and Decoration</Text>
             </TouchableOpacity>




             <TouchableOpacity 
            
             onPress={async()=>{
                await AsyncStorage.setItem('category','Tables and Dining')
                this.props.navigation.navigate('QuickSearch')
            }}
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Tables and Dining</Text>
             </TouchableOpacity>


             <TouchableOpacity 
            
             onPress={async()=>{
                await AsyncStorage.setItem('category','Garden and Outdoor')
                this.props.navigation.navigate('QuickSearch')
            }} 
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Garden and Outdoor</Text>
             </TouchableOpacity>

            
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Painting and Mirrors')
                this.props.navigation.navigate('QuickSearch')
            }}  
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Painting and Mirrors</Text>
             </TouchableOpacity>




             <TouchableOpacity
              onPress={async()=>{
                await AsyncStorage.setItem('category','Rugs and Carpets')
                this.props.navigation.navigate('QuickSearch')
            }}  
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Rugs and Carpets</Text>
             </TouchableOpacity>

             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Curtains and Blinds')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Curtains and Blinds</Text>
             </TouchableOpacity>



             <TouchableOpacity
             onPress={async()=>{
                await AsyncStorage.setItem('category','Office Furniture')
                this.props.navigation.navigate('QuickSearch')
            }} 
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Office Furniture</Text>
             </TouchableOpacity>


             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Other Household Items')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Household Items</Text>
             </TouchableOpacity>



             </ScrollView>
         </View>
        )
    }
}

export default SearchFurnituresCategories