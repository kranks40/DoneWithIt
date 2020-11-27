import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessage = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },

    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

export default function MessagesScreen() {
    const [ refreshing, setRefreshing ] = useState(false);
    const [ messages, setMessages ] = useState(initialMessage)
    const handleDelete = (message) => {
        // Delete the message from message
        // Delete mesage from server
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages);

    }

    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) => (
            <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image} 
                onPress={() => console.log('Message Selected', item)}
                renderRightActions={() => (
                    <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                    )}
                 />
            )}
                ItemSeperatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        },
                    ])
                }}
            ></FlatList>
        </Screen>
        
    );
}

const styles = StyleSheet.create({
    
})


