import React from 'react'
import { View, Image, StyleSheet, SafeAreaView } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons/";
import colors from '../config/colors';


export default function ViewImageScreen() {
    return (

          <View style={styles.container}>
            
            <Image
                style={styles.image}
                source={require('../assets/chair.jpg')}></Image>

            <View style={styles.buttonleft}>
                 <MaterialCommunityIcons name='close' color='black' size={30}/>
             </View>
             <View style={styles.buttonright}>
                 <MaterialCommunityIcons name='trash-can-outline' color='black' size={30}/>
             </View>

             </View>        
    );
}

const styles = StyleSheet.create({
     container: {  
         backgroundColor: colors.white,      
         flex: 1,
     },

    buttonleft: {      
        position: "absolute",
        top: 40,
        left: 30,
       
    },

    buttonright: {     
        position: "absolute",
        top: 40,
        right: 30,
    },

    image: {
        width: '100%',
        height: '100%'
    },
});
