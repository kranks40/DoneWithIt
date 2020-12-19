import * as Notifications from 'expo-notifications'
import * as Permission from 'expo-permissions';
import expoPushTokensApi from "../api/expoPushTokens";

import { useEffect } from 'react';


export default useNotifications = (notificationListener) => {
    useEffect(() => {
       registerForPushNotifications();
    
       if (notificationListener) Notifications.addListener(notificationListener)
     }, []);
    
     const registerForPushNotifications = async () => {
    
       try {
         const permission = await Permission.askAsync(Permission.NOTIFICATIONS);
         if (!permission.granted) return;
     
         const token = await Notifications.getExpoPushTokenAsync();
         expoPushTokensApi.register(token);
       } catch (error) {
         console.log('Error getting a push token', error)
       }
     };
  };
