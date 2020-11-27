import React from 'react'
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({ title, image, subTitle, onPress, renderRightActions, IconComponent}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            

        <View style={styles.container}>
             {IconComponent}
        
            {image && <Image style={styles.image} source={image} />}
           
               
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{title}</AppText>
               { subTitle && <AppText style={styles.price}>{subTitle}</AppText>}
            </View>
            
        </View>

        </TouchableHighlight>

        </Swipeable>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
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
    },

    detailContainer: {
        marginLeft: 10,
        justifyContent: "center"
    }



})
