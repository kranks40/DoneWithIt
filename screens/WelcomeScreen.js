import React from 'react';
import { View, ImageBackground, StyleSheet, Image  } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import routes from '../navigation/routes';



const WelcomeScreen = ({ navigation }) => {
    return (         
        
    <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require('../assets/background.jpg')}>

        <View style={styles.logo__container}>        
            <Image  style={styles.logo}        
            source={require('../assets/logo-red.png')} />
        
             <AppText
              style={styles.text}>See what you don't need</AppText>
        </View>       

        <View style={styles.buttonContainer}>
           <AppButton 
                title='Login' 
                onPress={() => navigation.navigate(routes.LOGIN)} />
                
           <AppButton 
                title='Register' 
                color='secondary' 
                onPress={() => navigation.navigate(routes.REGISTER)} />
        </View>
        
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    buttonContainer: {
        padding: 20,
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

export default WelcomeScreen;
