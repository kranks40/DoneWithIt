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
        

export default function App() {
 

  return (
    <AccountScreen/>


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
    

