import React from 'react'
import {View, Linking, NativeModules,Platform,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import * as IntentLauncher from 'expo-intent-launcher';
import * as Application from 'expo-application';



class NotificationsSettings extends React.Component{

    openAppSettings = () => {
        IntentLauncher.startActivityAsync(
            IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
            {
              data: `package:${Application.applicationId}`,
            }
          );

      }


    render(){
        return (
            <View>
                
                <TouchableOpacity onPress={this.openAppSettings} style={[styles.buttons,{marginTop:10}]} >
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Activate</Text>
                  

              </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttons:{
        borderWidth:1,
        borderColor:'#E4E4E4',
        padding:10,
        width:Dimensions.get('window').width,
        
        borderRadius:5 ,
        alignSelf:'center',
        backgroundColor:'#E4E4E4'
      
    },
    container:{
        flex:1,
        
        alignItems: 'center',
        backgroundColor:'#1A1AFF'
    }
})
export default NotificationsSettings