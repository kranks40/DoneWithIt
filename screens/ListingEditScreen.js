import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import AppFormPicker from '../components/AppFormPicker';
import AppTextInput from '../components/AppTextInput';
import CategoryPickerItem from '../components/CategoryPickerItem';
import ErrorMessage from '../components/ErrorMessage';
import FormImagePicker from '../components/FormImagePicker';
import Screen from '../components/Screen';
import useLocation from './hooks/useLocation';

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

const ListingEditScreen = ({ ...props }) => {
    
    const location = useLocation();

    return (
        <Screen style={styles.container}>

        <Formik
            initialValues={{ 
                title: '', 
                price: '', 
                description: '',
                category: null, 
                images: [],
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
             {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                  
                <>                
                    <FormImagePicker name='images' />
                     <AppTextInput {...props}
                        maxLength={255}
                        onBlur={() => setFieldTouched('title')}
                        onChangeText={handleChange('title')}
                        name='title'
                        placeholder='Title'
                   />
                   { touched.title && <ErrorMessage error={errors.title} /> } 

                   <AppTextInput {...props}
                        maxLength={8}
                        onBlur={() => setFieldTouched('price')}
                        onChangeText={handleChange('price')}
                        keyboardType='numeric'
                        name='price'
                        placeholder='Price'
                        width={120}
                        />
                   { touched.price && <ErrorMessage error={errors.price} /> } 

                    
                    <AppFormPicker 
                        items={categories}
                        numberOfColumns={3}
                        name='category'
                        placeholder='Category'
                        PickerItemComponent={CategoryPickerItem}
                        width='50%'
                     />
                     { touched.category && <ErrorMessage error={errors.category} /> }

                    <AppTextInput {...props}
                        maxLength={255}
                        multiline
                        numberOfLines={3}
                        onBlur={() => setFieldTouched('description')}
                        onChangeText={handleChange('description')}
                        name='description'
                        placeholder='Description'
                   />
                    { touched.description && <ErrorMessage error={errors.description} /> }
                    <AppButton title='Post' onPress={handleSubmit} />
                </>                
                )}                   

        </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    // view__container: {
    //      padding: 10,
    // }
});

export default ListingEditScreen;
