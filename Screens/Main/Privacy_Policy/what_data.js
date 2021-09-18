import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class WhatDataWeCollect extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
                <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,height:Dimensions.get('window').height*2/2.5}}>
                <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>What data do we collect about you?</Text>



                <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>



                    
                <ScrollView>
                    <Text style={{color:'white',marginTop:10,fontSize:16}}>All the data required from you during registration and acceptance of our policies is a prerequisite to your usage of our Services.
All the data collected about you and your activities constitute your history, preferences, experience, and your type of usage of our Services on your account.
</Text>


<Text style={{color:'black',marginTop:10,fontWeight:'bold',fontSize:18}}>Data collected through direct interactions  : </Text>
<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>The following information may be collected about you during your registration : </Text>

<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>1) While registering through your mobile number, your mobile number is collected. </Text>

<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>2) While registering through your Google Account or email, your first name, last name and email address is collected. </Text>


<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>3) While registering through your Facebook Account, your first name and last name as appearing on your Facebook Account is collected. </Text>



<Text style={{color:'black',marginTop:14,fontWeight:'bold',fontSize:18}}>The following additional data may be collected after your registration : </Text>


<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>1) Your Username</Text>

<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>2) Your Precise OR Approximate Location for determining your products’ station to your potential customers. </Text>


<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>3)Your Debit Card Details in case you prefer to avail our paid services as stated in our Terms of Use. </Text>


<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>4)A Scan of Your Identity (E-Tazkira, Passport or Driving License).</Text>

<Text style={{color:'white',marginTop:5,fontSize:16}}>When you use the Chat option on our Platform, we may collect the data in dialogue. The ONLY purpose for this data collection is keeping the polity of our community standards.</Text>



<Text style={{color:'black',marginTop:10,fontWeight:'bold',fontSize:18}}>Data which is automatically collected when you use our services : </Text>


<Text style={{color:'white',marginTop:10,fontSize:16}}>The system automatically collects some of your information during your interaction with our Platform or usage of our services. This information includes :
</Text>

<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>1) Your Device Information such as the operating system version of your mobile and the name of your mobile network provider is collected in order to associate with your NUX account.
</Text>

<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>2) Your Location information is collected in order to allow you find your needs nearby and sell your items within your nearby range for more feasibility. But it all depends upon your device permissions for allowing NUX to collect your location information. However, you are still allowed to use our services even if you disallow location sharing.
</Text>


<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>3)The Clickstream data of your activities is collected through our Platform for enhancing your customer experience </Text>


<Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>4)We use Cookies Management on your preferences, language selection, and history in order to enrich your prospective visits to our Platform. You can easily reject all but some necessary cookies or set your browser or mobile preferences to inform you when Platforms or Services tend to set or access cookies. If you block or disable cookies, some of our Services may not function properly. Please visit our Cookies Policy for more information.</Text>



                    </ScrollView>
                    </View>



                </View>

        )
    }
}

export default WhatDataWeCollect