import React from 'react'
import {View,Text,TouchableOpacity,ScrollView,Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


class SearchCarSparePartsCategories extends React.Component{
    render(){
        return(
            <View>
                 <ScrollView >

                 <TouchableOpacity
                 
                 
                 onPress={async()=>{
                    await AsyncStorage.setItem('category','CARS-SPARE-PARTS')
                    this.props.navigation.navigate('QuickSearch')
                }} style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


                    <Text style={{ marginLeft:10 }}>CARS-SPARE-PARTS</Text>
                    </TouchableOpacity>
            
                <TouchableOpacity  onPress={async()=>{
                    await AsyncStorage.setItem('category','OTHER-SPARE-PARTS')
                    this.props.navigation.navigate('QuickSearch')
                }}  style={{ width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',flexDirection:'row',padding:10,marginTop:10 }}>


                <Text style={{ marginLeft:10 }}>OTHER-SPARE-PARTS</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default SearchCarSparePartsCategories