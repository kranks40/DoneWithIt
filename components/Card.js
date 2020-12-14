import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, subTitle, imageUrl, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: imageUrl}}/>

            <View style={styles.details}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },

    image: {
        width: '100%',
        height: 200,
        paddingTop: 20
    },

    details: {
        paddingTop: 20        
    },

    title: {
        marginBottom: 7,
    },

    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
})
