import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';


const AppTextInput = ({ name, icon, width ='100%', ...props }) => {
    return (
        <View style={[styles.input__container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color='#115293' />} 
            <TextInput 
            placeholderTextColor={colors.medium}
            style={defaultStyles.text} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    input__container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },   
})

export default AppTextInput;





