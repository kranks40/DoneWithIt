import React from 'react'
import { View, ImageBackground, StyleSheet, Button, Image, Text  } from 'react-native'
import AppButton from '../components/AppButton'

export default function WelcomeScreen() {
    return (         
        
    <ImageBackground
        blurRadius={5}
        style={styles.backgound}
        source={require('../assets/background.jpg')}>

        <View style={styles.logo__container}>        
            <Image  style={styles.logo}        
            source={require('../assets/logo-red.png')}></Image>
        
             <Text
              style={styles.text}>See what you don't need</Text>
        </View>       

        <View style={styles.buttonContainer}>
           <AppButton title='Login' />
           <AppButton title='Register' color='secondary' />
        </View>
        
    </ImageBackground>

        
    )
}

const styles = StyleSheet.create({
    backgound: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    buttonContainer: {
        paddingVertical: 20,
        width: '100%',
    },

    logo__container: {
        position: "absolute",
        top: 50,
        alignItems: "center",
    },

    logo: {
        width: 100,
        height: 100, 
    },

    text: {
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 20,
    },

})
