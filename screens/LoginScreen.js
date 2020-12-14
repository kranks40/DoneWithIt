import React from 'react';
import { StyleSheet, Image } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import SubmitButton from '../components/SubmitButton';

  const validationSchema = Yup.object().shape({
      email: Yup.string().required().email().label('Email'),
      password: Yup.string().required().min(6).label('password'),
  });

const LoginScreen = (props) => {   
    return (
        <Screen style={styles.login__screen}>
            <Image 
            style={styles.login__image}
            source={require('../assets/logo-red.png')} />

            <Formik 
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values)}
                 validationSchema={validationSchema}
            >
                {({ handleChange, errors, setFieldTouched, touched }) => (
                <>
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
                    <SubmitButton title='Login' />
                </>
                )}

            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    login__screen: {
        padding: 10,
    },


    login__image: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
    
})

export default LoginScreen;
