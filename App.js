// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Icon from './components/Icon';
import AppButton from './components/AppButton';
import ListingScreen from './components/ListingDetailsScreen';
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
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigation from './navigation/AuthNavigation';
import NavigationTheme from './navigation/NavigationTheme';
import AppNavigator from './navigation/AppNavigator';

        
const Tweets = ({ navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title='View Tweet'
    onPress={() => navigation.navigate('TweetDetails')}
    />
  </Screen>
);

const TweetDetails = () => (
<Screen>
  <Text>Tweet Details</Text>
</Screen>

);


const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetDetails} />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Settings = () => (
  <Screen>
    <Text>Settings</Text>
  </Screen>
)
const Favorite = () => (
  <Screen>
    <Text>Favorite</Text>
  </Screen>
)
const Junk = () => (
  <Screen>
    <Text>Junk</Text>
  </Screen>
)
const News = () => (
  <Screen>
    <Text>News</Text>
  </Screen>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor: 'tomato',
    activeTintColor: 'white',
    inactiveBackgroundColor: '#eee',
    inactiveTintColor: 'black',
  }}
  >
    <Tab.Screen 
    name='Feed' 
    component={Tweets}
    options={{
      tabBarIcon: ({ size, color }) => 
      <MaterialCommunityIcons name= 'home' size={size} color={color} />
    }}
     />
    <Tab.Screen 
    name='Account' 
    component={Account} 
    options={{
      tabBarIcon: ({ size, color }) => 
      <MaterialCommunityIcons name= 'account-multiple-plus' size={size} color={color} />
    }}
    />
    <Tab.Screen
     name='Settings' 
     component={Settings} 
     options={{
      tabBarIcon: ({ size, color }) => 
      <MaterialCommunityIcons name= 'settings' size={size} color={color} />
    }}
    />
    <Tab.Screen 
    name='Favorite' 
    component={Favorite} 
    options={{
      tabBarIcon: ({ size, color }) => 
      <MaterialCommunityIcons name= 'star' size={size} color={color} />
    }}
    />
    <Tab.Screen 
    name='Junk' 
    component={Junk} 
    options={{
      tabBarIcon: ({ size, color }) => 
      <MaterialCommunityIcons name= 'delete' size={size} color={color} />
    }}
    />
    <Tab.Screen 
    name='News' 
    component={News}
    options={{
      tabBarIcon: ({ size, color }) => 
      <MaterialCommunityIcons name= 'email-newsletter' size={size} color={color} />
    }}
     />
  </Tab.Navigator>
);

export default function App() { 

  
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>

      {/* <AuthNavigation/> */}
    </NavigationContainer>
    // <Screen>
    //   <ImageInputList 
    //   imageUris={imageUris} 
    //   onAddImage={handleAdd}
    //   onRemoveImage={handleRemove}
    //   />
    // </Screen>
    


    //<ListingEditScreen/>

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
    

