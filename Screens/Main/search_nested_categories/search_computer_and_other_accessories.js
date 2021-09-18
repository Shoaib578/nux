import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

class SearchComputerAndAccessories extends React.Component {
    render(){
        return (
            <View>
            <ScrollView >

            <TouchableOpacity   onPress={async()=>{
                    await AsyncStorage.setItem('category','Computers')
                    this.props.navigation.navigate('QuickSearch')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


               <Text style={{ marginLeft:10 }}>Computers</Text>
               </TouchableOpacity>
       
           <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Hard Disk')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


           <Text style={{ marginLeft:10 }}>Hard Disk</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Internet')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


           <Text style={{ marginLeft:10 }}>Internet</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Monitors')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


        <Text style={{ marginLeft:10 }}>Monitors</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Printers')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


        <Text style={{ marginLeft:10 }}>Printers</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={async()=>{
                    await AsyncStorage.setItem('category','Other Computer Accessories')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


        <Text style={{ marginLeft:10 }}>Other Accessories</Text>
        </TouchableOpacity>

           </ScrollView>
       </View>
        )
    }
}

export default  SearchComputerAndAccessories