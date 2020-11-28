// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from './components/Icon';
import AppButton from './components/AppButton';
import ListingScreen from './components/ListingScreen';
import Screen from './components/Screen';
import MessagesScreen from './screens/MessagesScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ListItem from './components/ListItem';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './components/AppTextInput';
import switchUp from './config/switchUp';
import { Switch } from 'react-native-gesture-handler';
import AppText from './components/AppText';
import AppPicker from './components/AppPicker';
        

export default function App() {
 

  return (

    <Screen>
      <AppPicker icon='apps' placeholder='category' /> 
      <AppTextInput icon='email' placeholder='email' />
    </Screen>
    

    // <ListingsScreen/>
    // <AccountScreen/>


    // <Screen>
    //   <ListItem 
    //   title='My title' 
    //   // subTitle='My subtitle'
    //   ImageComponent={<Icon name='email'
    //   />}
    //    />
    // </Screen>


    //  <MessagesScreen/>

    // <ListingScreen/>

    //  <ViewImageScreen/>
     
      // <WelcomeScreen/>
       

    
  );
}
    

