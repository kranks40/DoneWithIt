import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';
import ListItem from './ListItem';
import AppText from './AppText';

export default function ListingScreen() {
    return (
        <View>
            <Image style={styles.image}
            source={require('../assets/jacket.jpg')}/>

            <View style={styles.details}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>

                <View style={styles.UserItemContainer}>
                    <ListItem
                    image={require('../assets/mosh.jpg')} 
                    title='Oketo Peters'
                    subTitle='5 Listings'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },

    details: {
        padding: 25,
    },

    title: {
        fontWeight: '500',
        fontSize: 24,
    },

    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },

    UserItemContainer: {
        marginVertical: 20,
    },
})
