import React from 'react'
import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SellVehicleCategories extends React.Component{
    render(){
        return(
            <View>
               <ScrollView >

                
               
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'cars',all_over_category:'product'})}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                

                <Text style={{ marginLeft:10 }}>Cars</Text>
                </TouchableOpacity>



                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Sell',{category:'Cars on Installements',all_over_category:'product'})}

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Cars on Installements</Text>
                </TouchableOpacity>


                
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Sell',{category:'Car Spare Parts',all_over_category:'product'})}

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10, }}>Spare Parts</Text>
                </TouchableOpacity>




                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Sell',{category:'Buses,Vans and Trucks',all_over_category:'product'})}

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Buses,Vans and Trucks</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Sell',{category:'Rickshaw and Chingchi',all_over_category:'product'})}

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Rickshaw and Chingchi</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Sell',{category:'other Vehicles',all_over_category:'product'})}

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>other Vehicles</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Sell',{category:'Boats',all_over_category:'product'})}

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Boats</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Sell',{category:'Tractors and Trailers',all_over_category:'product'})}

                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

               

                <Text style={{ marginLeft:10 }}>Tractors and Trailers</Text>
                </TouchableOpacity>


                </ScrollView>
            </View>
        )
    }
}

export  default SellVehicleCategories