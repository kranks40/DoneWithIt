import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import AppFormPicker from '../components/AppFormPicker';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().required().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
});

const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Clothing', value: 2},
    {label: 'Electronics', value: 3},
    {label: 'Camera', value: 4},
    {label: 'Tools', value: 5},
];

const ListingEditScreen = (props) => {
    return (
        <Screen style={styles.container}>

        <Formik
            initialValues={{ 
                title: '', 
                price: '', 
                description: '',
                category: null, 
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
             {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
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
                        />
                   { touched.price && <ErrorMessage error={errors.price} /> } 

                    
                    <AppFormPicker 
                        items={categories}
                        name='category'
                        placeholder='Category'
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
    container: {
         padding: 10,
    }
});

export default ListingEditScreen;
