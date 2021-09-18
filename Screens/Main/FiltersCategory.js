import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image} from 'react-native'

import {FontAwesome5,AntDesign,FontAwesome,Entypo,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'

import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'

class FiltersCategory extends React.Component {

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
               onPress={async()=>{
                await AsyncStorage.setItem('category','Vehicle')
                this.props.navigation.goBack(null)

            }}
                style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View  style={{marginLeft:10, backgroundColor:'#ffcc99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='car' color='black' size={30}/>

                
                </View>

                <Text style={{ marginLeft:10,top:15 }}>Vehicle</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mobile Categories',{filters_category:'true'})} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

                <View  style={{ marginLeft:10,backgroundColor:'#99ffcc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='mobile-phone' color='black' size={40}/>

                </View>

                <Text style={{ marginLeft:10,top:15 }}>Mobile</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Tablet')
                    this.props.navigation.goBack(null)

                }}   style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               
               <View style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <AntDesign name='tablet1' color='black' size={30}/>
                </View>

                <Text style={{ marginLeft:10,top:15 }}>Tablet</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','MotorCycle')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View  style={{ marginLeft:10,backgroundColor:'#ff9999',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='motorcycle' color='black' size={30}/>

                </View>

                <Text style={{ marginLeft:10,top:15 }}>motor cycle</Text>

                </TouchableOpacity>
                
                
           


            
               
               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Bicycle')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View  style={{  marginLeft:10,backgroundColor:'#ff9999',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome name='bicycle' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10,top:15 }}>bicycle</Text>

               </TouchableOpacity>

                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Electronics')
                    this.props.navigation.goBack(null)

                }}   style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View style={{ marginLeft:10,backgroundColor:'#9999ff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome name='tv' color='black' size={30}/>

               </View>
                <Text style={{ marginLeft:10,top:15 }}>Electronics</Text>

                </TouchableOpacity>
               

                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Animals')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View  style={{ marginLeft:10,backgroundColor:'#99ccff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialCommunityIcons name='dog' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10 ,top:15}}>Animals</Text>
               
                </TouchableOpacity>
               
                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Cloths')
                    this.props.navigation.goBack(null)

                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}  >
               <View style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome5 name='tshirt' color='black' size={30}/>

               </View>
               <Text style={{ marginLeft:10,top:15 }}>Cloths</Text>

               </TouchableOpacity>
         




          
               
               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Furniture')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialCommunityIcons name='table-furniture' color='black' size={30}/>
               </View>

               <Text style={{ marginLeft:10,top:15 }}>furniture</Text>

               </TouchableOpacity>
               


                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Books')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View   style={{ marginLeft:10,backgroundColor:'#B5B5E4',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='book' color='black' size={30}/>

               </View>
               <Text style={{ marginLeft:10,top:15 }}>Books</Text>

               </TouchableOpacity>


                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Kids')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
                <View  style={{ marginLeft:10,backgroundColor:'#9999cc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='pencil' color='black' size={30}/>

               </View>

               <Text style={{ marginLeft:10,top:15 }}>kids</Text>

                </TouchableOpacity>
               

                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Laptop')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='laptop' color='black' size={30}/>


               </View>

               <Text style={{ marginLeft:10,top:15 }}>laptop</Text>
                
               </TouchableOpacity>
               
          


           
               
               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Sports')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View   style={{marginLeft:10, backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialIcons name='sports-cricket' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10,top:15 }}>sports</Text>
               </TouchableOpacity>


                <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Computer')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <View  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='classic-computer' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10,top:15 }}>computer</Text>

               </TouchableOpacity>


               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Property for Sale')
                    this.props.navigation.goBack(null)
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }} onPress={()=>this.props.navigation.navigate('Sell',{category:'Property for Sale'})}>
               <View  style={{ marginLeft:10,backgroundColor:'#99ff99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Foundation name='burst-sale' color='black' size={50}/>
               </View>
               <Text style={{ marginLeft:10,fontSize:15 }}>Property for Sale</Text>

               </TouchableOpacity>

               <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Property for Rent')
                    this.props.navigation.goBack(null)

                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
               <TouchableOpacity  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Image source={require('../../Components/images/rent.png')} style={{width:50,height:50,borderRadius:100}}/>
               </TouchableOpacity>
               <Text style={{ marginLeft:10 ,top:15}}>Property for Rent</Text>

               </TouchableOpacity>
               
          
            <Text> </Text>

            </ScrollView>
        )
    }
}

export default FiltersCategory
