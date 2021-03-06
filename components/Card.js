import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors'
import AppText from './AppText'

 const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image 
            style={styles.image} 
            tint='light'
            preview={{ uri: thumbnailUrl}} 
            uri={imageUrl} 
            />

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

export default Card;
