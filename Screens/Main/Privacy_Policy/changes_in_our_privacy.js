import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class ChangesInOurPrivacy extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
            <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,}}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>How will the changes in our privacy statement communicated over to you?
</Text>
            <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>
            <ScrollView>
                <Text style={{color:'white',marginTop:10,fontSize:16}}>This privacy statement is prone to change time to time. If you have your official email registered with us and you have subscribed for our newsletters, you will automatically receive our updates. If you do not agree with the changes, you may delete your account through your account setting by pressing delete account. 
REMEMBER: ONCE DELETED, YOUR ACCOUNT WILL BE IRRECOVERABLE. THINK TWICE BEFORE DELETING YOUR ACCOUNT.
</Text>

                </ScrollView>
                </View>



                
              
            </View>
        )
    }
}

export default ChangesInOurPrivacy