import React from 'react'
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

 const ListItem = ({ title, image, subTitle, onPress, renderRightActions, IconComponent}) => {
    return (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>
                {title}
                </AppText>
                {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                    {subTitle}
                </AppText>
                )}
            </View>

            <MaterialCommunityIcons
                color={colors.medium}
                name="chevron-right"
                size={25}
                style={styles.arrow}
            />
            </View>
        </TouchableHighlight>
    </Swipeable>
  
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,

    },

    title: {
        fontWeight: '500',
        // fontSize: 24,
    },

    subTitle: {
        color: colors.medium,
    },

    detailContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },

    arrow: {
       paddingHorizontal: 100,
    }



})

export default ListItem;
