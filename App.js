
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import NavigationTheme from "./navigation/NavigationTheme";

import AppNavigator from './navigation/AppNavigator';
import OfflineNotice from './components/OfflineNotice';


        
export default function App() { 
  return (   
    <>
    <OfflineNotice /> 
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
    </>
  );
  }
    

