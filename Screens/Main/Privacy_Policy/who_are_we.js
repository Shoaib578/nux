import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class WhoAreWe extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
                <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,}}>
                <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>Who Are We? </Text>
                <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>
                <ScrollView>
                    <Text style={{color:'white',marginTop:10,fontSize:16}}>NUX Afghanistan, a company established in Afghanistan, is host to your information provided and/or communicated through this Platform</Text>

                    </ScrollView>
                    </View>



                    
                  
                </View>

        )
    }
}

export default WhoAreWe