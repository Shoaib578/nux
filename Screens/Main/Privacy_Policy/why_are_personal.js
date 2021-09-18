import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class WhyArePersonalInfo extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
                <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,height:Dimensions.get('window').height*2/2.5,}}>
                <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>Why your personal information is processed?</Text>
                <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>
                <ScrollView>



                <Text style={{color:'black',marginTop:10,fontWeight:'bold',fontSize:18}}>Your personal information is ONLY used or processed in discretion to legal permission. We may process or use your personal data under the following conditions: </Text>



                <Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>1) In case we enter into a mutual agreement or perform a contract with you for using our Platform or Services </Text>

<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>2) In case your data, preferences, or information is prerequisite to the improvement of our Services or Platform.
 </Text>


<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>3) In case we are obligated to abide by any legal or regulatory framework.
 </Text>



 <Text style={{color:'black',marginTop:10,fontWeight:'bold',fontSize:18}}>We collect the rest of your data e.g. clickstream, location, analytics, login information, and chat-strings for the following purposes: </Text>

 <Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>1) Offering you tailored content and preventing your receipt of irrelevant Services.
 </Text>

<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>2) For determining your use time and provide you with updated fresh content as per your usage frequency.

 </Text>


<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>3) To internally analyze and effectively report the Service viewership to our management authorities and business partners.

 </Text>



 <Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>4) To maintain your experience across all of your different devices (mobile, laptop, tablet, desktop) you are logged-in to and to further enhance your cyber security

 </Text>



 <Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>5) To avoid fraud and block spam users from approaching you


 </Text>

                    </ScrollView>
                    </View>



                    
                  
                </View>

        )
    }
}

export default WhyArePersonalInfo