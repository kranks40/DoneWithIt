import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';

import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import SubmitButton from '../components/SubmitButton';
import authApi from '../api/auth';
import FormField from '../components/FormField';
import Form from '../components/Form';
import useAuth from '../auth/useAuth';


  const validationSchema = Yup.object().shape({
      email: Yup.string().required().email().label('Email'),
      password: Yup.string().required().min(6).label('password'),
  });

const LoginScreen = (props) => {  
    const auth = useAuth()
    const [loginFailed, setLoginFailed] = useState(false);
    
    
    const handleSubmit = async ({ email, password }) => {
       const result = await authApi.login(email, password);

       if(!result.ok) return setLoginFailed(true);
       setLoginFailed(false);
       auth.logIn(result.data);
    };

    return (
        <Screen style={styles.login__screen}>
            <Image 
            style={styles.login__image}
            source={require('../assets/logo-red.png')} />

        <Form
            initialValues={{ email: '', password: ''}}
            onSubmit={ handleSubmit }
            validationSchema={validationSchema}
        >
            <ErrorMessage 
            error='Invalid email and/or password.' 
            visible={loginFailed}
            />
            
        <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
        />
        
        <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
        />
                <SubmitButton title='Login' />
            </Form>
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
    
});

export default LoginScreen;
