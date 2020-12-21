import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

const ListItemSeparator = () => {
    return (
        <View style={styles.separator}></View>
    );
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 10,
        backgroundColor: colors.light,
    },
})

export default ListItemSeparator;
