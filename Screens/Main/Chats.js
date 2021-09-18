import React from 'react'
import Axios from 'axios'
import {View,Text,TouchableOpacity,Dimensions,TextInput,ScrollView,StyleSheet,ActivityIndicator,Image,Alert,PermissionsAndroid,TouchableWithoutFeedback} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome5,Ionicons,AntDesign,Entypo,MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import base_url from '../../base_url'
import Message from './Message'
import NetworkError from './NetworkError'
import Clipboard from 'expo-clipboard';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from "expo-permissions"; 
import FileSystem from 'expo-file-system'
import BottomSheet from 'reanimated-bottom-sheet'

 



class Chats extends React.Component{
   

  

   constructor(props){
       super(props)
       this.sheetRef  = React.createRef(null);

        this.state = {
            msg:'',
            image:'',
            msgs:[],
            is_loading:true,
            network_error:false,
            product_owner_info:[],
            msg_info:{},
            my_id:''
        }
     
        this.get_my_id()
       this.isLoggedIn()
       this.get_messages()

   }

   _downloadFile = async (link) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

//permission for camera_roll
    if (status === "granted") {
//store the cached file
      const file = await FileSystem.downloadAsync(
        link,
        FileSystem.documentDirectory + this.state.msg_info.media
      );

//save the image in the galery using the link of the cached file
      const assetLink = await MediaLibrary.createAssetAsync(file.uri);
      console.log(file, assetLink);
    }
  };


   get_my_id = async()=>{
       const user = await AsyncStorage.getItem('user')
       const parse = JSON.parse(user)
       this.setState({my_id:parse.user_id})
   }



   delete_msg = (id)=>{
    Axios.get(base_url+'delete_msg?msg_id='+id)
    .then(res=>{
        this.get_messages()
    
         this.sheetRef.current.snapTo(2)

    })
    .catch(err=>Alert.alert)
}



