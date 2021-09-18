import React from 'react'

import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class TabletsCategories extends React.Component{
    render(){
        return(

            <View>
            <ScrollView >

             
            
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'TABLET-APPLE',all_over_category:'product'})}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>TABLET-APPLE</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'DANNY-TABS',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>DANNY-TABS</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'QTABS',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>QTABS</Text>
             </TouchableOpacity>




             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'TABLETS-SAMSUNG',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>TABLETS-SAMSUNG</Text>
             </TouchableOpacity>


             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('Sell',{category:'OTHER-TABLETS',all_over_category:'product'})}

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>OTHER-TABLETS</Text>
             </TouchableOpacity>









             </ScrollView>
         </View>
        )
    }
}

export default TabletsCategories