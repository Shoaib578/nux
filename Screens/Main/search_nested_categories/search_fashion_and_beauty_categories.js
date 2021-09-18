import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'

class SearchFashionAndBeautyCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity 
             
             onPress={async()=>{
                await AsyncStorage.setItem('category','Accessories')
                this.props.navigation.navigate('QuickSearch')
            }}

              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Accessories</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Clothes')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Clothes</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','FootWear')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>FootWear</Text>
             </TouchableOpacity>




             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Jewellery')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Jewellery</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Make Up')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Make Up</Text>
             </TouchableOpacity>

            
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Skin and Hair')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Skin and Hair</Text>
             </TouchableOpacity>




             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Watches')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Watches</Text>
             </TouchableOpacity>




             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Wedding')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Wedding</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Lawn and Pret')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Lawn and Pret</Text>
             </TouchableOpacity>




             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Wedding')
                this.props.navigation.navigate('QuickSearch')
            }}
         

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Couture</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Other Fashion')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Fashion</Text>
             </TouchableOpacity>



             </ScrollView>
         </View>
        )
    }
}

export default SearchFashionAndBeautyCategories