renderInner = () => (
    <View style={{ backgroundColor:'white',height:180,width:Dimensions.get('window').width,borderRadius:5,}}>

        <Text style={{ textAlign:'center',fontSize:17 }}>Press And Hold on Button To do anything</Text>
        

        {this.state.msg_info.media?
        <TouchableOpacity  style={{ backgroundColor:'skyblue',width:Dimensions.get('window').width,height:50,justifyContent: 'center'}} onPress={()=>this._downloadFile(base_url+'static/message_images/'+this.state.msg_info.media)}>
        <Text style={{ textAlign:'center',fontWeight:'bold',fontSize:15 }}>Save</Text>    

        </TouchableOpacity>

        
        :null}
        


        <TouchableOpacity  style={{ backgroundColor:'skyblue',width:Dimensions.get('window').width,height:50,justifyContent: 'center'}} onPress={()=>this.copyToClipboard()}>
        <Text style={{ textAlign:'center',fontWeight:'bold',fontSize:15 }}>Copy</Text>    

        </TouchableOpacity>

        {this.state.my_id == this.state.msg_info.posted_by?<TouchableOpacity style={{ backgroundColor:'red',width:Dimensions.get('window').width,height:50,justifyContent: 'center'}} onPress={()=>{
           this.delete_msg(this.state.msg_info.id)
            
            
            }}>
        <Text  style={{ textAlign:'center',fontWeight:'bold',fontSize:15 }}>Delete</Text>    

        </TouchableOpacity>:null}


    </View>
  )


   getUserInfo = ()=>{
       Axios.get(base_url +'get_user_info?user_id='+this.props.route.params.product_owner_id)
       .then(res=>{
           this.setState({product_owner_info:res.data.user})
       })
       .catch(err=>console.log(err))
   }


    copyToClipboard = () => {
    Clipboard.setString(this.state.msg_info.msg);
    this.sheetRef.current.snapTo(null)
  };

   pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({image:result})
   
     
    }
 
  }

  get_messages = async () => {
      const user = await AsyncStorage.getItem('user')
      const parse = JSON.parse(user)
      Axios.get(base_url +'get_messages?my_id='+parse.user_id+'&&user_id='+this.props.route.params.product_owner_id)
      .then(res=>{
          this.setState({msgs:res.data.msgs,is_loading:false})
          this.getUserInfo()
          console.log(res.data.msgs)
      })
      .catch(err=>this.setState({network_error:true}))
  }
 
  send_msg = async()=>{
    const user = await AsyncStorage.getItem('user')
    const parse = JSON.parse(user)

    
    
    let formData = new FormData()
    if(this.state.image.uri){
      let match = /\.(\w+)$/.exec(this.state.image.uri.split('/').pop());
      let type = match ? `image/${match[1]}` : `image`;

      formData.append('image',{
          name: this.state.image.uri.split('/').pop(),
          type: type,
          uri: Platform.OS === 'ios' ? this.state.image.uri.replace('file://', '') : this.state.image.uri,
      })
    }

    

    if(this.state.msg){
        formData.append('msg',this.state.msg)
    }

   
    
    if(this.state.msg.length>0 || this.state.image.uri ){
        formData.append('inserted_by',parse.user_id)
        formData.append('msg_for',this.props.route.params.product_owner_id)

        Axios.post(base_url+'send_message',formData)
        .then(res=>{
            this.get_messages()
            
        //   this.inser_notification('Added message to group')
            

            this.setState({msg:'',image:''})
            
            console.log(res.data.msg)
        })
        .catch(err=>{
            Alert.alert('Something Went Wrong')
        })
    }else{
        return null
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


        fix_network_error = ()=>{
            this.setState({is_loading:true})
            this.get_messages()
        }

        

      async  componentDidMount() {

          await  this.get_messages()

            this.props.navigation.addListener('focus',async()=>{
            await this.get_messages()
            })

            setInterval(async()=>{
               await this.get_messages()
            },11000)
        }


    render(){

      

        if(!this.state.network_error){
            if(!this.state.is_loading){
    
        return(
            <View style={ styles.container }>
               <ScrollView style={{width:'100%'}}>

                   <View style={{ alignSelf:'center',marginTop:10 }}>
                   <MaterialCommunityIcons name='account-circle' style={{ alignSelf:'center' }} size={130}/>
                    <Text style={{ fontSize:25,textAlign:'center' }}>{this.state.product_owner_info.user_name}</Text>
                    <Text style={{ color:'gray',textAlign:'center' }}>Member Since {this.state.product_owner_info.member_since}</Text>

                   </View>
                   <Text style={{height:0,width:Dimensions.get('window').width,borderColor:'gray',borderWidth:.5,marginTop:5,textAlign:'center'}}> </Text>

                   <Text style={{ marginTop:20 }}> </Text>

                  {this.state.msgs.map(data=>(
                      <TouchableOpacity onPress={()=>{
                        this.sheetRef.current.snapTo(0)
                          let msg_info = {
                              'msg':data.message_txt,
                              'id':data.message_id,
                              'posted_by':data.sended_by,
                              'media':data.image,
                             
                          }
                           this.setState({msg_info:msg_info})



                      }
                      
                      }  key={data.message_id}>
                      <Message data={data}/>
                      </TouchableOpacity>
                  ))}

                <Text style={{ marginBottom:20 }}> </Text>
               </ScrollView>



               <View style={{width:Dimensions.get('window').width,height:50 ,flexDirection:'row',backgroundColor:'white',paddingTop:7,paddingBottom:7}}>

                <TouchableOpacity onPress={this.pickImage} style={{ marginLeft:10,top:10,position:'absolute' }}>
                <Entypo name="attachment" color="black" size={25}/>
                {this.state.image.uri?<Image source={{uri:this.state.image.uri}} style={{width:20,height:20,borderRadius:20,position:'absolute',left:16,top:8}}/>:null}
                </TouchableOpacity>

                <View style={{borderWidth:.5,borderColor:'black',position:'relative',padding:5,borderRadius:10,width:Dimensions.get('window').width*2/2.8,marginLeft:55,}}>
                        <TextInput placeholder="Message" placeholderTextColor='#7f7f7f' style={{color:'black',}} multiline={true}
                        textStyle={{ minHeight: 128 }}
                        numberOfLines={5}
                        onChangeText={(val)=>this.setState({msg:val})}
                        value={this.state.msg}
                        />
                    

                        </View>
                      
                        <TouchableOpacity style={{marginLeft:15}} onPress={this.send_msg}>
                        <AntDesign name="right" size={30} color="skyblue" />

                        </TouchableOpacity>
                       

                    
                </View>

                <BottomSheet
            snapPoints={[150, 120,0]}
            renderContent={this.renderInner}
            ref={this.sheetRef}
            initialSnap={2}
            
            enabledInnerScrolling={false}
            />  

            </View>
        )
        }else{
            return <ActivityIndicator size="large" color='black' style={{ marginTop:50 }} />

        }
    
    }else{
        return <NetworkError get_all_my_ads={this.fix_network_error}/>

    }
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E4E4E4",
      
      alignItems: "center",
      flex: 1,
      
      
    }
  });
export default Chats