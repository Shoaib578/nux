import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class NewsandCommunication extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
            <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,}}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>News and Communication

</Text>
            <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>
            <ScrollView>
                <Text style={{color:'white',marginTop:10,fontSize:16}}>NUX will periodically communicate with you through the application notification service, email, and/or SMS regarding our Services/Platform. To confirm your Signup, your ads’ live coming or expiry, and for other essential messages. Since, notification is vital for us, you may not have an option to opt-out of these messages.
Once you actively start using our Services/Platform, you may start receiving messages, news, and notifications from us.
You may receive marketing communications from us if you:


</Text>

                </ScrollView>
                </View>



                
              
            </View>
        )
    }
}

export default NewsandCommunication