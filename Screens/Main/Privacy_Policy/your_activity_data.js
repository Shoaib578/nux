import React from 'react'

import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class YourActivityData extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
            <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,}}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>Your activity data sharing

</Text>
            <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>
            <ScrollView>
                <Text style={{color:'white',marginTop:10,fontSize:16}}>Your activity data on our servers may be shared with official authorities (upon request and in discretion to saving your personal privacy and premises). 
Since we receive third party services i.e. cloud storage, or analytics, we prioritize the safety of your data and keep regular check on our third party service providers to respect your privacy.
Advertising and social media analytics service providers may be recipients of your indirect data metrics (NOT YOUR PERSONAL DATA). Sole purpose of which is to increase the effectiveness of our advertisement campaigns ONLY.


</Text>

                </ScrollView>
                </View>



                
              
            </View>
        )
    }
}

export default YourActivityData 