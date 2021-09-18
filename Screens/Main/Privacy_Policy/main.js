import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, ScrollView, ActivityIndicator,Alert,Picker,Image} from 'react-native'


class Main extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#229dd0',alignItems:'center'}}>
                
                <View style={{width:Dimensions.get('window').width*2/2.1,borderWidth:1,borderColor:'white',padding:10,marginTop:30,borderRadius:4,height:Dimensions.get('window').height*2/2.5}}>
                    <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>Privacy Policy – Release on 01-08-2021] </Text>


                    <Text style={{borderWidth:.5,borderColor:'white',height:0,width:'100%',marginTop:5}}> </Text>


                    
                        <ScrollView>
                            <Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>PRIVACY STATEMENT : </Text>

                            <Text style={{color:'white',marginTop:10,fontSize:16}}>Your privacy is our top priority. In this statement, you will find out how we protect and conserve your privacy rights, and personal data. You are requested to read this “Privacy Policy” thoroughly before using our services.You are in the safest mobile, web, and your personal information hands, at NUX_</Text>


                            <Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>Keywords : </Text>

                            <Text style={{color:'white',marginTop:10,fontSize:16}}>Our Services include our main service and product offerings, contents, features, facilities, and rewards offered to you.
                                Our Platform includes the mobile applications, websites, webpages, blogs, social media channels and other sources through which we offer our Services to you.
                                </Text>



                                <Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:15}}>Brief : </Text>

                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Who are we')} style={{ width:Dimensions.get('window').width,backgroundColor:'#98b5b5',flexDirection:'row',padding:10,marginTop:10 }}>
                                    <Text style={{color:'white',fontSize:20}}>Who are we?</Text>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('What Data Do We Collect')} style={{ width:Dimensions.get('window').width,backgroundColor:'#98b5b5',flexDirection:'row',padding:10,marginTop:10 }}>
                                    <Text style={{color:'white',fontSize:20}}>What data do we collect about you?</Text>
                                </TouchableOpacity>



                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Why your personal information is processed')} style={{ width:Dimensions.get('window').width,backgroundColor:'#98b5b5',flexDirection:'row',padding:10,marginTop:10 }}>
                                    <Text style={{color:'white',fontSize:20}}>Why your personal information is processed?</Text>
                                </TouchableOpacity>




                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('How will the changes in our privacy statement communicated over to you')} style={{ width:Dimensions.get('window').width,backgroundColor:'#98b5b5',flexDirection:'row',padding:10,marginTop:10 }}>
                                    <Text style={{color:'white',fontSize:20}}>How will the changes in our privacy statement communicated over to you?</Text>
                                </TouchableOpacity>




                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('NUX gives you right to erase your personal data')} style={{ width:Dimensions.get('window').width,backgroundColor:'#98b5b5',flexDirection:'row',padding:10,marginTop:10 }}>
                                    <Text style={{color:'white',fontSize:20}}>NUX gives you right to erase your personal data</Text>
                                </TouchableOpacity>




                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('News and Communication')} style={{ width:Dimensions.get('window').width,backgroundColor:'#98b5b5',flexDirection:'row',padding:10,marginTop:10 }}>
                                    <Text style={{color:'white',fontSize:20}}>News and Communication</Text>
                                </TouchableOpacity>




                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Your activity data sharing')} style={{ width:Dimensions.get('window').width,backgroundColor:'#98b5b5',flexDirection:'row',padding:10,marginTop:10 }}>
                                    <Text style={{color:'white',fontSize:20}}>Your activity data sharing</Text>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Links to third-party websites')} style={{ width:Dimensions.get('window').width,backgroundColor:'#98b5b5',flexDirection:'row',padding:10,marginTop:10 }}>
                                    <Text style={{color:'white',fontSize:20}}>Links to third-party websites</Text>
                                </TouchableOpacity>

                        </ScrollView>
                   
                </View>
            </View>
        )
    }
}

export default Main