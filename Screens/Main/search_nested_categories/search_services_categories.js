import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SearchServicesCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity
             onPress={async()=>{
                await AsyncStorage.setItem('category','Education and Classes')
                this.props.navigation.navigate('QuickSearch')
            }}
             
               style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Education and Classes</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Travel and Visa')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Travel and Visa</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Cars Rental')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Cars Rental</Text>
             </TouchableOpacity>




             <TouchableOpacity 
            
             onPress={async()=>{
                await AsyncStorage.setItem('category','Drives and Taxi')
                this.props.navigation.navigate('QuickSearch')
            }} 
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Drives and Taxi</Text>
             </TouchableOpacity>


             <TouchableOpacity
              onPress={async()=>{
                await AsyncStorage.setItem('category','Web Development')
                this.props.navigation.navigate('QuickSearch')
            }} 
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Web Development</Text>
             </TouchableOpacity>

            
             <TouchableOpacity
              onPress={async()=>{
                await AsyncStorage.setItem('category','Other Services')
                this.props.navigation.navigate('QuickSearch')
            }}
             
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Services</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Electronics and Computer Repair')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Electronics and Computer Repair</Text>
             </TouchableOpacity>


             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Event Services')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Event Services</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Health and Beauty')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Health and Beauty</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Maids and Domestic Help')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Maids and Domestic Help</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Movers and Packers')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Movers and Packers</Text>
             </TouchableOpacity>


             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Home and office Repair')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Home and office Repair</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Catering and Restaurant')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Catering and Restaurant</Text>
             </TouchableOpacity>


             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Form and Fresh Foods')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Form and Fresh Foods</Text>
             </TouchableOpacity>



             </ScrollView>
         </View>
        )
    }
}
export default SearchServicesCategories