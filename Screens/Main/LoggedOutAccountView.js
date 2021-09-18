import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'
import {AdMobBanner} from 'expo-ads-admob'


class LoggedOutAccountView extends React.Component {

    constructor(props){
        super(props)
        this.bannerAdId = Platform.OS == 'ios'?"ca-app-pub-6796247302325530/7523814683":"ca-app-pub-3940256099942544/6300978111"

    }

    login_or_register = ()=>{
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'auth', screen: 'GetStart' }]
        });
    }

    render(){
        return(
            <View>

            <View style={{ flexDirection:'row',padding:20 }}>
             <MaterialCommunityIcons name='account-circle' size={90}/>

             <View style={{ marginTop:10,marginLeft:10 }}>
             <Text style={{ color:'black',fontSize:20,fontWeight:'bold' }}>Log in </Text>
             
             <TouchableOpacity style={{ marginTop:10 }} onPress={this.login_or_register}>
            <Text style={{ color:'black',fontSize:16,fontWeight:'bold',textDecorationLine: 'underline' }}>Log in to your account </Text>
             </TouchableOpacity>
             </View>
            

            </View>

            
            <Text style={{height:0,width:Dimensions.get('window').width*2/2.2,borderColor:'gray',borderWidth:.5,marginTop:5,marginLeft:16,textAlign:'center'}}> </Text>



            <TouchableOpacity style={[styles.buttons,{marginTop:20}]} onPress={this.login_or_register}>
                  
                    <Text style={{ color:'white',fontSize:16,fontWeight:'bold', }}>login or register</Text>
                </TouchableOpacity>

                <View style={{ marginTop:Dimensions.get('window').height*2/5}}>

                <AdMobBanner 
                bannerSize='fullBanner'
                adUnitID={this.bannerAdId}
                servePersonalizedAds ={false}


                />
                </View>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    buttons:{
        borderWidth:1,
        borderColor:'#6E6EB4',
        padding:10,
        width:Dimensions.get('window').width*2/2.2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5 ,
        alignSelf:'center',
        backgroundColor:'#6E6EB4'
      
    },
    container:{
        flex:1,
        
        alignItems: 'center',
        backgroundColor:'#1A1AFF'
    }
})
export default LoggedOutAccountView