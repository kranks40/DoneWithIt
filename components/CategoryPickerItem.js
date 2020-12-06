import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from './AppText'
import Icon from './Icon';

const CategoryPickerItem = ({ onPress, item}) => {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: "center",
    },

    label: {
        marginTop: 10,
        textAlign: "center",
    }
})

export default CategoryPickerItem;
