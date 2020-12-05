import { Formik } from 'formik';
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen';
import * as Yup from 'yup';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import AppButton from '../components/AppButton';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('password'),
});

const RegisterScreen = (props) => {
    return (
        <Screen style={styles.register__screen}>
        <Image 
        style={styles.register__image}
        source={require('../assets/logo-red.png')} />

        <Formik
        initialValues={{ name: '', email: '', password: ''}}
        onSubmit={values => console.log(values)}
         validationSchema={validationSchema}
        >
             {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
                     <AppTextInput {...props}
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='person'
                        onBlur={() => setFieldTouched('name')}
                        onChangeText={handleChange('name')}
                        keyboardType='email-address'
                        name='name'
                        placeholder='Name'
                        textContentType='emailAddress'
                   />
                   { touched.name && <ErrorMessage error={errors.name} /> } 

                   <AppTextInput {...props}
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='email'
                        onBlur={() => setFieldTouched('email')}
                        onChangeText={handleChange('email')}
                        keyboardType='email-address'
                        name='email'
                        placeholder='Email'
                        textContentType='emailAddress'
                   />
                   { touched.email && <ErrorMessage error={errors.email} /> } 
                    <AppTextInput {...props}
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='lock'
                        onBlur={() => setFieldTouched('password')}
                        onChangeText={handleChange('password')}
                        name='password'
                        placeholder='Password'
                        secureTextEntry
                        textContentType='password'
                    />
                    { touched.password && <ErrorMessage error={errors.password} /> } 
                    <AppButton title='Register' onPress={handleSubmit} />
                </>
                )}

        </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    register__screen: {
        padding: 10,
    },


    register__image: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
    
    
})

export default RegisterScreen;

