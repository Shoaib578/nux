import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import base_url from '../../base_url'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category:'',
            location:''
        }        
        this.get_category()
        this.get_location()

    }


    get_location = async()=>{
        let location = await AsyncStorage.getItem('location')
        console.log(location)
        this.setState({location:location})
    }

    get_category = async()=>{
        let category = await AsyncStorage.getItem('category')
        this.setState({category:category})
    }

    componentDidMount(){
        this.get_category()
        this.get_location()
        this.props.navigation.addListener('focus',()=>{
            this.get_category()
            this.get_location()
        })
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('FiltersCategory')} style={{padding:20,width:Dimensions.get('window').width,backgroundColor:'#E4E4E4' }}>
                    <Text style={{ color:'black',fontSize:20 }}>Category</Text>
                    <Text style={{ color:'gray' }}>{this.state.category}</Text>

                </TouchableOpacity>


                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SetLocationForSearch')} style={{padding:20,width:Dimensions.get('window').width,backgroundColor:'#E4E4E4',marginTop:20 }}>
                    <Text style={{ color:'black',fontSize:20 }}>Location</Text>
                    <Text style={{ color:'gray' }}>{this.state.location}</Text>

                </TouchableOpacity>
            </View>
        )
    }
}

export default Filters