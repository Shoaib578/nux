import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class Giveyouright extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
            <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,}}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>NUX gives you right to erase your personal data
</Text>
            <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>
            <ScrollView>
                <Text style={{color:'white',marginTop:10,fontSize:16}}>NUX gives you the right to erase your personal data and history activity. You can easily send an email query with a genuine reason to erase your personal data from our servers. Our technical and legal team will in due course of time process your request.

</Text>

                </ScrollView>
                </View>



                
              
            </View>
        )
    }
}

export default Giveyouright