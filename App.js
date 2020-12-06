// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
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
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ListingEditScreen from './screens/ListingEditScreen';
import * as ImagePicker from 'expo-image-picker';
import ImageInput from './screens/ImageInput';
import ImageInputList from './components/ImageInputList';
        

export default function App() {
  

  // const requestPermission = async () => {
  //      //Permission.askAsync(Permission.CAMERA_ROLL, Permission.LOCATION);
  //      //result.granted
  //      const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
  //       if (!granted) alert('You need to enable permission to access this feature')
  //   };
  
  //   useEffect(() => {
  //     requestPermission();
  //   }, []);


  // const selectImage = async () => {
  //     try {
  //         const result = await ImagePicker.launchImageLibraryAsync();
  //         if(!result.cancelled);
  //         setImageUri(result.uri)
  //       } catch (error) {
  //         console.log('Error reading an image', error)
  //       }
  // }

  return (
    // <Screen>
    //   <ImageInputList 
    //   imageUris={imageUris} 
    //   onAddImage={handleAdd}
    //   onRemoveImage={handleRemove}
    //   />
    // </Screen>
    


    <ListingEditScreen/>

   // <RegisterScreen />

    //<LoginScreen/>

    //  <Screen>
    //    <AppPicker icon='apps' placeholder='category' /> 
    //   <AppTextInput icon='email' placeholder='email' />
    //  </Screen>
    

     //<ListingsScreen/>
    // <AccountScreen/>


      //<Screen>
      // <ListItem 
      //   title='My title' 
      //  subTitle='My subtitle'
      //   ImageComponent={<Icon name='email'
      //   />}
      //    />
      //</Screen>


     // <MessagesScreen/>

    // <ListingScreen/>

    //  <ViewImageScreen/>
     
      // <WelcomeScreen/>
       

    
  );
}
    

