import React from 'react'

import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SellBikesCategories extends React.Component{
    render(){
        return(

            <View>
            <ScrollView >

             
            
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'Bikes and MotorCycles',all_over_category:'product'})}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Bikes and MotorCycles</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'Spare Parts',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Spare Parts</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'Bicycles',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Bicycles</Text>
             </TouchableOpacity>




             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'ATV and Quads',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>ATV and Quads</Text>
             </TouchableOpacity>


             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'Scooty and Scooters',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Scooty and Scooters</Text>
             </TouchableOpacity>

            



             </ScrollView>
         </View>
        )
    }
}

export default SellBikesCategories