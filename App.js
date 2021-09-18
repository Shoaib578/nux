import React from 'react';

import RootNavigator from './navigation/Routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import PushNotifications from './services/Push_Notifications'

 class App extends React.Component {
  constructor(props){
    super(props)
    push = new PushNotifications()
    push.define_task()
  }



 

  render(){
    
    return(
     <NavigationContainer>
       <RootNavigator />
     </NavigationContainer>
    )
  }
}

export default App