import React from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,Dimensions} from 'react-native';
import logo from '../Components/images/NUX.png'
class Loading extends React.Component {
    render(){
        return (
         <View style={{ flex:1,justifyContent:'center',alignItems: 'center',backgroundColor:'#229dd0'}}>
             
         <Image source={logo} style={{width:300,height:300}}/>
         </View>
            
        )
    }
}

export default Loading