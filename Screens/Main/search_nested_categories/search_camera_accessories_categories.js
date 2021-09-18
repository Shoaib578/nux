
import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
class SearchCameraAccessoriesCategories extends React.Component {
    render() {
        return (
            <View>
            <ScrollView >

            <TouchableOpacity  onPress={async()=>{
                    await AsyncStorage.setItem('category','CAMERAS')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


               <Text style={{ marginLeft:10 }}>CAMERAS</Text>
               </TouchableOpacity>
       
           <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','LENSES')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


           <Text style={{ marginLeft:10 }}>LENSES</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','CAMERA-OTHER-ACCESSORIES')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


           <Text style={{ marginLeft:10 }}>OTHER-ACCESSORIES</Text>
           </TouchableOpacity>


           </ScrollView>
       </View>
        )
    }
}

export default SearchCameraAccessoriesCategories