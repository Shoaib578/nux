import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image} from 'react-native'

import {FontAwesome5,AntDesign,FontAwesome,Entypo,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'

import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'

class QuickSearchCategories extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            location:''

        }
        this.get_loctation()

    }


    get_loctation = async()=>{
        let location = await AsyncStorage.getItem('location')
        console.log(location)
        this.setState({location:location})
    }

    componentDidMount() {
        this.get_loctation()
        this.props.navigation.addListener('focus',()=>{
            this.get_loctation()
        })
    }


    render(){
        return (
            <ScrollView>

              
               
<TouchableOpacity
              onPress={()=>this.props.navigation.navigate('VehicleCategoriesForSearch')}
                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View  style={{marginLeft:10, backgroundColor:'#ffcc99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='car' color='black' size={30}/>

                
                </View>

                <Text style={{ marginLeft:10,top:15 }}>Vehicle</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mobile Categories For Search')} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

                <View  style={{ marginLeft:10,backgroundColor:'#99ffcc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='mobile-phone' color='black' size={40}/>

                </View>

                <Text style={{ marginLeft:10,top:15 }}>Mobile</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBikesCategories')} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View  style={{ marginLeft:10,backgroundColor:'#ff9999',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='motorcycle' color='black' size={30}/>

                </View>

                <Text style={{ marginLeft:10,top:15 }}>Bikes</Text>

                </TouchableOpacity>
                
                
           
                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Services')
                    this.props.navigation.navigate('QuickSearch')
                }}   style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View style={{ marginLeft:10,backgroundColor:'#9999ff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <MaterialIcons name='cleaning-services' color='black' size={30}/>

               </View>
                <Text style={{ marginLeft:10,top:15 }}>Services</Text>

                </TouchableOpacity>

            
               
               

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchElectronicsCategories')}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View style={{ marginLeft:10,backgroundColor:'#9999ff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome name='tv' color='black' size={30}/>

               </View>
                <Text style={{ marginLeft:10,top:15 }}>Electronics and Home Appliances</Text>

                </TouchableOpacity>
               

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchAnimalsCategories')}   style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View  style={{ marginLeft:10,backgroundColor:'#99ccff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialCommunityIcons name='dog' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10 ,top:15}}>Animals</Text>
               
                </TouchableOpacity>
               
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchFashionAndBeautyCategories')} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}  >
               <View style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome5 name='tshirt' color='black' size={30}/>

               </View>
               <Text style={{ marginLeft:10,top:15 }}>Fashion</Text>

               </TouchableOpacity>
         




          
               
               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Furniture')
                    this.props.navigation.navigate('QuickSearch')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialCommunityIcons name='table-furniture' color='black' size={30}/>
               </View>

               <Text style={{ marginLeft:10,top:15 }}>furniture</Text>

               </TouchableOpacity>
               


                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Books')
                    this.props.navigation.navigate('QuickSearch')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View   style={{ marginLeft:10,backgroundColor:'#B5B5E4',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='book' color='black' size={30}/>

               </View>
               <Text style={{ marginLeft:10,top:15 }}>Books,Sports and Hobbies</Text>

               </TouchableOpacity>


                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Pencil')
                    this.props.navigation.navigate('QuickSearch')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View  style={{ marginLeft:10,backgroundColor:'#9999cc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='pencil' color='black' size={30}/>

               </View>

               <Text style={{ marginLeft:10,top:15 }}>kids</Text>

                </TouchableOpacity>
               

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchLaptopCategories')}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='laptop' color='black' size={30}/>


               </View>

               <Text style={{ marginLeft:10,top:15 }}>Laptop</Text>
                
               </TouchableOpacity>
               
          


           
               
               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Business')
                    this.props.navigation.navigate('QuickSearch')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View   style={{marginLeft:10, backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Ionicons name='stats-chart-sharp' color='black' size={30}/>

               </View>
               <Text style={{ marginLeft:10,top:15 }}>Business</Text>
               </TouchableOpacity>


               


               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Property for Sale')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }} onPress={()=>this.props.navigation.navigate('Sell',{category:'Property for Sale'})}>
               <View  style={{ marginLeft:10,backgroundColor:'#99ff99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Foundation name='burst-sale' color='black' size={50}/>
               </View>
               <Text style={{ marginLeft:10,fontSize:15 }}>Property for Sale</Text>

               </TouchableOpacity>

               <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchPropertyForRent')} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <TouchableOpacity  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Image source={require('../../Components/images/rent.png')} style={{width:50,height:50,borderRadius:100}}/>
               </TouchableOpacity>
               <Text style={{ marginLeft:10 ,top:15}}>Property for Rent</Text>

               </TouchableOpacity>
               
          
               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Jobs')
                    this.props.navigation.navigate('QuickSearch')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <TouchableOpacity  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Foundation name='shopping-bag' color='black' size={30}/>
               </TouchableOpacity>
               <Text style={{ marginLeft:10 ,top:15}}>Jobs</Text>

               </TouchableOpacity>

            </ScrollView>
        )
    }
}

export default QuickSearchCategories
