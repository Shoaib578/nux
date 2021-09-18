import React from 'react'

import Axios from 'axios'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert,Image,Linking,Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import base_url from '../../../base_url'
import NetworkError from '../NetworkError'
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons,Entypo,Foundation,MaterialIcons,} from '@expo/vector-icons'


class SearchMobilePhoneCategories extends React.Component{
    render(){
        return(

            <View>
            <ScrollView >

             
            
             <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Acer Mobile')
                    this.props.navigation.navigate('QuickSearch')
                }}   style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>
             

             <Text style={{ marginLeft:10 }}>Acer Mobile</Text>
             </TouchableOpacity>



             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','Apple iPhone')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Apple iPhone</Text>
             </TouchableOpacity>


             
             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Asus Mobile')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10, }}>Asus Mobile</Text>
             </TouchableOpacity>




             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','BlackBerry')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>BlackBerry</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Google')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Google</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Haier')
                this.props.navigation.navigate('QuickSearch')
            }}
           
          
             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Haier</Text>
             </TouchableOpacity>



             <TouchableOpacity 
                onPress={async()=>{
                    await AsyncStorage.setItem('category','HTC')
                    this.props.navigation.navigate('QuickSearch')
                }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>HTC</Text>
             </TouchableOpacity>

             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Honor')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Honor</Text>
             </TouchableOpacity>

            

             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Huawei')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Huawei</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Infinix')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Infinix</Text>
             </TouchableOpacity>



             <TouchableOpacity 
                onPress={async()=>{
                    await AsyncStorage.setItem('category','Lava')
                    this.props.navigation.navigate('QuickSearch')
                }}
               
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Lava</Text>
             </TouchableOpacity>

             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','LG')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>LG</Text>
             </TouchableOpacity>

             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Nokia')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Nokia</Text>
             </TouchableOpacity>

             <TouchableOpacity 
                onPress={async()=>{
                    await AsyncStorage.setItem('category','One Plus')
                    this.props.navigation.navigate('QuickSearch')
                }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>One Plus</Text>
             </TouchableOpacity>


             <TouchableOpacity 
             onPress={async()=>{
                await AsyncStorage.setItem('category','OPPO')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>OPPO</Text>
             </TouchableOpacity>


             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Samsung Mobiles')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Samsung Mobiles</Text>
             </TouchableOpacity>



             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Sony')
                this.props.navigation.navigate('QuickSearch')
            }}
            

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Sony</Text>
             </TouchableOpacity>



             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Tecno')
                this.props.navigation.navigate('QuickSearch')
            }}
         

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Tecno</Text>
             </TouchableOpacity>

             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','Vivo')
                this.props.navigation.navigate('QuickSearch')
            }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Vivo</Text>
             </TouchableOpacity>

             <TouchableOpacity 
               onPress={async()=>{
                await AsyncStorage.setItem('category','VOICE')
                this.props.navigation.navigate('QuickSearch')
            }}
          

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>VOICE</Text>
             </TouchableOpacity>

             <TouchableOpacity 
                onPress={async()=>{
                    await AsyncStorage.setItem('category','Xiaomi')
                    this.props.navigation.navigate('QuickSearch')
                }}
             

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Xiaomi</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Zte')
                this.props.navigation.navigate('QuickSearch')
            }}
         

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Zte</Text>
             </TouchableOpacity>


             <TouchableOpacity 
              onPress={async()=>{
                await AsyncStorage.setItem('category','Other Mobiles')
                this.props.navigation.navigate('QuickSearch')
            }}
           

             style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>

            

             <Text style={{ marginLeft:10 }}>Other Mobiles</Text>
             </TouchableOpacity>






             </ScrollView>
         </View>
        )
    }
}

export default SearchMobilePhoneCategories