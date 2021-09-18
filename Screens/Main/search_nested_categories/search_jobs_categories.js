import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'

class SearchJobsCategories extends React.Component{
    render(){
        return(
            <View>
            <ScrollView >

             
            
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Online Jobs')
                this.props.navigation.navigate('QuickSearch')
            }}
              style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Online Jobs</Text>
             </TouchableOpacity>



             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Marketing Job')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Marketing Job</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Advertising and PR Jobs')
                this.props.navigation.navigate('QuickSearch')
            }}
             
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Advertising and PR Jobs</Text>
             </TouchableOpacity>




             <TouchableOpacity 
                  onPress={async()=>{
                    await AsyncStorage.setItem('category','Educational Jobs')
                    this.props.navigation.navigate('QuickSearch')
                }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Educational Jobs</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Custome Service Jobs')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Custome Service Jobs</Text>
             </TouchableOpacity>

            
             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Sales Jobs')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Sales Jobs</Text>
             </TouchableOpacity>




             <TouchableOpacity
             onPress={async()=>{
                await AsyncStorage.setItem('category','IT and Networking Jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>IT and Networking Jobs</Text>
             </TouchableOpacity>




             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Hotel and Tourism Jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Hotel and Tourism Jobs</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Clerical and Administration Jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Clerical and Administration Jobs</Text>
             </TouchableOpacity>




             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Human Recources Jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Human Recources Jobs</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Accounting and Finance Jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Accounting and Finance Jobs</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Manufacturing Job')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Manufacturing Jobs</Text>
             </TouchableOpacity>

             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Medical Jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Medical Jobs</Text>
             </TouchableOpacity>

             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Domestic Staff Jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Domestic Staff Jobs</Text>
             </TouchableOpacity>

             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Part time jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Part time jobs</Text>
             </TouchableOpacity>

             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Other Jobs')
                this.props.navigation.navigate('QuickSearch')
            }} 
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Jobs</Text>
             </TouchableOpacity>



             </ScrollView>
         </View>
        )
    }
}

export default SearchJobsCategories