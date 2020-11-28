import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 200,
        image: require('../assets/couch.jpg')
    },
]
  

const ListingsScreen = (props) => {
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) =>
            <Card style={styles.screen__card} title={item.title}
            subTitle={'$' + item.price}
            image={item.image} />
        }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light,
    }
})

export default ListingsScreen
