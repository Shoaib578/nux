import React from 'react'
import Axios from 'axios'
import {View,Text,TouchableOpacity,Dimensions,TextInput,ScrollView,StyleSheet,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome5,Ionicons,AntDesign,Entypo} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import base_url from '../../base_url'

import { Video, AVPlaybackStatus } from 'expo-av';


class Message extends React.Component {

    

    constructor(props) {
        super(props)

        this.state = {
            my_id:'',
            video_status:'',
        }
        this.video_ref= React.createRef(null);

        this.get_user_id()
    }   

    get_user_id = async()=>{
        const user =await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        this.setState({my_id:parse.user_id})
    }

  

    render(){

        


        return(
            <View>

            <View onPress={() => this.sheetRef.current.snapTo(0)} style={{ marginLeft:this.props.data.sended_by == this.state.my_id?Dimensions.get('window').width*2/4:Dimensions.get('window').width*2/35,backgroundColor:this.props.data.sended_by == this.state.my_id?'skyblue':'white',padding:5,marginTop:20,width:180, }}>
                {this.props.data.message_txt?<Text>{this.props.data.message_txt}</Text>:null}
              
                {this.props.data.image && this.props.data.image.split(".")[1].trim() !='mp4'?<Image source={{uri:base_url+'static/message_images/'+this.props.data.image}} style={{width:'100%',height:160}}/>:null}


                {this.props.data.image && this.props.data.image.split(".")[1].trim() =='mp4'? <Video
               ref={this.video_ref}
                style={{width:'100%',height:200}}
                source={{
                uri: base_url+'static/message_images/'+this.props.data.image,
                }}
                useNativeControls
                resizeMode="cover"
                onPlaybackStatusUpdate={status => this.setState({video_status:status})}
                
            />:null}
            </View>



               


            </View>

        )
    }
}

export default Message