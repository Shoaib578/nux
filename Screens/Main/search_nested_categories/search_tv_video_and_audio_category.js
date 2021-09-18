import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
class SearchTvVideoAndAudioCategory extends React.Component {
    render() {
        return (
            <View>
            <ScrollView >

            <TouchableOpacity   onPress={async()=>{
                await AsyncStorage.setItem('category','TV')
                this.props.navigation.navigate('QuickSearch')
            }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


               <Text style={{ marginLeft:10 }}>TV</Text>
               </TouchableOpacity>
       
           <TouchableOpacity onPress={async()=>{
                await AsyncStorage.setItem('category','VIDEO-AUDIO')
                this.props.navigation.navigate('QuickSearch')
            }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


           <Text style={{ marginLeft:10 }}>VIDEO-AUDIO</Text>
           </TouchableOpacity>
           </ScrollView>
       </View>
        )
    }
}

export default SearchTvVideoAndAudioCategory