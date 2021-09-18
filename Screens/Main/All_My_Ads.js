import React from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions,TouchableOpacity, Picker,ScrollView, ActivityIndicator,Alert,FlatList,} from 'react-native'
import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Product from './Product'
import NetworkError  from './NetworkError';
import {AdMobBanner} from 'expo-ads-admob'
import HomePageProductsAds from './HomePageProductsAds'

class All_My_Ads extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is_loading:true,
            network_error:false,
            all_my_ads:[],
            filter:''
        }
        this.bannerAdId = Platform.OS == 'ios'?"ca-app-pub-6656021178623765~9816867734":"ca-app-pub-6656021178623765~6155796659"


       
    }
    

    get_all_my_ads = async()=> {
    const user = await AsyncStorage.getItem('user')
    const parse = JSON.parse(user)
    
    Axios.get(base_url+'get_all_my_ads?my_id='+parse.user_id+'&&want_to_filter=false')
    .then(res=>{
        console.log(res.data.products)
        this.setState({all_my_ads:res.data.products,is_loading:false})
        
    })
    .catch(err=>this.setState({network_error:true}))
    }

    fix_network_error = ()=>{
       this.setState({is_loading:true,network_error:false})
       this.get_all_my_ads() 
    }

   async componentDidMount() {
     await   this.get_all_my_ads()
        this.props.navigation.addListener('focus', async() => {
            this.setState({is_loading:true})
           await this.get_all_my_ads()

          });
      
    }

    render(){
        if(!this.state.network_error){
        if(!this.state.is_loading){
        

        return(
           <ScrollView>


                <View style={{ borderWidth:1,borderColor:'black',borderRadius:5,width:Dimensions.get('window').width*2/4.8,marginTop:10,height:40 }}>
                <Picker
                default={'all'}
                selectedValue={this.state.filter}
                onValueChange={async(val)=>{
                    this.setState({filter:val})
                    const user = await AsyncStorage.getItem('user')
                    const parse = JSON.parse(user)
                if(val != 'all'){
                    Axios.get(base_url+'get_all_my_ads?my_id='+parse.user_id+'&&want_to_filter=true&&filter_data='+val)
                    .then(res=>{
                        this.setState({all_my_ads:res.data.products,is_loading:false})
                        
                    })
                    .catch(err=>this.setState({network_error:true}))
                    
                }else{
                    Axios.get(base_url+'get_all_my_ads?my_id='+parse.user_id+'&&want_to_filter=false')
                    .then(res=>{
                        this.setState({all_my_ads:res.data.products,is_loading:false})
                        
                    })
                    .catch(err=>this.setState({network_error:true}))
                    
                }
                
                }}
                
                mode="dropdown">
                <Picker.Item label="filter" value='' />
                <Picker.Item label="All" value='all'/>

                <Picker.Item label="Pending" value='pending' />
                <Picker.Item label="Confirmed" value='confirmed'/>
                <Picker.Item label="Sold" value='sold'/>

                </Picker>
                </View>


            
        {this.state.all_my_ads && this.state.all_my_ads.length>0?<View style={{flex:1, flexDirection:'row',marginRight:30,flexWrap:'wrap',justifyContent:'space-between',marginTop:20}}>
          
              {this.state.all_my_ads.map((data,index)=>(
                  <View>
                  <Product data={data} key={data.product_id} navigation={this.props.navigation} />
                  
                  {index%6 == 5?
                  <View style={{ padding:20 }}>
                    
                       
                     <AdMobBanner 
                     bannerSize='banner'
                     adUnitID={this.bannerAdId}
                     servePersonalizedAds ={false}
                    
                     
                     />
 
            
                    
 
                   
                     </View>
                     :null}

                  </View>
              ))}
                  </View>:<Text style={{ textAlign:'center',marginTop:59,fontSize:18 }}>You Dont Have Any Ads</Text>}
             <Text style={{ marginBottom:150 }}> </Text>    
        </ScrollView>
         
        )
    

      }else{
        return <ActivityIndicator size="large" color='black' style={{alignSelf: 'center',marginTop:50}}/>

      }
     }else{
        return <NetworkError get_all_my_ads={this.fix_network_error} />

     }
    }
}

export default All_My_Ads