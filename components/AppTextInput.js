import React from 'react';
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const AppTextInput = ({ icon, ...props }) => {
    return (
        <View style={styles.input__container}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color='#115293' />} 
            <TextInput style={styles.input__text} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    input__container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },

    input__text: {
        fontSize: 18,
        color: '#000100',
        paddingHorizontal: 10,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    
})

export default AppTextInput;





