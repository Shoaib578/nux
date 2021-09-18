import React from 'react'

import { createStackNavigator ,CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome5,Ionicons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'


//Auth

import SplashScreen from '../Screens/splashScreen'
import GetStart from '../Screens/Auth/GetStart'
import EnterYourEmail from '../Screens/Auth/EnterYourEmail'
import EnterVerificationCode from '../Screens/Auth/EnterVerificationCode'
import CreateYourPassword from '../Screens/Auth/CreateYourPassword'
import EnterYourPhoneNumber from '../Screens/Auth/EnterYourPhoneNumber'
import LoginWithFacebook from '../Screens/Auth/LoginWithFacebook'
import LoginWithGoogle from '../Screens/Auth/LoginWithGoogle'
import PhoneNumberPassword from '../Screens/Auth/phone_no_password'
import CreateYourPasswordPhoneNo from '../Screens/Auth/CreateYourPasswordPhoneNo'

//Main Screens

import Home from '../Screens/Main/Home'
import Account from '../Screens/Main/Account'
import Sell from '../Screens/Main/Sell'
import MyAdds from '../Screens/Main/MyAdds'
import Chats from '../Screens/Main/Chats'
import View_or_Edit_Profile from '../Screens/Main/View_or_Edit_Profile'
import Whatareyouoffering from '../Screens/Main/Whatareyouoffering'
import ViewProduct from '../Screens/Main/ViewProduct'
import SeeAnotherUserProfile from '../Screens/Main/SeeAnotherUserProfile'
import RecentChats from '../Screens/Main/RecentChats'
import SetLocationForSearch from '../Screens/Main/SetLocationForSearch'
import QuickSearchCategories from '../Screens/Main/QuickSearchCategories'
import QuickSearch from '../Screens/Main/QuickSearch'
import Filters from '../Screens/Main/filters'
import FiltersCategory from '../Screens/Main/FiltersCategory'
import Notifications from '../Screens/Main/Notifications'
import Settings from '../Screens/Main/Settings'
import Help_and_Support from '../Screens/Main/Help_and_support'
import SeeAllCategories from '../Screens/Main/SeeAllCategories'
import MobileCategories from '../Screens/Main/MobileCategories'
import MobileCategoriesForSell from '../Screens/Main/sell_nested_categories/MobileCategoriesForSell'

import CreateNewPassword from '../Screens/Main/CreateNewPassword'
import Privacy from '../Screens/Main/Privacy'


//Privacy Policy
import Main from '../Screens/Main/Privacy_Policy/main';
import WhoAreWe from '../Screens/Main/Privacy_Policy/who_are_we';
import WhatDataWeCollect from '../Screens/Main/Privacy_Policy/what_data';
import WhyArePersonalInfo from '../Screens/Main/Privacy_Policy/why_are_personal'
import ChangesInOurPrivacy from '../Screens/Main/Privacy_Policy/changes_in_our_privacy'
import Giveyouright from '../Screens/Main/Privacy_Policy/give_you_right'
import NewsandCommunication from '../Screens/Main/Privacy_Policy/new_and_communication'
import YourActivityData from '../Screens/Main/Privacy_Policy/your_activity_data'
import LinkToThirdParty from '../Screens/Main/Privacy_Policy/link_to_third_party'



import SellVehicleCategories from '../Screens/Main/sell_nested_categories/sell_vehicle_categories'
import SellElectronicsCategories from '../Screens/Main/sell_nested_categories/sell_electronins_categories'
import SellBikesCategories from '../Screens/Main/sell_nested_categories/sell_bikes_categories'
import TabletsCategories from '../Screens/Main/sell_nested_categories/tablets_categories'

//search_categories
import MobileCategoriesForSearch from '../Screens/Main/search_nested_categories/MobileCategoriesForSearch'
import SearchVehicleCategories from '../Screens/Main/search_nested_categories/search_vehicle_categories'
import SearchPropertyForSell from '../Screens/Main/search_nested_categories/search_property_for_sell'
import SearchPropertyForRent from '../Screens/Main/search_nested_categories/search_property_for_rent'
import SearchElectronicsCategories from '../Screens/Main/search_nested_categories/search_electronins_categories'
import SearchBikesCategories from '../Screens/Main/search_nested_categories/search_bikes_categories'
import SearchServicesCategories from '../Screens/Main/search_nested_categories/search_services_categories'
import SearchBusinessCategories from '../Screens/Main/search_nested_categories/search_business_categories'
import SearchFashionAndBeautyCategories from '../Screens/Main/search_nested_categories/search_fashion_and_beauty_categories'
import SearchBooksCategories from '../Screens/Main/search_nested_categories/search_books_categories'
import SearchKidsProductsCategories from '../Screens/Main/search_nested_categories/search_kids_products_categories'
import SearchJobsCategories from '../Screens/Main/search_nested_categories/search_jobs_categories'
import SearchAnimalsCategories from '../Screens/Main/search_nested_categories/search_animals_categories'
import SearchFurnituresCategories from '../Screens/Main/search_nested_categories/search_furnitures_categories'
import SearchMobilePhoneCategories from '../Screens/Main/search_nested_categories/search_mobile_phone_categories'
import SearchTabletsCategories from '../Screens/Main/search_nested_categories/search_tablets_categories'
import SearchTvVideoAndAudioCategory from '../Screens/Main/search_nested_categories/search_tv_video_and_audio_category'
import SearchCarSparePartsCategories from '../Screens/Main/search_nested_categories/search_car_spare_parts_categories'
import SearchCameraAccessoriesCategories from '../Screens/Main/search_nested_categories/search_camera_accessories_categories'
import SearchComputerAndAccessories from  '../Screens/Main/search_nested_categories/search_computer_and_other_accessories'
import SearchLaptopCategories from '../Screens/Main/search_nested_categories/search_laptops_catregories';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function  RootNavigator (){


    return(
     
    <Stack.Navigator initialRouteName="splashscreen"  screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
    <Stack.Screen name='splashscreen' component={SplashNavigator} options={{headerShown:false}}/>
    <Stack.Screen name='auth' component={AuthNavigator} options={{headerShown:false}}/>
    <Stack.Screen name='home' component={HomeNavigator} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
    }




  const HomesStackScreens = ()=>(
      <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
          <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='Product' component={ViewProduct}/>
        <Stack.Screen name='SeeAnotherUserProfile' component={SeeAnotherUserProfile} options={{headerTitle:'Profile'}}/>
        <Stack.Screen name='SetLocationForSearch' component={SetLocationForSearch} options={{headerTitle:'Locations'}}/>
        <Stack.Screen name='QuickSearchCategories' component={QuickSearchCategories} options={{headerTitle:'Quick Search'}}/>
        <Stack.Screen name='QuickSearch' component={QuickSearch} />
        <Stack.Screen name='See All Categories' component={SeeAllCategories} />
        <Stack.Screen name='Mobile Categories' component={MobileCategories} />
      
        <Stack.Screen name='Filters' component={Filters} />
        <Stack.Screen name='FiltersCategory' component={FiltersCategory} options={{headerTitle:'Category'}} />
        <Stack.Screen name='Notifications' component={Notifications} />
   
        <Stack.Screen name='Chats' component={Chats} />


        {/* nested_search */}

    <Stack.Screen name='Mobile Categories For Search' component={MobileCategoriesForSearch} options={{headerTitle:'Mobiles'}} />
    <Stack.Screen name='VehicleCategoriesForSearch' component={SearchVehicleCategories} options={{headerTitle:'Vehicles'}} />
    <Stack.Screen name='SearchPropertyForSell' component={SearchPropertyForSell} options={{headerTitle:'Property For Sale'}} />
    <Stack.Screen name='SearchPropertyForRent' component={SearchPropertyForRent} options={{headerTitle:'Property For Rents'}} />
    <Stack.Screen name='SearchElectronicsCategories' component={SearchElectronicsCategories} options={{headerTitle:'Electronics'}} />
    <Stack.Screen name='SearchBikesCategories' component={SearchBikesCategories} options={{headerTitle:'Bikes'}} />
    <Stack.Screen name='SearchServicesCategories' component={SearchServicesCategories} options={{headerTitle:'Services'}} />
    <Stack.Screen name='SearchBusinessCategories' component={SearchBusinessCategories} options={{headerTitle:'Business,Industrial and Agriculture'}} />
    <Stack.Screen name='SearchFashionAndBeautyCategories' component={SearchFashionAndBeautyCategories} options={{headerTitle:'Fashion and Beauty'}} />
    <Stack.Screen name='SearchBooksCategories' component={SearchBooksCategories} options={{headerTitle:'Books,Sports and Hobbies'}} />
    <Stack.Screen name='SearchKidsProductsCategories' component={SearchKidsProductsCategories} options={{headerTitle:'Kids'}} />
    <Stack.Screen name='SearchJobsCategories' component={SearchJobsCategories} options={{headerTitle:'Jobs'}} />
    <Stack.Screen name='SearchAnimalsCategories' component={SearchAnimalsCategories} options={{headerTitle:'Animals'}} />
    <Stack.Screen name='SearchFurnituresCategories' component={SearchFurnituresCategories} options={{headerTitle:'Furniture and Home Decor'}} />
    <Stack.Screen name='SearchMobilePhoneCategories' component={SearchMobilePhoneCategories} options={{headerTitle:'Mobiles'}} />
    <Stack.Screen name='SearchTabletsCategories' component={SearchTabletsCategories} options={{headerTitle:'Tablets'}} />
    <Stack.Screen name='SearchTvVideoAndAudioCategory' component={SearchTvVideoAndAudioCategory} options={{headerTitle:'TV-VIDEO-AUDIO'}} />
    <Stack.Screen name='SearchCarSparePartsCategories' component={SearchCarSparePartsCategories} options={{headerTitle:'Spare Parts'}} />
    <Stack.Screen name='SearchCameraAccessoriesCategories' component={SearchCameraAccessoriesCategories} options={{headerTitle:'Camera Accessories'}} />
    <Stack.Screen name='SearchComputerAndAccessories' component={SearchComputerAndAccessories} options={{headerTitle:'Computer and Accessories'}} />
    <Stack.Screen name='SearchLaptopCategories' component={SearchLaptopCategories} options={{headerTitle:'Laptops'}} />

    

      </Stack.Navigator>
  )
  
  
  const AccountStackScreens = ()=>(
    <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
    <Stack.Screen name='Account' component={Account}/>
    <Stack.Screen name='View_or_Edit_Profile' component={View_or_Edit_Profile} options={{headerTitle:'Basic Information'}}/>
    <Stack.Screen name='Settings' component={Settings} />
    <Stack.Screen name='Help and Support' component={Help_and_Support} />
    <Stack.Screen name='Privacy' component={Privacy} />
   

    <Stack.Screen name='CreateNewPassword' component={CreateNewPassword} />

    </Stack.Navigator>
  )


  const SellStackScreens = ()=>(
    <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
    <Stack.Screen name='What are you offering' component={Whatareyouoffering}/>
    <Stack.Screen name='Sell' component={Sell}/>
    <Stack.Screen name='Mobile Categories For Sell' component={MobileCategoriesForSell} options={{headerTitle:'Mobiles'}} />
    <Stack.Screen name='VehicleCategoriesForSell' component={SellVehicleCategories} options={{headerTitle:'Vehicles'}} />
    <Stack.Screen name='SellElectronicsCategories' component={SellElectronicsCategories} options={{headerTitle:'Electronics'}} />
    <Stack.Screen name='SellBikesCategories' component={SellBikesCategories} options={{headerTitle:'Bikes'}} />
    <Stack.Screen name='TabletsCategories' component={TabletsCategories} options={{headerTitle:'Tablets'}} />
  
       
    </Stack.Navigator>
  )



  const MyAdsStackScreens = ()=>(
    <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
    <Stack.Screen name='MyAds' component={MyAdds}/>
    <Stack.Screen name='Product' component={ViewProduct}/>
    <Stack.Screen name='SeeAnotherUserProfile' component={SeeAnotherUserProfile} options={{headerTitle:'Profile'}}/>
    <Stack.Screen name='Chats' component={Chats} />

    </Stack.Navigator>
  )



  const ChatsStackScreens = ()=>(
    <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
    <Stack.Screen name='RecentChats' component={RecentChats} options={{headerTitle:'Chat'}}/>

    <Stack.Screen name='Chats' component={Chats} options={{headerTitle:'Chat'}}/>
    </Stack.Navigator>
  )

  
   
   
   const HomeNavigator = ()=>(
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{ 
          keyboardHidesTabBar:true,
          labelStyle: {  fontSize:12,fontWeight:'bold'},
         
         }}>
            <Tab.Screen name='Home' component={HomesStackScreens} options={{tabBarIcon:()=><FontAwesome5 name='home' color='black' size={25}/>,}}/>
            <Tab.Screen name='CHATS' component={ChatsStackScreens} options={{tabBarIcon:()=><Ionicons name='chatbox-ellipses' color='black'  size={25}/>,}}/>
            <Tab.Screen name='SELL' component={SellStackScreens} options={{tabBarIcon:()=><Ionicons  name='add-circle-outline' color='#1A1AFF'  size={30}   />}}/>
            <Tab.Screen name='MY ADS' component={MyAdsStackScreens} options={{tabBarIcon:()=><AntDesign name='heart' size={25}/>,}}/>
            <Tab.Screen name='ACCOUNT' component={AccountStackScreens} options={{tabBarIcon:()=><MaterialCommunityIcons name='account' size={28}/>,}}/>

        </Tab.Navigator>
    )




    const AuthNavigator = ()=>(
        <Stack.Navigator initialRouteName="signin" screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
            <Stack.Screen name='GetStart' component={GetStart} options={{headerShown:false}}/>
            <Stack.Screen name='EnterYourEmail' component={EnterYourEmail} options={{headerStyle:{backgroundColor:'#229dd0'},headerTitle:'Login' }}/>
            <Stack.Screen name='EnterYourPhoneNumber' component={EnterYourPhoneNumber} options={{headerStyle:{backgroundColor:'#229dd0'},headerTitle:'Login' }}/>

            <Stack.Screen name='EnterVerificationCode' component={EnterVerificationCode} options={{headerStyle:{backgroundColor:'#229dd0'},headerTitle:'Enter  verification Code' }}/>
            <Stack.Screen name='CreateYourPassword' component={CreateYourPassword} options={{headerStyle:{backgroundColor:'#229dd0'},headerTitle:'Give Us Your Informations' }}/>
            <Stack.Screen name='CreateYourPasswordPhone' component={CreateYourPasswordPhoneNo} options={{headerStyle:{backgroundColor:'#229dd0'},headerTitle:'Give Us Your Informations' }}/>

            <Stack.Screen name='LoginWithFacebook' component={LoginWithFacebook} options={{headerStyle:{backgroundColor:'#229dd0'},headerTitle:'Give Us Your Informations' }}/>

            <Stack.Screen name='LoginWithGoogle' component={LoginWithGoogle} options={{headerStyle:{backgroundColor:'#229dd0'},headerTitle:'Give Us Your Informations' }}/>
            <Stack.Screen name='PhoneNumberPassword' component={PhoneNumberPassword} options={{headerStyle:{backgroundColor:'#229dd0'},headerTitle:'Password' }}/>
            


            <Stack.Screen name="Privacy Policy" component={Main} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>
            <Stack.Screen name="Who are we" component={WhoAreWe} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>
            <Stack.Screen name="Why your personal information is processed" component={WhyArePersonalInfo} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>
            <Stack.Screen name="What Data Do We Collect" component={WhatDataWeCollect} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>
            <Stack.Screen name="How will the changes in our privacy statement communicated over to you" component={ChangesInOurPrivacy} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>
            <Stack.Screen name="NUX gives you right to erase your personal data" component={Giveyouright} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>
            <Stack.Screen name="News and Communication" component={NewsandCommunication} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>
            <Stack.Screen name="Your activity data sharing" component={YourActivityData} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>
            <Stack.Screen name="Links to third-party websites" component={LinkToThirdParty} options={{headerStyle:{backgroundColor:'#229dd0'}}}/>

        </Stack.Navigator>
    )


    const SplashNavigator = ()=>(
        <Stack.Navigator initialRouteName="splashscreen" >
            <Stack.Screen name='splashscreen' component={SplashScreen} options={{headerShown:false}}/>

        </Stack.Navigator>
    )
    



