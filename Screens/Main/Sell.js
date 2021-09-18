import React from 'react'
import Axios from 'axios'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions, Modal,ScrollView, TouchableHighlight,ActivityIndicator,Alert,Picker,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import base_url from '../../base_url'

class Sell extends React.Component{
    constructor(props){
        super(props)
 
        this.isLoggedIn()

        this.state = {
            modal_visible:false,
            price:'',
            new_or_used:'',
            title:'',
            description:'',
            location:'',
            product_image1:'',
            product_image2:'',
            product_image3:'',
            car_type:'',
            car_fuel_type:'',
            product_image1_name:'',
            product_image2_name:'',
            product_image3_name:'',
            bike_type:'',
            spare_parts_type:'',
            compute_type:'',
            camera_type:'',
            tv_type:'',
            animals_type:'',
            mobile_phone_company:'',
            tablet_company:'',
            laptop_company:'',
            job_type:'',
            furniture_type:'',
            fashion_type:'',
            service_type:'',
            books_sports_and_hobbies:'',
            kids_products:'',
            business:'',
            property_for_sell:'',
            property_rent:'',
            
            //errors
            car_fuel_type_error:'',
            compute_type_error:'',
            images_error_state:'',
            title_error_state:'',
            description_error_state:'',
            price_error_state:'',
            condition_error_state:'',
            location_error_state:'',
            car_type_error:'',
            bike_type_error:'',
            spare_parts_type_error:'',
            camera_type_error:'',
            tv_type_error:'',
            animals_type_error:'',
            mobile_phone_company_error:'',
            tablet_company_error:'',
            laptop_company_error:'',
            job_type_error:'',
            furniture_type_error:'',
            fashion_type_error:'',
            service_type_error:'',
            books_sports_and_hobbies_error:'',
            kids_products_error:'',
            business_error:'',
            property_for_sell_error:'',
            property_rent_error:''


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

         validate = ()=>{
            let price_error = ''
            let title_error = ''
            let description_error = ''
            let image_error = ''
            let condition_error = ''
            let location_error = ''
            let car_type_error = ''
            let car_fuel_type_error = ''
            let spare_parts_type_error = ''
            let bike_type_error = ''
            let camera_type_error = ''
            let computer_type_error = ''
            let tv_type_error = ''
            let animals_type_error = ''
            let tablet_company_error = ''
            let laptop_company_error = ''
            let mobile_phone_company_error = ''
            let job_type_error = ''
            let furniture_type_error = ''
            let fashion_type_error = ''
            let service_type_error=''
            let books_sports_and_hobbies_error = ''
            let kids_products_error = ''
            let business_error = ''
            let property_for_sell_error = ''
            let property_for_rent_error = ''

            if(this.state.price.length <1){
                price_error = 'Please Provide Price'

            }
            

            if(this.props.route.params.category == 'property_rent' && this.state.property_rent.length<1){
              property_for_rent_error = 'Please Provide of Property'
            }
            if(this.props.route.params.category == 'property_for_sell' && this.state.property_for_sell.length<1){
              property_for_sell = 'Please Type of Property'
            }
            if(this.props.route.params.category == 'business'&& this.state.business.length<1){
              business_error = 'Please Provide Business Type'
            }
            if(this.props.route.params.category == 'kids_products' && this.state.kids_products.length<1){
            let kids_products_error = 'Please Provide Type of Product'

            }
            if(this.props.route.params.category == 'books_sports_and_hobbies' && this.state.books_sports_and_hobbies.length<1){
              books_sports_and_hobbies_error = 'Please Provide Type'
            }
            
            if(this.props.route.params.category == 'service' && this.state.service_type.length<1){
              service_type_error = 'Please Provide Type'
            }
            if(this.props.route.params.category == 'furniture' && this.state.furniture_type.length<1){
              furniture_type_error = 'Please Provide Furniture Type'
            }

            if(this.props.route.params.category == 'fashion' && this.state.fashion_type.length<1){
              fashion_type_error = 'Please Provide Fashion Type'
            }

            if(this.props.route.params.category == 'job' && this.state.job_type.length<1){
              job_type_error = 'Please Provide Job Type'
            }
            if(this.props.route.params.category == 'laptop' && this.state.laptop_company.length<1){
              laptop_company_error = 'Please Provide Laptop Company'
            }
            if(this.props.route.params.category == 'tablet' && this.state.tablet_company.length<1){
              tablet_company_error = 'Please Provide Tablet Company'
            }
            
            if(this.props.route.params.category == 'mobile phone' && this.state.mobile_phone_company.length<1){
              mobile_phone_company_error = 'Please Provide Mobile Phone Company Name'
            }

            if(this.props.route.params.category == 'animals' && this.state.animals_type.length<1){
                animals_type_error = 'Please Provide Animal Type'
            }

            if(this.props.route.params.category == 'Car Spare Parts'&&this.state.spare_parts_type.length<1){
                spare_parts_type_error = 'Please Provide the Spare Parts Type'
            }

            if(this.props.route.params.category == 'TV' && this.state.tv_type.length<1){
                tv_type_error = 'Please Provide TV-Video-Audio Type'
            }

            if(this.props.route.params.category == 'Camera' && this.state.camera_type.length<1){
                camera_type_error = 'Please Provide Camera And Accessories Type'
            }

            if(this.props.route.params.category == 'Computers' && this.state.compute_type.length<1){
                computer_type_error = 'Please provide Computer Accessories Type'
            }
            if(this.props.route.params.category == 'Bikes and MotorCycles' && this.state.bike_type.length<1){
                bike_type_error = 'Please Provide Bike Type'
            }
            if(this.props.route.params.category == 'cars' && this.state.car_fuel_type.length<1){
                car_fuel_type_error = 'Please Provide Car Fuel Type'
            }
            if(this.props.route.params.category == 'cars' && this.state.car_type.length<1 ){
                car_type_error = 'Please Provide Car Type'
            }

            if(this.state.title.length < 1){
                title_error = 'Please Provide Title'
            }


            if(this.state.description.length < 1){
                description_error = 'Please Provide Description'
            }


            if(!this.state.product_image1 || !this.state.product_image2 || !this.state.product_image3){
                image_error = 'Please Provide 3 Images of your products'
            }


            if(this.props.route.params.all_over_category == 'product'&&this.state.new_or_used.length < 1 ||this.props.route.params.all_over_category == 'cars'&&this.state.new_or_used.length < 1 ){
                condition_error = 'Please Provide Condition'
            }

            if(this.state.location.length < 1){
                location_error = 'Please Provide Location'
            }

            if(price_error||property_for_rent_error||property_for_sell_error||business_error||kids_products_error||books_sports_and_hobbies_error||service_type_error||fashion_type_error||laptop_company_error||furniture_type_error||mobile_phone_company_error||animals_type_error||tv_type_error||camera_type_error||spare_parts_type_error||bike_type_error ||computer_type_error||car_fuel_type_error || title_error || car_type_error||description_error || image_error || condition_error || location_error){
                this.setState({
                    images_error_state:image_error,
                    title_error_state:title_error,
                    description_error_state:description_error,
                    price_error_state:price_error,
                    condition_error_state:condition_error,
                    location_error_state:location_error,
                    car_type_error:car_type_error,
                    car_fuel_type_error:car_fuel_type_error,
                    bike_type_error:bike_type_error,
                    spare_parts_type_error:spare_parts_type_error,
                    camera_type_error:camera_type_error,
                    tv_type_error:tv_type_error,
                    animals_type_error:animals_type_error,
                    mobile_phone_company_error:mobile_phone_company_error,
                    laptop_company_error:laptop_company_error,
                    job_type_error:job_type_error,
                    furniture_type_error:furniture_type_error,
                    fashion_type_error:fashion_type_error,
                    service_type_error:service_type_error,
                    books_sports_and_hobbies_error:books_sports_and_hobbies_error,
                    kids_products_error:kids_products_error,
                    business_error:business_error,
                    property_for_sell_error:property_for_sell_error,
                    property_for_rent_error:property_for_rent_error
                })
                return false
            }

            return true


         }


         Permissions = async()=>{
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                  Alert.alert('Sorry, we need camera roll permissions to make this work!');
                }
              }
        }



