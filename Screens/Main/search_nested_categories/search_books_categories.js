import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'

class SearchBooksCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Books and Magzines')
                this.props.navigation.navigate('QuickSearch')
            }}
             
              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Books and Magzines</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             
             onPress={async()=>{
                await AsyncStorage.setItem('category','Musical Instruments')
                this.props.navigation.navigate('QuickSearch')
            }}
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Musical Instruments</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
            
             onPress={async()=>{
                await AsyncStorage.setItem('category','Sports Equipment')
                this.props.navigation.navigate('QuickSearch')
            }}
             
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Sports Equipment</Text>
             </TouchableOpacity>




             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Gym and Fitness')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Gym and Fitness</Text>
             </TouchableOpacity>


             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Other Hobbies')
                this.props.navigation.navigate('QuickSearch')
            }} 
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Hobbies</Text>
             </TouchableOpacity>

            


            




             </ScrollView>
         </View>
        )
    }
}
export default SearchBooksCategories