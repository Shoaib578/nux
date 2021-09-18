import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,FlatList,Image} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'
import Like from './Like'

import Heart from './heart'
class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_id:''
    }

    this.get_user_id()
  }
 

 get_user_id = async()=>{
   const user = await AsyncStorage.getItem('user')
   const parse = JSON.parse(user)
   this.setState({user_id:parse.user_id})
 }
    render(){
        return(
          <View>
            {this.props.data.is_expired==0?<TouchableOpacity onPress={()=>this.props.navigation.navigate('Product',{product_id:this.props.data.product_id,is_favorite:this.props.data.is_favorite,})} style={{ borderWidth:1,borderColor:'gray',borderRadius:2,width:Dimensions.get('window').width*2/4.8,height:230,marginTop:20 }}>

                <View>
                
              <Image style={{width:'100%',height:120}} source={{uri:base_url+'static/product_images/'+this.props.data.product_image1}}/>

                {this.props.data.status=='pending' || this.props.data.status=='sold'?<TouchableOpacity style={{ backgroundColor:'orange',borderRadius:5,justifyContent: 'center',alignItems:'center',position:'absolute',left:'10%',marginTop:10,padding:3}}>
                <Text color='white' style={{ fontSize:10 }}>{this.props.data.status}</Text>
                </TouchableOpacity>:null}
                
              <Heart get_favorite={this.props.get_favorite} navigation={this.props.navigation} is_favorite={this.props.data.is_favorite} product_id={this.props.data.product_id}/>


              </View>

              <View style={{ padding:7, }}>
                <Text style={{ color:'black',fontSize:18 }}>Rs {this.props.data.price}</Text>

                <Text style={{ marginTop:5 }}>{this.props.data.product_title}</Text>
              </View>

            <View style={{ flexDirection:'row',padding:5,marginTop:10,justifyContent:'space-between' }}>
            <Text style={{ color:'gray',fontSize:13 }}>{this.props.data.product_location.substring(0,5)}{this.props.data.product_location.length>6?'..':''}</Text>
            <Text style={{ color:'gray',fontSize:13,left:'100%' }}>{this.props.data.posted_date.substring(0,7)}</Text>
            <Text> </Text>
            <Text> </Text>
            
            <Like likes_count={this.props.data.likes_count} navigation={this.props.navigation} product_id={this.props.data.product_id} is_liked={this.props.data.is_liked}/>

            </View>

            </TouchableOpacity>:

            <View>



            {this.props.data.posted_by != this.state.user_id?<View onPress={()=>this.props.navigation.navigate('Product',{product_id:this.props.data.product_id,is_favorite:this.props.data.is_favorite,})} style={{ borderWidth:1,borderColor:'gray',borderRadius:2,width:Dimensions.get('window').width*2/4.8,height:230,marginTop:20 }}>

            <View>
            
            <View >
              <Text style={{color:'red',textAlign:'center',top:30,position:'relative'}}>Expired</Text>
          <Image style={{width:'100%',height:120, opacity: 0.8,}} source={{uri:base_url+'static/product_images/'+this.props.data.product_image1}}/>
          </View>


            {this.props.data.status=='pending' || this.props.data.status=='sold'?<View style={{ backgroundColor:'orange',borderRadius:5,justifyContent: 'center',alignItems:'center',position:'absolute',left:'10%',marginTop:10,padding:3}}>
            <Text color='white' style={{ fontSize:10 }}>{this.props.data.status}</Text>
            </View>:null}
            
          <Heart get_favorite={this.props.get_favorite} navigation={this.props.navigation} is_favorite={this.props.data.is_favorite} product_id={this.props.data.product_id}/>


          </View>

          <View style={{ padding:7, }}>
            <Text style={{ color:'black',fontSize:18 }}>Rs {this.props.data.price}</Text>

            <Text style={{ marginTop:5 }}>{this.props.data.product_title}</Text>
          </View>

        <View style={{ flexDirection:'row',padding:5,marginTop:10,justifyContent:'space-between' }}>
        <Text style={{ color:'gray',fontSize:13 }}>{this.props.data.product_location.substring(0,5)}{this.props.data.product_location.length>6?'..':''}</Text>
        <Text style={{ color:'gray',fontSize:13,left:'100%' }}>{this.props.data.posted_date.substring(0,7)}</Text>
        <Text> </Text>
        <Text> </Text>
        
        <Like likes_count={this.props.data.likes_count} navigation={this.props.navigation} product_id={this.props.data.product_id} is_liked={this.props.data.is_liked}/>

        </View>

        </View>:
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Product',{product_id:this.props.data.product_id,is_favorite:this.props.data.is_favorite,})} style={{ borderWidth:1,borderColor:'gray',borderRadius:2,width:Dimensions.get('window').width*2/4.8,height:230,marginTop:20 }}>

        <View>
        
      <Image style={{width:'100%',height:120}} source={{uri:base_url+'static/product_images/'+this.props.data.product_image1}}/>

        {this.props.data.status=='pending' || this.props.data.status=='sold'?<TouchableOpacity style={{ backgroundColor:'orange',borderRadius:5,justifyContent: 'center',alignItems:'center',position:'absolute',left:'10%',marginTop:10,padding:3}}>
        <Text color='white' style={{ fontSize:10 }}>{this.props.data.status}</Text>
        </TouchableOpacity>:null}
        
      <Heart get_favorite={this.props.get_favorite} navigation={this.props.navigation} is_favorite={this.props.data.is_favorite} product_id={this.props.data.product_id}/>


      </View>

      <View style={{ padding:7, }}>
        <Text style={{ color:'black',fontSize:18 }}>Rs {this.props.data.price}</Text>

        <Text style={{ marginTop:5 }}>{this.props.data.product_title}</Text>
      </View>

    <View style={{ flexDirection:'row',padding:5,marginTop:10,justifyContent:'space-between' }}>
    <Text style={{ color:'gray',fontSize:13 }}>{this.props.data.product_location.substring(0,5)}{this.props.data.product_location.length>6?'..':''}</Text>
    <Text style={{ color:'gray',fontSize:13,left:'100%' }}>{this.props.data.posted_date.substring(0,7)}</Text>
    <Text> </Text>
    <Text> </Text>
    
    <Like likes_count={this.props.data.likes_count} navigation={this.props.navigation} product_id={this.props.data.product_id} is_liked={this.props.data.is_liked}/>

    </View>

    </TouchableOpacity>
        
        
        }
         </View>   
            
            }
            </View>
        )
    }
}

export default Product