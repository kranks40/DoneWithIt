import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItem = [
    { 
        title: 'My Listings',
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },


    { 
        title: 'My Messages',
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

export default function AccountScreen() {
    return (
       <Screen style={styles.screen}>
           <View style={styles.container}>

           <ListItem 
           title='Oketo Peters'
           subTitle='eng_peters@yahoo.com'
           image={require('../assets/mosh.jpg')}
           />
           </View>
           <View style={styles.data}>
               <FlatList
               data={menuItem}
               keyExtractor={(menuItem) => menuItem.title}
               ItemSeparatorComponent={ListItemSeparator}
               renderItem={({ item}) => (
               <ListItem
               title={item.title}
               IconComponent={
                   <Icon name={item.icon.name}
                   backgroundColor={item.icon.backgroundColor}
                />
               }
              />
            )}
            />

           </View>
               <ListItem
               title='Log Out' 
               IconCompound={<Icon name='logout' backgroundColor='#ffe66d'/>
            } />
       </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },

    screen: {
        backgroundColor: colors.light
    }
})
