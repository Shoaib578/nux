
import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
class SellCameraAccessoriesCategories extends React.Component {
    render() {
        return (
            <View>
            <ScrollView >

            <TouchableOpacity   onPress={()=>this.props.navigation.navigate('Sell',{category:'CAMERAS',all_over_category:'product'})}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


               <Text style={{ marginLeft:10 }}>CAMERAS</Text>
               </TouchableOpacity>
       
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'LENSES',all_over_category:'product'})} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


           <Text style={{ marginLeft:10 }}>LENSES</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sell',{category:'CAMERA-OTHER-ACCESSORIES',all_over_category:'product'})} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


           <Text style={{ marginLeft:10 }}>OTHER-ACCESSORIES</Text>
           </TouchableOpacity>


           </ScrollView>
       </View>
        )
    }
}

export default SellCameraAccessoriesCategories