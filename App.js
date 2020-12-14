// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import NavigationTheme from "./navigation/NavigationTheme";

import AppNavigator from './navigation/AppNavigator';
import ListingEditScreen from './screens/ListingEditScreen';


        
export default function App() { 

  
  return (
         <NavigationContainer theme={NavigationTheme}>
            <AppNavigator/>
          </NavigationContainer>

       

      
    );
  }
    

