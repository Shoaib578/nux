import React from 'react'
import Axios from 'axios'
import {View,Text,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Favorites from './Favorites'
import All_My_Ads from './All_My_Ads'
class MyAdds extends React.Component{

    constructor(props){
        super(props)
 
        this.isLoggedIn()

        this.state = {
            selected:'my_ads',
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

         

    render(){
        return(
            <View >
                <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:20 }}>

                  <TouchableOpacity onPress={()=>{
                      this.setState({selected:'my_ads'})
                  }}>
                 <Text style={{ color:'black',fontSize:18,fontWeight:this.state.selected == 'my_ads'?'bold':'normal',marginLeft:40 }}>My Ads</Text>
                 {this.state.selected == 'my_ads'?<Text style={{height:5,width:120,borderColor:'black',borderWidth:.5,marginTop:8,fontWeight:'bold',backgroundColor:'black',borderRadius:5,left:20}}> </Text>:null}

                  </TouchableOpacity>  


                  

                  <TouchableOpacity  onPress={()=>{
                      this.setState({selected:'favorite'})
                  }}>
                <Text style={{ color:'black',fontSize:18,fontWeight:this.state.selected == 'favorite'?'bold':'normal',marginRight:45}}>Favorites</Text>
                {this.state.selected == 'favorite'?<Text style={{height:5,width:120,borderColor:'black',borderWidth:.5,marginTop:8,fontWeight:'bold',backgroundColor:'black',borderRadius:5,right:20}}> </Text>:null}
                 
                 </TouchableOpacity>


                </View>


                <View style={{ marginTop:29,marginLeft:30 }}>
                    {this.state.selected == 'favorite'?
                    <Favorites navigation={this.props.navigation}/>

                    :

                    <All_My_Ads navigation={this.props.navigation} />

                    }
                </View>
            </View>
        )
    }
}

export default MyAdds