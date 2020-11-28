import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Platform, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native';
import Screen from './Screen';

const AppPicker = ({ icon, placeholder, ...props }) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.input__container}>
                {icon && (
                <MaterialCommunityIcons 
                name={icon} 
                size={25} 
                color='#115293' 
                />
                )} 
                <AppText style={styles.text}>{placeholder}</AppText>
                <MaterialCommunityIcons 
                name='chevron-down'
                size={25} 
                color='#115293' 
                />
            </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)}/>
                </Screen>
            </Modal>
        </React.Fragment>
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
    
    text: {
        flex: 1,
    }
})

export default AppPicker;





