import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class LinkToThirdParty extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
            <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,}}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>Links to third-party websites


</Text>
            <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>
            <ScrollView>
                <Text style={{color:'white',marginTop:10,fontSize:16}}>Our Platform may contain links to third party websites or apps. If you click on one of these links, please note that each one will have its own privacy policy. We do not control these websites/apps and are not responsible for those policies. When you leave our Platform, we encourage you to read the privacy notice of every website you visit.



</Text>

                </ScrollView>
                </View>



                
              
            </View>
        )
    }
}

export default LinkToThirdParty