import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';
import ListItem from './ListItem';
import AppText from './AppText';

export default function ListingDetailsScreen({ route}) {
    const listing = route.params;

    return (
        <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
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
