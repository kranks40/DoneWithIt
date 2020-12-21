// import Bugsnag from '@bugsnag/expo';
// Bugsnag.start();


import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import NavigationTheme from "./navigation/NavigationTheme";
import { Apploading }  from 'expo';

import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigation'
import OfflineNotice from './components/OfflineNotice';
import AuthContext from './auth/context';
import authStorage from './auth/storage'
import { navigationRef } from './navigation/rootNavigation';
// import logger from './utility/logger';


        
export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  
  // if (!isReady)
  // return <Apploading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
     

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

