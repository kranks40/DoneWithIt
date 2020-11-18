import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText';

export default function ListItem({ title, image, subTitle }) {
    return (
        <View style={styles.listItem}>
            <Image style={styles.image}
                source={image}/>

            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>{subTitle}</AppText>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },

    title: {
        fontWeight: '500',
        fontSize: 24,
    },

    price: {
        color: colors.medium,
    }

})
