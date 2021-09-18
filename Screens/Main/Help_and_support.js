import React from 'react'
import {View,Text,Button,Share,TouchableOpacity,ScrollView, Alert,ActivityIndicator,Dimensions,Platform,StyleSheet,Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetworkError from './NetworkError'
import Axios from 'axios'
import base_url from '../../base_url'
import Product from './Product'
import {FontAwesome5,AntDesign,FontAwesome,Entypo,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import {AdMobBanner} from 'expo-ads-admob'
import { LogBox } from 'react-native';
import * as StoreReview from 'expo-store-review';
import Constants from "expo-constants"
const version = Constants.manifest.version


class Help_and_Support extends React.Component {
    rate_us = ()=>{
        const androidPackageName = 'host.exp.exponent';
        // Open the Android Play Store in the browser -> redirects to Play Store on Android
        Linking.openURL(
          `https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`
        );
        // Open the Android Play Store directly
        Linking.openURL(`market://details?id=${androidPackageName}&showAllReviews=true`);
    }

    onShare = async () => {
        
        try {
          const result = await Share.share({
            message:'Hello, Nux is very Beautiful app and here you buy and sell very amazing products Download it',
            url: "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
          },{
            dialogTitle: 'Share Today',
            excludedActivityTypes:[
                "com.apple.UIKit.activity.PostToFacebook",
          "com.apple.UIKit.activity.PostToTwitter",
          "com.apple.UIKit.activity.PostToWeibo",
          "com.apple.UIKit.activity.Message",
          "com.apple.UIKit.activity.Mail",
          "com.apple.UIKit.activity.Print",
          "com.apple.UIKit.activity.CopyToPasteboard",
          "com.apple.UIKit.activity.AssignToContact",
          "com.apple.UIKit.activity.SaveToCameraRoll",
          "com.apple.UIKit.activity.AddToReadingList",
          "com.apple.UIKit.activity.PostToFlickr",
          "com.apple.UIKit.activity.PostToVimeo",
          "com.apple.UIKit.activity.PostToTencentWeibo",
          "com.apple.UIKit.activity.AirDrop",
          "com.apple.UIKit.activity.OpenInIBooks",
          "com.apple.UIKit.activity.MarkupAsPDF",
          "com.apple.reminders.RemindersEditorExtension", //Reminders
          "com.apple.mobilenotes.SharingExtension", // Notes
          "com.apple.mobileslideshow.StreamShareService", // iCloud Photo Sharing - This also does nothing :{
          
          // Not supported
          "com.linkedin.LinkedIn.ShareExtension", //LinkedIn
          "pinterest.ShareExtension", //Pinterest
          "com.google.GooglePlus.ShareExtension", //Google +
          "com.tumblr.tumblr.Share-With-Tumblr", //Tumblr
          "wefwef.YammerShare", //Yammer
          "com.hootsuite.hootsuite.HootsuiteShareExt", //HootSuite
          "net.naan.TwitterFonPro.ShareExtension-Pro", //Echofon
          "com.hootsuite.hootsuite.HootsuiteShareExt", //HootSuite
          "net.whatsapp.WhatsApp.ShareExtension" //WhatsApp

              ]
          }
          
          );
    
         
        } catch (error) {
          alert(error.message);
        }
      };
    render(){
        return(
            <View>

         

            <TouchableOpacity onPress={this.rate_us} style={[styles.buttons,{marginTop:10}]} >
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Rate Us</Text>
                  <Text style={{color:'gray'}}>if you love our app, take a moment to rate it</Text>
                  

              </TouchableOpacity>

              <TouchableOpacity onPress={this.onShare} style={[styles.buttons,{marginTop:10}]} >
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Invite your friends to  NUX</Text>
                  
                  <Text style={{color:'gray'}}>Invite your friends to buy and sell</Text>

              </TouchableOpacity>


              <TouchableOpacity onPress={this.rate_us} style={[styles.buttons,{marginTop:10}]} >
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Check for updates</Text>
                  <Text style={{color:'gray'}}>Check for the New Features</Text>
                  

              </TouchableOpacity>


              <TouchableOpacity  style={[styles.buttons,{marginTop:10}]} >
                  
                  <Text style={{ color:'black',fontSize:16,fontWeight:'bold', }}>Version</Text>
                  
                  <Text style={{color:'gray'}}>{version}</Text>
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
export default Help_and_Support