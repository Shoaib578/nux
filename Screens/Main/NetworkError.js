import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


class NetworkError extends React.Component {
    render(){
        return(
            <View style={{ alignItems:'center',justifyContent: 'center',marginTop:60}}>
            <MaterialIcons name='error' color='red' size={100}/>
            <Text style={{ marginTop:20,color:'black',fontSize:15 }}>Network error</Text>

            <TouchableOpacity onPress={()=>this.props.get_all_my_ads()} style={{ marginTop:20 }}>
                <Text syle={{ color:'blue' }}>Try Again</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

export default NetworkError