import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,Image, ScrollView } from 'react-native';
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,FontAwesome,Entypo,MaterialIcons,Foundation} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import base_url from '../../base_url'
import NetworkError  from './NetworkError';

class Whatareyouoffering extends React.Component {

    constructor(props) {
        super(props)
        this.isLoggedIn()
    }

    isLoggedIn = async()=>{
        console.log('Checking')
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
      
        if(parse == null){

            
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'auth', screen: 'GetStart' }]
            });
        }

        }



    render() {
        return(
            <View style={styles.container}>

                <ScrollView>
               
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('VehicleCategoriesForSell')} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
                <View  style={{marginLeft:10, backgroundColor:'#ffcc99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='car' color='black' size={30}/>

                
                </View>

                <Text style={{ marginLeft:10,marginTop:20 }}>Vehicle</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mobile Categories For Sell')}  style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>

                <View style={{ marginLeft:10,backgroundColor:'#99ffcc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='mobile-phone' color='black' size={40}/>

                </View>

                <Text style={{ marginLeft:10,marginTop:20 }}>Mobile</Text>
                </TouchableOpacity>





           

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SellBikesCategories')}  style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
                <View style={{ marginLeft:10,backgroundColor:'#ff9999',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
                <FontAwesome name='motorcycle' color='black' size={30}/>

                </View>

                <Text style={{ marginLeft:10,marginTop:20 }}>Bikes</Text>

                </TouchableOpacity>
                
                
            


            
               
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'service',all_over_category:'services'})} style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
               <View  style={{ marginLeft:10,backgroundColor:'#ff9999',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialIcons name='cleaning-services' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10,marginTop:20 }}>Services</Text>

               </TouchableOpacity>

                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('SellElectronicsCategories')} style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
                <View  style={{ marginLeft:10,backgroundColor:'#9999ff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome name='tv' color='black' size={30}/>

               </View>
                <Text style={{ marginLeft:10,marginTop:20 }}>Electronics and Home Appliances</Text>

                </TouchableOpacity>
               

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'animals',all_over_category:'animals'})} style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
                <View  style={{ marginLeft:10,backgroundColor:'#99ccff',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialCommunityIcons name='dog' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10,marginTop:20 }}>Animals</Text>
               
                </TouchableOpacity>
               
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Sell',{category:'fashion',all_over_category:'product'})}  style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
               <View style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <FontAwesome5 name='tshirt' color='black' size={30}/>

               </View>
               <Text style={{ marginLeft:10,marginTop:20 }}>Fashion</Text>

               </TouchableOpacity>
          




         
               
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'furniture',all_over_category:'product'})} style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
               <View  style={{marginLeft:10, backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <MaterialCommunityIcons name='table-furniture' color='black' size={30}/>
               </View>

               <Text style={{ marginLeft:10,marginTop:20 }}>furniture</Text>

               </TouchableOpacity>
               


                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'books_sports_and_hobbies',all_over_category:'product'})} style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
               <View   style={{ marginLeft:10,backgroundColor:'#B5B5E4',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='book' color='black' size={30}/>

               </View>
               <Text style={{ marginLeft:10,marginTop:20 }}>Books,Sports and Hobbies</Text>

               </TouchableOpacity>


                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'kids_products',all_over_category:'product'})} style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
                <View  style={{ marginLeft:10,backgroundColor:'#9999cc',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='pencil' color='black' size={30}/>

               </View>

               <Text style={{ marginLeft:10,marginTop:20 }}>kids</Text>

                </TouchableOpacity>
               

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'laptop',all_over_category:'product'})} style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}>
               <View  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Entypo name='laptop' color='black' size={30}/>


               </View>

               <Text style={{ marginLeft:10,marginTop:20 }}>Laptops</Text>
                
               </TouchableOpacity>
               
          


          
           

                <TouchableOpacity style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}} onPress={()=>this.props.navigation.navigate('Sell',{category:'business',all_over_category:'Business'})}>
               <View  style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Ionicons name='stats-chart-sharp' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10,marginTop:20 }}>Business</Text>

               </TouchableOpacity>


               <TouchableOpacity style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}} onPress={()=>this.props.navigation.navigate('Sell',{category:'property_for_sell',all_over_category:'property'})}>
               <View  style={{ marginLeft:10,backgroundColor:'#99ff99',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Foundation name='burst-sale' color='black' size={50}/>
               </View>
               <Text style={{ marginLeft:10,marginTop:20 }}>Property for Sale</Text>

               </TouchableOpacity>

               <TouchableOpacity style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}  onPress={()=>this.props.navigation.navigate('Sell',{category:'property_for_rent',all_over_category:'property'})}>
               <View style={{ marginLeft:10,backgroundColor:'skyblue',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Image source={require('../../Components/images/rent.png')} style={{width:50,height:50,borderRadius:100}}/>
               </View>
               <Text style={{ marginLeft:10 ,marginTop:20,fontSize:12}}>Property for Rent</Text>

               </TouchableOpacity>



               <TouchableOpacity style={{marginTop:5, width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,}}  onPress={()=>this.props.navigation.navigate('Sell',{category:'job',all_over_category:'jobs'})}>
               <View style={{ marginLeft:10,backgroundColor:'#bbbaf5',borderRadius:100,width:50,height:50,alignItems: 'center',justifyContent: 'center'}}>
               <Foundation name='shopping-bag' color='black' size={30}/>
               </View>
               <Text style={{ marginLeft:10 ,marginTop:20,fontSize:12}}>Jobs</Text>

               </TouchableOpacity>



               
               </ScrollView>
           </View>


          
        )
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex:1,
    }
    })
export default Whatareyouoffering