import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'

class SearchBusinessCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Business For Sale')
                this.props.navigation.navigate('QuickSearch')
            }} 
              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Business For Sale</Text>
             </TouchableOpacity>



             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Food and Restaurant')
                this.props.navigation.navigate('QuickSearch')
            }} 
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Food and Restaurant</Text>
             </TouchableOpacity>


             
             <TouchableOpacity
              onPress={async()=>{
                await AsyncStorage.setItem('category','Trade and Industrial')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Trade and Industrial</Text>
             </TouchableOpacity>




             <TouchableOpacity 
             
             onPress={async()=>{
                await AsyncStorage.setItem('category','Construction and Heavy Machinery')
                this.props.navigation.navigate('QuickSearch')
            }}
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Construction and Heavy Machinery</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Agriculture')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Agriculture</Text>
             </TouchableOpacity>

            


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Other Business and Industry')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Business and Industry</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Medical and Pharma')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Medical and Pharma</Text>
             </TouchableOpacity>





             </ScrollView>
         </View>
        )
    }
}
export default SearchBusinessCategories