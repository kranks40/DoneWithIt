import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react'
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'

export default function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style ]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
         paddingTop: Constants.statusBarHeight,
         flex: 1,
    },

    view: {
        flex: 1,
    }
});

