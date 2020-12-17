import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { useNetInfo } from '@react-native-community/netinfo';

import AppText from './AppText'
import Constants from 'expo-constants';


const OfflineNotice = () => {
    const netInfo = useNetInfo();

    if(netInfo.type !=='unknown' && netInfo.isInternetReachable === false)
    return (
        
        <View style={styles.container}>
            <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
      
    );

    return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        top: Constants.statusBarHeight,
        height: 50,
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        },

        offLine: {
            paddingHorizontal: 10,
        },

        text: {
            color: colors.white,
        }
})

export default OfflineNotice