        pickImage1 = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              this.setState({product_image1:result})
              this.setState({product_image1_name:result.uri.split('/').pop()})
             
            }
         
          }

          pickImage2 = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              this.setState({product_image2:result})
              this.setState({product_image2_name:result.uri.split('/').pop()})
             
            }
         
          }


          pickImage3 = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              this.setState({product_image3:result})
              this.setState({product_image3_name:result.uri.split('/').pop()})
             
            }
         
          }



          insert_product = async()=>{
              const user = await AsyncStorage.getItem('user')
              const parse = JSON.parse(user)

              let is_validate = this.validate()

              if(is_validate){

                this.setState({
                    images_error_state:'',
                    title_error_state:'',
                    description_error_state:'',
                    price_error_state:'',
                    condition_error_state:'',
                    location_error_state:'',
                    car_fuel_type_error:'',
                    car_type_error:'',
                    bike_type_error:'',
                    spare_parts_type_error:'',
                    computer_type_error:'',
                    camera_type_error:'',
                    tv_type_error:'',
                    animals_type_error:'',
                    mobile_phone_company_error:'',
                    tablet_company_error:'',
                    laptop_company_error:'',
                    job_type_error:'',
                    furniture_type_error:'',
                    fashion_type_error:'',
                    service_type_error:'',
                    books_sports_and_hobbies_error:'',
                    kids_products_error:'',
                    business_error:'',
                    property_for_sell_error:'',
                    property_for_rent_error:''
                    
                })

                  let formData = new FormData()

                  formData.append('product_title',this.state.title)
                  formData.append('product_description',this.state.description)
                  formData.append('product_price',this.state.price)

                  if(this.props.route.params.category == 'cars'){
                    formData.append('product_category',this.props.route.params.category + ' '+this.state.car_type + ' using '+this.state.car_fuel_type)

                  }else if(this.props.route.params.category == 'business'){
                    formData.append('product_category',this.state.business + ' '+this.props.route.params.category )

                  }else if(this.props.route.params.category == 'property_for_rent'){

                    formData.append('product_category',this.state.property_for_rent )
                  }
                  
                  else if(this.props.route.params.category == 'service'){
                    formData.append('product_category',+ ' '+this.state.service_type + ' '+this.props.route.params.category )

                  }else if(this.props.route.params.category == 'books_sports_and_hobbies'){
                    formData.append('product_category',this.state.books_sports_and_hobbies )

                  }
                  else if(this.props.route.params.category == 'animals'){
                    formData.append('product_category',this.state.animals_type + ' '+this.props.route.params.category )

                  }else if(this.props.route.params.category == 'kids_products'){
                    formData.append('product_category',this.state.kids_products )

                  }
                  
                  else if(this.props.route.params.category == 'tablet'){
                    formData.append('product_category',this.state.tablet_company + ' '+this.props.route.params.category )

                  }else if(this.props.route.params.category == 'job'){
                    formData.append('product_category',this.state.job_type + ' '+this.props.route.params.category )

                  }else if(this.props.route.params.category == 'fashion'){
                    formData.append('product_category',this.state.fashion_type)

                  }
                  else if(this.props.route.params.category == 'mobile phone'){
                    formData.append('product_category',this.state.mobile_phone_company + ' '+this.props.route.params.category )

                  }else if(this.props.route.params.category == 'laptop'){
                    formData.append('product_category',this.state.laptop_company + ' '+this.props.route.params.category )

                  }
                  else if(this.props.route.params.category == 'TV'){
                    formData.append('product_category',this.state.tv_type)

                  }
                  else if(this.props.route.params.category == 'Car Spare Parts'){
                    formData.append('product_category',this.state.spare_parts_type)

                  }

                  else if(this.props.route.params.category == 'Computers'){
                    formData.append('product_category',this.state.compute_type)

                  }else if(this.props.route.params.category == 'furniture'){
                    formData.append('product_category',this.state.furniture_type+' '+this.props.route.params.category)

                  }

                  else if(this.props.route.params.category == 'Camera'){
                    formData.append('product_category',this.state.camera_type)

                  }else if(this.props.route.params.category == 'property_for_sell'){
                    formData.append('product_category',this.state.property_for_sell)

                  }

                  else if(this.props.route.params.category == 'Bikes and MotorCycles'){
                    formData.append('product_category',this.props.route.params.category + ' '+this.state.bike_type )

                  }
                  else{
                    formData.append('product_category',this.props.route.params.category)

                  }
                  formData.append('product_location',this.state.location)

                  let match1 = /\.(\w+)$/.exec(this.state.product_image1_name);
                  let match2 = /\.(\w+)$/.exec(this.state.product_image2_name);
                  let match3 = /\.(\w+)$/.exec(this.state.product_image3_name);

                  let product_image1_type = match1 ? `image/${match1[1]}` : `image`;
                  let product_image2_type = match2 ? `image/${match2[1]}` : `image`;
                  let product_image3_type = match3 ? `image/${match3[1]}` : `image`;

                  formData.append('product_image1', {
                    name: this.state.product_image1_name,
                    type: product_image1_type,
                    uri: Platform.OS === 'ios' ? this.state.product_image1.uri.replace('file://', '') : this.state.product_image1.uri,
                })

                formData.append('product_image2', {
                    name: this.state.product_image2_name,
                    type: product_image2_type,
                    uri: Platform.OS === 'ios' ? this.state.product_image2.uri.replace('file://', '') : this.state.product_image2.uri,
                })


                formData.append('product_image3', {
                    name: this.state.product_image3_name,
                    type: product_image3_type,
                    uri: Platform.OS === 'ios' ? this.state.product_image3.uri.replace('file://', '') : this.state.product_image3.uri,
                })

                formData.append('posted_by',parse.user_id)
                formData.append('condition',this.state.new_or_used)

                console.log(this.state.new_or_used)

                  Axios.post(base_url+'insert_product',formData)
                  .then(res=>{
                      this.setState({
                        price:'',
                        new_or_used:'',
                        title:'',
                        description:'',
                        location:'',
                        product_image1:'',
                        product_image2:'',
                        product_image3:'',

                        car_type:'',
                        car_fuel_type:'',
                        bike_type:'',
                        product_image1_name:'',
                        product_image2_name:'',
                        product_image3_name:'',
                        tv_type:'',
                        animals_type:'',
                        mobile_phone_company:'',
                        tablet_company:'',
                        laptop_company:'',
                        job_type:'',
                        furniture_type:'',
                        service_type:'',
                        books_sports_and_hobbies:'',
                        kids_products:'',
                        business:'',
                        property_for_sell:'',
                        property_for_rent:''
                      })

                      this.setState({modal_visible:true})
                  })
                  .catch(err=>Alert.alert('Something Went Wrong'))
              }

          }
    
    render(){
        return(
            <ScrollView >
                
                <View style={{ marginLeft:10 }}>

                <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modal_visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your Ad Has Been Uploaded.Please wait for the confirmation</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                this.setState({modal_visible:false})
                this.props.navigation.reset({
                  index: 0,
                  routes: [{ name: 'home', screen: 'Home' }]
              });
              }}>
              <Text style={styles.textStyle}>Go Back To Home</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

                    <Text style={{ marginTop:10 }}>Pick Images of your product*</Text>
                    <View style={{ flexDirection:'row',flexWrap:'wrap',marginTop:20,justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={this.pickImage1} style={{ borderWidth:1,borderColor:'black',alignItems:'center',justifyContent:'center',padding:10,width:100,height:100,borderRadius:5 }}>
                        <Image source={this.state.product_image1?{uri:this.state.product_image1.uri}:require('../../Components/images/pick_image.png')} style={{width:90,height:90,borderRadius:5}}/>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.pickImage2} style={{ borderWidth:1,borderColor:'black',alignItems:'center',justifyContent:'center',padding:10,width:100,height:100,borderRadius:5 }}>
                        <Image source={this.state.product_image2?{uri:this.state.product_image2.uri}:require('../../Components/images/pick_image.png')} style={{width:90,height:90,borderRadius:5}}/>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.pickImage3} style={{ borderWidth:1,borderColor:'black',alignItems:'center',justifyContent:'center',padding:10,width:100,height:100,borderRadius:5,marginRight:10 }}>
                        <Image source={this.state.product_image3?{uri:this.state.product_image3.uri}:require('../../Components/images/pick_image.png')} style={{width:90,height:90,borderRadius:5}}/>
                    </TouchableOpacity>

                    </View>

                    <Text style={{ textAlign:'center',color:'red' }}>{this.state.images_error_state}</Text>


            <Text style={{height:0,width:'100%',borderColor:'gray',borderWidth:.5,marginTop:15}}> </Text>
                   


                <Text style={{ marginTop:20 }}>Price*</Text>

                <TextInput keyboardType='numeric' value={this.state.price} placeholder='Price in Afgahni'  onChangeText={(val)=>this.setState({price:val})} 
                style={{ borderWidth:1,borderColor:this.state.price_error_state?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,padding:5,marginTop:10 }}
                />
                    <Text style={{ textAlign:'center',color:'red' }}>{this.state.price_error_state}</Text>

                
                </View>
                

                {this.props.route.params.all_over_category=='product' || this.props.route.params.all_over_category == 'cars' ?<View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Condition*</Text>

                <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
                <TouchableOpacity onPress={()=>this.setState({new_or_used:'new'})} style={{alignItems: 'center',justifyContent:'center', borderWidth:1,borderColor:this.state.new_or_used == 'new'?'skyblue':'black',borderRadius:5,width:Dimensions.get('window').width*2/5,height:40 }}>
                <Text>New</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({new_or_used:'used'})} style={{alignItems: 'center',justifyContent:'center', borderWidth:1,borderColor:this.state.new_or_used == 'used'?'skyblue':'black',borderRadius:5,width:Dimensions.get('window').width*2/5,marginRight:25,height:40 }}>
                <Text>Used</Text>
                </TouchableOpacity>

                
                </View>

               
                <Text style={{ textAlign:'center',color:'red' }}>{this.state.condition_error_state}</Text>


              
                </View>:null}

               

                {this.props.route.params.category == 'business'?
                                <View style={{ marginLeft:10 }}>
                                <Text style={{ marginTop:20 }}>Type*</Text>
                  
                                <View style={{ borderWidth:1,borderColor:this.state.business_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                                <Picker
                  
                                selectedValue={this.state.business}
                                onValueChange={(val)=>{this.setState({business:val})}}
                  
                                mode="dropdown">
                                <Picker.Item label="Type" value='' />
                  
                                <Picker.Item label="Business For Sale" value='Business For Sale' />
                                <Picker.Item label="Food and Restaurant" value='Food and Restaurant'/>
                                <Picker.Item label="Trade and Industrial" value='Trade and Industrial'/>
                                <Picker.Item label="Construction and Heavy Machinery" value='Construction and Heavy Machinery'/>
                                <Picker.Item label="Agriculture" value='Agriculture'/>
                                <Picker.Item label="Medical and Pharma" value='Medical and Pharma'/>

                                <Picker.Item label="Other Business and Industry" value='Other Business and Industry'/>
                 
                                
                                
                  
                                </Picker>
                                </View>
                                <Text style={{ textAlign:'center',color:'red' }}>{this.state.business_error}</Text>
                 
                                 </View>
                
                :null}

                {this.props.route.params.category == 'kids_products'?
                
                <View style={{ marginLeft:10 }}>
               <Text style={{ marginTop:20 }}>Type*</Text>
 
               <View style={{ borderWidth:1,borderColor:this.state.kids_products_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
               <Picker
 
               selectedValue={this.state.kids_products}
               onValueChange={(val)=>{this.setState({kids_products:val})}}
 
               mode="dropdown">
               <Picker.Item label="Type" value='' />
 
               <Picker.Item label="Kids Furniture" value='Kids Furniture' />
               <Picker.Item label="Toys" value='Toys'/>
               <Picker.Item label="Prams and Walkers" value='Prams and Walkers'/>
               <Picker.Item label="Swing and Slides" value='Swing and Slides'/>
               <Picker.Item label="Kids Bikes" value='Kids Bikes'/>
               <Picker.Item label="Kids Accessories" value='Kids Accessories'/>

               
               
 
               </Picker>
               </View>
               <Text style={{ textAlign:'center',color:'red' }}>{this.state.kids_products_error}</Text>

                </View>
                :null}



              {this.props.route.params.category == 'books_sports_and_hobbies'?
               <View style={{ marginLeft:10 }}>
               <Text style={{ marginTop:20 }}>Type*</Text>
 
               <View style={{ borderWidth:1,borderColor:this.state.books_sports_and_hobbies_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
               <Picker
 
               selectedValue={this.state.books_sports_and_hobbies}
               onValueChange={(val)=>{this.setState({books_sports_and_hobbies:val})}}
 
               mode="dropdown">
               <Picker.Item label="Type" value='' />
 
               <Picker.Item label="Books and Magzines" value='Books and Magzines' />
               <Picker.Item label="Musical Instruments" value='Musical Instruments'/>
               <Picker.Item label="Sports Equipment" value='Sports Equipment'/>
               <Picker.Item label="Gym and Fitness" value='Gym and Fitness'/>
               <Picker.Item label="Other Hobbies" value='Other Hobbies'/>
               
               
 
               </Picker>
               </View>
              
 
               <Text style={{ textAlign:'center',color:'red' }}>{this.state.books_sports_and_hobbies_error}</Text>
 
             
               </View>
              :null}
              {this.props.route.params.category == 'service'?
              <View style={{ marginLeft:10 }}>
              <Text style={{ marginTop:20 }}>Type*</Text>

              <View style={{ borderWidth:1,borderColor:this.state.service_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
              <Picker

              selectedValue={this.state.service_type}
              onValueChange={(val)=>{this.setState({service_type:val})}}

              mode="dropdown">
              <Picker.Item label="Type" value='' />

              <Picker.Item label="Education and Classes" value='Education and Classes' />
              <Picker.Item label="Travel and Visa" value='Travel and Visa'/>
              <Picker.Item label="Cars Rental" value='Cars Rental'/>
              <Picker.Item label="Drives and Taxi" value='Drives and Taxi'/>
              <Picker.Item label="Web Development" value='Web Development'/>
              <Picker.Item label="Electronics and Computer Repair" value='Electronics and Computer Repair'/>


              <Picker.Item label="Event Services" value='Event Services'/>
              <Picker.Item label="Health and Beauty" value='Health and Beauty'/>
              <Picker.Item label="Maids and Domestic Help" value='Maids and Domestic Help'/>
              <Picker.Item label="Movers and Packers" value='Movers and Packers'/>
              <Picker.Item label="Home and office Repair" value='Home and office Repair'/>
              <Picker.Item label="Catering and Restaurant" value='Catering and Restaurant'/>
              <Picker.Item label="Other Services" value='Other'/>
              

              
            
              

              </Picker>
              </View>
             

              <Text style={{ textAlign:'center',color:'red' }}>{this.state.service_type_error}</Text>

            
              </View>
              
              :null}





              {this.props.route.params.category == 'furniture'?
              <View style={{ marginLeft:10 }}>
              <Text style={{ marginTop:20 }}>Type*</Text>

              <View style={{ borderWidth:1,borderColor:this.state.furniture_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
              <Picker

              selectedValue={this.state.furniture_type}
              onValueChange={(val)=>{this.setState({furniture_type:val})}}

              mode="dropdown">
              <Picker.Item label="Type" value='' />

              <Picker.Item label="Sofa and Chairs" value='Sofa and Chairs' />
              <Picker.Item label="Beds and Wardrobes" value='Beds and Wardrobes'/>
              <Picker.Item label="Home and Decoration" value='Home and Decoration'/>
              <Picker.Item label="Tables and Dining" value='Tables and Dining'/>
              <Picker.Item label="Garden and Outdoor" value='Garden and Outdoor'/>
              <Picker.Item label="Painting and Mirrors" value='Painting and Mirrors'/>


              <Picker.Item label="Rugs and Carpets" value='Rugs and Carpets'/>
              <Picker.Item label="Curtains and Blinds" value='Curtains and Blinds'/>
              <Picker.Item label="Office Furniture" value='Office Furniture'/>
              <Picker.Item label="Other Household Items" value='Other Household Items'/>

              
            
              

              </Picker>
              </View>
             

              <Text style={{ textAlign:'center',color:'red' }}>{this.state.furniture_type_error}</Text>

            
              </View>
              
              
              :null}
          

                {this.props.route.params.category == 'TV'?
                <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Type*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.tv_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.tv_type}
                onValueChange={(val)=>{this.setState({tv_type:val})}}

                mode="dropdown">
                <Picker.Item label="Type" value='' />

                <Picker.Item label="TV" value='TV' />
                <Picker.Item label="VIDEO-AUDIO" value='VIDEO-AUDIO'/>

                
              
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.tv_type_error}</Text>

              
                </View>
                :null}

                {this.props.route.params.category == 'tablet'?
                <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Company*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.tablet_company_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.tablet_company_error}
                onValueChange={(val)=>{this.setState({tablet_company:val})}}

                mode="dropdown">
                <Picker.Item label="Company" value='' />

                <Picker.Item label="TABLET-APPLE" value='TABLET-APPLE' />
                <Picker.Item label="DANNY-TABS" value='DANNY-TABS'/>

                <Picker.Item label="QTABS" value='QTABS'/>

                <Picker.Item label="TABLETS-SAMSUNG" value='TABLETS-SAMSUNG'/>

                <Picker.Item label="OTHER-TABLETS" value='OTHER-TABLETS'/>

               

              
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.tablet_company_error}</Text>

              
                </View>
                
                :null}



                {this.props.route.params.category == 'mobile phone'?
                <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Company*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.mobile_phone_company_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.mobile_phone_company}
                onValueChange={(val)=>{this.setState({mobile_phone_company:val})}}

                mode="dropdown">
                <Picker.Item label="Company" value='' />

                <Picker.Item label="Apple iPhone" value='Apple iPhone' />
                <Picker.Item label="Asus Mobile" value='Asus Mobile'/>

                <Picker.Item label="BlackBerry" value='BlackBerry'/>

                <Picker.Item label="Google" value='Google'/>

                <Picker.Item label="Haier" value='Haier'/>

                <Picker.Item label="HTC" value='HTC'/>
                
                <Picker.Item label="Honor" value='Honor'/>
                <Picker.Item label="Huawei" value='Huawei'/>
                <Picker.Item label="Infinix" value='Infinix'/>

                <Picker.Item label="Lava" value='Lava'/>
                <Picker.Item label="LG" value='LG'/>
                <Picker.Item label="Nokia" value='Nokia'/>
                <Picker.Item label="One Plus" value='One Plus'/>
                <Picker.Item label="OPPO" value='OPPO'/>
                <Picker.Item label="Samsung Mobiles" value='Samsung Mobiles'/>
                <Picker.Item label="Sony" value='Sony'/>
                <Picker.Item label="Tecno" value='Tecno'/>
                <Picker.Item label="Vivo" value='Vivo'/>
                <Picker.Item label="VOICE" value='VOICE'/>
                <Picker.Item label="Xiaomi" value='Xiaomi'/>
                <Picker.Item label="Zte" value='Zte'/>
                <Picker.Item label="Other Mobiles" value='Other Mobiles'/>


              
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.mobile_phone_company_error}</Text>

              
                </View>
              :null}

              {this.props.route.params.category == 'job'?
              <View style={{ marginLeft:10 }}>
              <Text style={{ marginTop:20 }}>Type*</Text>

              <View style={{ borderWidth:1,borderColor:this.state.job_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
              <Picker

              selectedValue={this.state.job_type}
              onValueChange={(val)=>{this.setState({job_type:val})}}

              mode="dropdown">
              <Picker.Item label="Type" value='' />

              <Picker.Item label="Online Jobs" value='Online' />
              <Picker.Item label="Marketing Job" value='Marketing '/>
              <Picker.Item label="Advertising and PR Jobs" value='Advertising and PR '/>
              <Picker.Item label="Educational Jobs" value='Educational '/>
              <Picker.Item label="Custome Service Jobs" value='Custome Service'/>
              <Picker.Item label="Sales Jobs" value='Sales '/>
              <Picker.Item label="IT and Networking Jobs" value='IT and Networking'/>
              <Picker.Item label="Hotel and Tourism Jobs" value='Hotel and Tourism'/>
              <Picker.Item label="Clerical and Administration Jobs" value='Clerical and Administration '/>

              <Picker.Item label="Human Recources " value='Human Recources' />
              <Picker.Item label="Accounting and Finance Jobs" value='Accounting and Finance' />
              <Picker.Item label="Manufacturing Jobs" value='Manufacturing' />
              <Picker.Item label="Medical Jobs" value='Medical' />
              <Picker.Item label="Domestic Staff Jobs" value='Domestic Staff ' />
              <Picker.Item label="Part time jobs" value='Part time' />
              <Picker.Item label="Other Jobs" value='Other' />
              
              
            
              

              </Picker>
              </View>
             

              <Text style={{ textAlign:'center',color:'red' }}>{this.state.job_type_error}</Text>

            
              </View>
              
              
              :null}

              {this.props.route.params.category == 'laptop'?
              <View style={{ marginLeft:10 }}>
              <Text style={{ marginTop:20 }}>Company*</Text>

              <View style={{ borderWidth:1,borderColor:this.state.laptop_company_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
              <Picker

              selectedValue={this.state.laptop_company}
              onValueChange={(val)=>{this.setState({laptop_company:val})}}

              mode="dropdown">
              <Picker.Item label="Company" value='' />

              <Picker.Item label="Lenovo" value='Lenovo' />
              <Picker.Item label="Dell" value='Dell'/>
              <Picker.Item label="Acer" value='Acer'/>
              <Picker.Item label="Asus" value='Asus'/>
              <Picker.Item label="MSI" value='MSI'/>
              <Picker.Item label="HP" value='HP'/>
              <Picker.Item label="Samsung" value='Samsung'/>
              <Picker.Item label="Macbooks" value='Macbooks'/>
              <Picker.Item label="Other" value='Other'/>

              
              
            
              

              </Picker>
              </View>
             

              <Text style={{ textAlign:'center',color:'red' }}>{this.state.laptop_company_error}</Text>

            
              </View>
              
              :null}





                {this.props.route.params.category == 'Camera'?
                 <View style={{ marginLeft:10 }}>
                 <Text style={{ marginTop:20 }}>Type*</Text>
 
                 <View style={{ borderWidth:1,borderColor:this.state.camera_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                 <Picker
 
                 selectedValue={this.state.camera_type}
                 onValueChange={(val)=>{this.setState({camera_type:val})}}
 
                 mode="dropdown">
                 <Picker.Item label="Type" value='' />
 
                 <Picker.Item label="Camera" value='Camera' />
                 <Picker.Item label="Camera Lenses" value='Camera Lenses' />

                 <Picker.Item label="other Accessories" value='Other Camera Accessories'/>
 
                 
                 
               
                 
 
                 </Picker>
                 </View>
                
 
                 <Text style={{ textAlign:'center',color:'red' }}>{this.state.camera_type_error}</Text>
 
               
                 </View>
                :null}

            

                {this.props.route.params.category == 'animals'?
                <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Type*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.animals_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.animals_type}
                onValueChange={(val)=>{this.setState({animals_type:val})}}

                mode="dropdown">
                <Picker.Item label="Type" value='' />

                <Picker.Item label="Fish and Aquariums" value='Fish and Aquariums' />
                <Picker.Item label="Birds" value='Birds'/>

                <Picker.Item label="Hens and Aseel" value='Hens and Aseel'/>

                <Picker.Item label="Cats" value='Cats'/>

                <Picker.Item label="Dogs" value='Dogs'/>

                <Picker.Item label="Lives Stock" value='Lives Stock'/>
                
                <Picker.Item label="Horses" value='Horses'/>
                <Picker.Item label="Pet Food and Accessoried" value='Pet Food and Accessoried'/>
                <Picker.Item label="Other Animals" value='Other'/>

              
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.animals_type_error}</Text>

              
                </View>
                :null}
                {this.props.route.params.category == 'Computers'?
                <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Type*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.compute_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.compute_type}
                onValueChange={(val)=>{this.setState({compute_type:val})}}

                mode="dropdown">
                <Picker.Item label="Type" value='' />

                <Picker.Item label="Computers" value='Computers' />
                <Picker.Item label="Hard Disk" value='Hard Disk'/>

                <Picker.Item label="Internet" value='Internet'/>

                <Picker.Item label="Monitors" value='Monitors'/>

                <Picker.Item label="Printers" value='Printers'/>

                <Picker.Item label="Other Accessories" value='Other Computer Accessories'/>
                
              
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.compute_type_error}</Text>

              
                </View>
                :null}

                {this.props.route.params.category == 'cars'? <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Type*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.car_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.car_type}
                onValueChange={(val)=>{this.setState({car_type:val})}}

                mode="dropdown">
                <Picker.Item label="Type" value='' />

                <Picker.Item label="Classic and Antiques" value='Classic and Antiques' />
                <Picker.Item label="Daewoo" value='Daewoo'/>

                <Picker.Item label="Daihatsu" value='Daihatsu'/>

                <Picker.Item label="FAW" value='FAW'/>

                <Picker.Item label="Honda" value='Honda'/>

                <Picker.Item label="Hyundi" value='Hyundi'/>
                <Picker.Item label="Isuzu" value='Isuzu'/>
                <Picker.Item label="JAC" value='JAC'/>
                <Picker.Item label="KIA" value='KIA'/>
                <Picker.Item label="Land Rover" value='Land Rover'/>
                <Picker.Item label="Lexus" value='Lexus'/>
                <Picker.Item label="Mazda" value='Mazda'/>
                <Picker.Item label="Mercedes" value='Mercedes'/>
                <Picker.Item label="Mercedes" value='Mercedes'/>
                <Picker.Item label="Mitsubishi" value='Mitsubishi'/>
                <Picker.Item label="Nissan" value='Nissan'/>
                <Picker.Item label="Proton" value='Proton'/>
                <Picker.Item label="Prince" value='Prince'/>
                <Picker.Item label="Renault" value='Renault'/>
                <Picker.Item label="Suzuki" value='Suzuki'/>
                <Picker.Item label="Toyota" value='Toyota'/>
     
                <Picker.Item label="United" value='United'/>
                <Picker.Item label="Chevrolet" value='Chevrolet'/>

                <Picker.Item label="Audi" value='Audi'/>
                <Picker.Item label="BMW" value='BMW'/>
                <Picker.Item label="Changan" value='Changan'/>
                <Picker.Item label="Other Brands" value='Other Brands'/>
              
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.car_type_error}</Text>

              
                </View>
    :null}




{this.props.route.params.category == 'cars'? <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Fuel*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.car_fuel_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.car_fuel_type}
                onValueChange={(val)=>{this.setState({car_fuel_type:val})}}

                mode="dropdown">
                <Picker.Item label="Fuel" value='' />

                <Picker.Item label="CNG" value='CNG' />
                <Picker.Item label="Deisel" value='Deisel'/>

                <Picker.Item label="Hybrid" value='Hybrid'/>

                <Picker.Item label="LPG" value='LPG'/>

                <Picker.Item label="Petrol" value='Petrol'/>

                
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.car_fuel_type_error}</Text>

              
                </View>
    :null}




{this.props.route.params.category == 'Car Spare Parts'?<View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Type*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.spare_parts_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.spare_parts_type}
                onValueChange={(val)=>{this.setState({spare_parts_type:val})}}

                mode="dropdown">
                <Picker.Item label="Type" value='' />

                <Picker.Item label="CARS-SPARE-PARTS" value='CARS-SPARE-PARTS' />
                <Picker.Item label="OTHER-SPARE-PARTS" value='OTHER-SPARE-PARTS'/>

               
             
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.spare_parts_type_error}</Text>

              
                </View>:null}

            {this.props.route.params.category == 'fashion'?
            <View style={{ marginLeft:10 }}>
            <Text style={{ marginTop:20 }}>Type*</Text>

            <View style={{ borderWidth:1,borderColor:this.state.fashion_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
            <Picker

            selectedValue={this.state.fashion_type}
            onValueChange={(val)=>{this.setState({fashion_type:val})}}

            mode="dropdown">
            <Picker.Item label="Type" value='' />

            <Picker.Item label="Clothes" value='Clothes' />
            <Picker.Item label="FootWear" value='FootWear'/>

            <Picker.Item label="Jewellery" value='Jewellery'/>

            <Picker.Item label="Make Up" value='Make Up'/>

            <Picker.Item label="Skin and Hair" value='Skin and Hair'/>
            <Picker.Item label="Watches" value='Watches'/>
            <Picker.Item label="Wedding" value='Wedding'/>
            <Picker.Item label="Lawn and Pret" value='Lawn and Pret'/>
            <Picker.Item label="Wedding" value='Wedding'/>
            <Picker.Item label="Other Fashion" value='Other Fashion'/>

           
         
            

            </Picker>
            </View>
           

            <Text style={{ textAlign:'center',color:'red' }}>{this.state.fashion_type_error}</Text>

          
            </View>
            
            
            :null}

            {this.props.route.params.category == 'Bikes and MotorCycles'? <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Type*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.bike_type_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.bike_type}
                onValueChange={(val)=>{this.setState({bike_type:val})}}

                mode="dropdown">
                <Picker.Item label="Type" value='' />

                <Picker.Item label="Crown" value='Crown' />
                <Picker.Item label="Eagle" value='Eagle'/>

                <Picker.Item label="Ghani" value='Ghani'/>

                <Picker.Item label="Habib" value='Habib'/>

                <Picker.Item label="Harley Davidson" value='Harley Davidson'/>
                <Picker.Item label="Honda" value='Honda'/>
                <Picker.Item label="Kawasaki" value='Kawasaki'/>
                <Picker.Item label="Metro" value='Metro'/>
                <Picker.Item label="Power" value='Power'/>
                <Picker.Item label="Ravi" value='Ravi'/>

                <Picker.Item label="Road prince" value='Road prince'/>
                <Picker.Item label="Sohrab" value='Sohrab'/>
                <Picker.Item label="Sports and Havy Bikes" value='Sports and Havy Bikes'/>
                <Picker.Item label="Super Star" value='Super Star'/>
                <Picker.Item label="Suzuki" value='Suzuki'/>
                <Picker.Item label="Unique" value='Unique'/>
                
                <Picker.Item label="United" value='United'/>
                <Picker.Item label="VESPA" value='VESPA'/>
                <Picker.Item label="Yamaha" value='Yamaha'/>
                <Picker.Item label="Other Brand" value='Other Brand'/>
             
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.bike_type_error}</Text>

              
                </View>
    :null}

            {this.props.route.params.category == 'property_for_sell'?
            <View style={{ marginLeft:10 }}>
            <Text style={{ marginTop:20 }}>Type*</Text>

            <View style={{ borderWidth:1,borderColor:this.state.property_for_sell_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
            <Picker

            selectedValue={this.state.property_for_sell}
            onValueChange={(val)=>{this.setState({property_for_sell:val})}}

            mode="dropdown">
            <Picker.Item label="Type" value='' />

            <Picker.Item label="Land and Plots" value='Land and Plots for sell' />
            <Picker.Item label="Houses" value='Houses for sell'/>

            <Picker.Item label="Apartments and Flats" value='Apartments and Flats for sell'/>

            <Picker.Item label="Shop-Offices-Commertial Spaces" value='Shop-Offices-Commertial Spaces for sell'/>

            <Picker.Item label="Portion and floors" value='Portion and floors for sell'/>
            

           
         
            

            </Picker>
            </View>
           

            <Text style={{ textAlign:'center',color:'red' }}>{this.state.property_for_sell_error}</Text>

          
            </View>
            :null}



            {this.props.route.params.category == 'property_for_rent'?
            
            <View style={{ marginLeft:10 }}>
            <Text style={{ marginTop:20 }}>Type*</Text>

            <View style={{ borderWidth:1,borderColor:this.state.property_rent_error?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
            <Picker

            selectedValue={this.state.property_for_rent}
            onValueChange={(val)=>{this.setState({property_for_rent:val})}}

            mode="dropdown">
            <Picker.Item label="Type" value='' />

            <Picker.Item label="Land and Plots" value='Land and Plots for rent' />
            <Picker.Item label="Houses" value='Houses for rent'/>

            <Picker.Item label="Apartments and Flats" value='Apartments and Flats for rent'/>

            <Picker.Item label="Shop-Offices-Commertial Spaces" value='Shop-Offices-Commertial Spaces for rent'/>

            <Picker.Item label="Portion and floors" value='Portion and floors for rent'/>
            

            <Picker.Item label="Roomates and Paying Guests" value='Roomates and Paying Guests for rent'/>
            <Picker.Item label="Rooms" value='Rooms for rent'/>
            <Picker.Item label="Vocation Rentals-Guest Houses" value='Vocation Rentals-Guest Houses for rent'/>

           
         
            

            </Picker>
            </View>
           

            <Text style={{ textAlign:'center',color:'red' }}>{this.state.property_rent_error}</Text>

          
            </View>
            
            :null}

                <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Add title*</Text>

                <TextInput  placeholder='' value={this.state.title}  onChangeText={(val)=>this.setState({title:val})} 
                style={{ borderWidth:1,borderColor:this.state.title_error_state?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,padding:5,marginTop:10 }}
                />
                <Text style={{ textAlign:'center',color:'red' }}>{this.state.title_error_state}</Text>

                </View>


                <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Describe Whar you are selling*</Text>

                <TextInput multiline = {true}
            numberOfLines = {2} placeholder='' value={this.state.description} onChangeText={(val)=>this.setState({description:val})} 
             style={{ borderWidth:1,borderColor:this.state.description_error_state?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,padding:5,marginTop:10 }}
             />
                    <Text style={{ textAlign:'center',color:'red' }}>{this.state.description_error_state}</Text>

            </View>


            <View style={{ marginLeft:10 }}>
                <Text style={{ marginTop:20 }}>Location*</Text>

                <View style={{ borderWidth:1,borderColor:this.state.location_error_state?'red':'black',borderRadius:5,width:Dimensions.get('window').width*2/2.2,marginTop:10, }}>
                <Picker

                selectedValue={this.state.location}
                onValueChange={(val)=>{this.setState({location:val})}}

                mode="dropdown">
                <Picker.Item label="Location" value='' />

                <Picker.Item label="Badakhshan" value='Badakhshan' />
                <Picker.Item label="Badghis" value='Badghis'/>

                <Picker.Item label="Baghlan" value='Baghlan'/>

                <Picker.Item label="Balkh" value='Balkh'/>

                <Picker.Item label="Bamyan" value='Bamyan'/>

                <Picker.Item label="Daykundi" value='Daykundi'/>
                <Picker.Item label="Farah" value='Farah'/>
                <Picker.Item label="Faryab" value='Faryab'/>
                <Picker.Item label="Ghazni" value='Ghazni'/>
                <Picker.Item label="Ghor" value='Ghor'/>
                <Picker.Item label="Helmand" value='Helmand'/>
                <Picker.Item label="Herat" value='Herat'/>
                <Picker.Item label="Jowzjan" value='Jowzjan'/>
                <Picker.Item label="Kabul" value='Kabul'/>
                <Picker.Item label="Kandahar" value='Kandahar'/>
                <Picker.Item label="Kapisa" value='Kapisa'/>
                <Picker.Item label="Khost" value='Khost'/>
                <Picker.Item label="Kunar" value='Kunar'/>
                <Picker.Item label="Kunduz" value='Kunduz'/>
                <Picker.Item label="Laghman" value='Laghman'/>
                <Picker.Item label="Logar" value='Logar'/>
                <Picker.Item label="Nangarhar" value='Nangarhar'/>
                <Picker.Item label="Nimruz" value='Nimruz'/>
                <Picker.Item label="Nuristan" value='Nuristan'/>

                <Picker.Item label="Paktia" value='Paktia'/>
                <Picker.Item label="Paktika" value='Paktika'/>
                <Picker.Item label="Panjshir" value='Panjshir'/>
                <Picker.Item label="Parwan" value='Parwan'/>
                <Picker.Item label="Samangan" value='Samangan'/>
                <Picker.Item label="Sar-e Pol" value='Sar-e Pol'/>



                <Picker.Item label="Takhar" value='Takhar'/>
                <Picker.Item label="Uruzgan" value='Uruzgan'/>
                <Picker.Item label="Maidan Wardak" value='Maidan Wardak'/>
                <Picker.Item label="Zabul" value='Zabul'/>
                

                </Picker>
                </View>
               

                <Text style={{ textAlign:'center',color:'red' }}>{this.state.location_error_state}</Text>

              
                </View>


                <TouchableOpacity style={[styles.buttons,{marginTop:30}]} onPress={this.insert_product}>
                  
                  <Text style={{ color:'white',fontSize:16,fontWeight:'bold', }}>Sell</Text>
              </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    flex:1,
},
buttons:{
    borderWidth:1,
    borderColor:'#6E6EB4',
    padding:10,
    width:Dimensions.get('window').width*2/2.2,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5 ,
    marginLeft:10,
    backgroundColor:'#6E6EB4',
    marginBottom:40
  
},

centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
openButton: {
  backgroundColor: '#F194FF',
  borderRadius: 20,
  padding: 10,
  elevation: 2,
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize:16,
},
})

export default Sell