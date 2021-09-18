import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,Image,ScrollView } from 'react-native';
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,FontAwesome,Entypo,MaterialIcons,Foundation} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import base_url from '../../../base_url'
import NetworkError  from '../NetworkError';


class MobileCategoriesForSell extends React.Component {
    render(){
        return (
            <ScrollView >

                
               
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'mobile phone',all_over_category:'product'})}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Mobiles Phones</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'tablet',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

             

             <Text style={{ marginLeft:10 }}>Tablets</Text>
             </TouchableOpacity>

             </ScrollView>
        )
    }
}

export default MobileCategoriesForSell