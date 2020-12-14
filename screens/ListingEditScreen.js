import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import Screen from '../components/Screen';
import listingApi from '../api/listings';
import useLocation from '../hooks/useLocation';
import SubmitButton from '../components/SubmitButton';
import UploadScreen from './UploadScreen';
import FormField from '../components/FormField';
import Form from '../components/Form';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().required().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select atleast one image'),
});

const categories = [
    {label: 'Furniture', value: 1, backgroundColor: '#fc5c65', icon:'floor-lamp'},
    {label: 'Clothing', value: 2, backgroundColor: 'yellow', icon:'email'},
    {label: 'Electronics', value: 3, backgroundColor: 'green', icon:'cards'},
    {label: 'Camera', value: 4, backgroundColor: 'blue', icon:'camera'},
    {label: 'Cars', value: 5, backgroundColor: 'orange', icon:'car'},
    {label: "Clothing", value: 6, backgroundColor: "#2bcbba", icon: "shoe-heel"},
    {label: "headphones", value: 7, backgroundColor: "#4b7bec", icon: "headphones"},
    {label: "Books", value: 8, backgroundColor: "#a55eea", icon: "book-open-variant"},
    {label: "other", value: 9, backgroundColor: "#778ca3", icon: "application"},

];

const ListingEditScreen = () => {
        
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [ progress, setProgress] = useState(0)


     const handleSubmit = async (listing, { resetForm }) => {
         setProgress(0);
         setUploadVisible(true);
         const result = await listingApi.addListing(
             { ...listing, location },
             (progress) => setProgress(progress)
             );

         if (!result.ok) {
            setUploadVisible(false); 
             return alert('Could not save the listing');
         }
            resetForm();
     };

    return (
        <Screen style={styles.container}>
            <UploadScreen 
            onDone={() => setUploadVisible(false)} 
            progress={progress} 
            visible={uploadVisible} 
            />
        <Form
            initialValues={{ 
                title: '', 
                price: '', 
                description: '',
                category: null, 
                images: [],
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >                  
                        
            <FormImagePicker name='images' />
                <FormField
                    maxLength={255}
                    name='title'
                    placeholder='Title'
                />

            <FormField
                keyboardType='numeric'
                maxLength={8}
                name='price'
                placeholder='Price'
                width={120}
                />
                        
            <AppFormPicker 
                items={categories}
                numberOfColumns={3}
                name='category'
                placeholder='Category'
                PickerItemComponent={CategoryPickerItem}
                width='50%'
                />
                
            <FormField
                maxLength={255}
                multiline
                numberOfLines={3}
                name='description'
                placeholder='Description'
            />
            <SubmitButton title='Post' />                                

        </Form>
        </Screen>
);
}

const styles = StyleSheet.create({
     view__container: {
        padding: 10,
     }
});

export default ListingEditScreen;
