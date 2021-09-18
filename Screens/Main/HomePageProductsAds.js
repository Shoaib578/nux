import React from 'react'
import {View,Text,Button,TouchableOpacity,ScrollView, Alert,ActivityIndicator,Dimensions,Platform,} from 'react-native';

import Axios from 'axios'
import base_url from '../../base_url'
import Product from './Product'
import {FontAwesome5,AntDesign,FontAwesome,Entypo,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import {AdMobBanner} from 'expo-ads-admob'
import { LogBox } from 'react-native';

class HomePageProductsAds extends React.Component {
    constructor(props) {
        super(props)
        this.bannerAdId = Platform.OS == 'ios'?"ca-app-pub-6796247302325530/7523814683":"ca-app-pub-3940256099942544/6300978111"
        this.state = {
            ads:[]
        }

    }

    componentDidMount() {
        this.setState({ads:this.props.total_products})

        console.log(this.props.total_products)
    }

    
    render(){

        
            
                return(
                    <AdMobBanner 
                    bannerSize='banner'
                    adUnitID={this.bannerAdId}
                    servePersonalizedAds ={false}
                   
                    
                    />
                )
            
        
         
               
           
        
        
       

    }

        
    
    
}

export default HomePageProductsAds