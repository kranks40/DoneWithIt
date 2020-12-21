import React from 'react'
import { 
  KeyboardAvoidingView, 
  Platform, 
  StyleSheet, 
  View,
} from 'react-native'
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import ContactSellerForm from '../components/ContactSellerForm';
import ListItem from '../components/ListItem';
import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';



const ListingDetailsScreen = ({ route }) => {
  const { user } = useAuth();
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title={user.name}
            subTitle={user.email}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 30
  },
});

export default ListingDetailsScreen;
