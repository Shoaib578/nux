import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, ScrollView, ActivityIndicator,Alert} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome5,AntDesign,FontAwesome,Entypo,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'

class SetLocationForSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations:[
                "Badakhshan",
                "Badghis",
                "Baghlan",
                "Balkh",
                "Bamyan",
                "Daykundi",
                "Farah",
                "Faryab",
                "Ghazni",
                "Ghor",
                "Helmand",
                "Herat",
                "Jowzjan",
                "Kabul",
                "Kandahar",
                "Kapisa",
                "Khost",
                "Kunar",
                "Kunduz",
                "Laghman",
                "Logar",
                "Nangarhar",
                "Nimruz",
                "Nuristan",
                "Paktia",
                "Paktika",
                "Panjshir",
                "Parwan",
                "Samangan",
                "Sar-e Pol",
    
            ],
            search_locations:[],
            location:''
        }

       
    }
  
    get_location = async()=>{
        try{
            const user = await AsyncStorage.getItem('user')
            const parse = JSON.parse(user)
    
            AsyncStorage.setItem('location',parse.location)
            
            this.props.navigation.goBack(null)
        }catch(e){
            this.isLoggedIn()
        }
        

    }


    isLoggedIn = async()=>{
        console.log('Checking')
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
      
        if(parse == null){
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'auth', screen: 'GetStart' }]
            });
        }

        }


    componentDidMount(){
        this.setState({search_locations:this.state.locations})
    }
    render(){
        return(
            <View style={{ padding:5 }}>

                <View style={{ flexDirection:'row',backgroundColor:'white',padding:5,width:'93%',borderWidth:1,borderColor:'black',borderRadius:5 ,marginLeft:20,marginTop:20}}>
            <FontAwesome name='search' color='gray' size={20} style={{marginLeft:16,top:4}}/>
                
                <TextInput placeholder="Search area" style={{width:'100%',marginLeft:10}}  onChangeText={value => {
              
               
                  
              this.setState({search_locations:
             this.state.locations.filter(i=>i.toLowerCase().includes(value.toLowerCase()))
             })
             
           
          
         
         }}
         
         />
                </View>

            <TouchableOpacity onPress={this.get_location} style={{ flexDirection:'row',marginLeft:20,marginTop:15,width:Dimensions.get('window').width }}>
                <FontAwesome name='crosshairs' size={30} color='blue'/>
                <Text style={{ color:'blue',top:10,left:4 }}> Use Current location</Text>
            </TouchableOpacity>

            <Text > </Text>

                <ScrollView>
                    {this.state.search_locations.map(data=>(
                        <TouchableOpacity onPress={async()=>{
                            await AsyncStorage.setItem('location',data)
                           
                            this.props.navigation.goBack(null)
                        }} style={{top:10, marginLeft:20,width:Dimensions.get('window').width,height:40,backgroundColor:'#EEEEEE' }} key={data}>
                        <Text style={{ fontWeight:'bold' }}>{data}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

export default SetLocationForSearch