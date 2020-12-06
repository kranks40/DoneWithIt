import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button, FlatList, TouchableWithoutFeedback  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

const AppPicker = ({
    icon, 
    numberOfColumns = 1,
    placeholder, 
    onSelectItem, 
    selectedItem, 
    items, 
    width = '100%',
    PickerItemComponent = PickerItem, }) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.input__container, {width}]}>
                {icon && (
                <MaterialCommunityIcons 
                name={icon} 
                size={25} 
                color='#115293' 
                />
                )} 
                {selectedItem ? (
                <AppText style={styles.text}>
                    {selectedItem ? selectedItem.label : placeholder}</AppText>
                ) : (
                    <AppText style={styles.placeholder}>{placeholder}</AppText>
                )}

                <MaterialCommunityIcons 
                name='chevron-down'
                size={25} 
                color='#115293' 
                />
            </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item);
                }}
              />
            )}
          />
                </Screen>
            </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    input__container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        marginRight: 10,
      },


      placeholder: {
        color: colors.medium,
        flex: 1,
      },

    
    text: {
        flex: 1,
    }
})

export default AppPicker;





