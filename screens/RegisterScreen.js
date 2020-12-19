
import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen';
import * as Yup from 'yup';

import SubmitButton from '../components/SubmitButton';
import FormField from '../components/FormField';
import Form from '../components/Form';
import useAuth from '../auth/useAuth';
import ActivityIndicator from '../components/ActivityIndicator';
import usersApi from '../api/users';
import authApi from '../api/auth';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('password'),
});

const RegisterScreen = () => {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const [ error, setError ] = useState();
    const auth = useAuth();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError('An unexpected error occurred.');
            }
            return;
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken);
    };


    return (
        <>
        <ActivityIndicator  visible={ registerApi.loading || loginApi.loading }/>
        <Screen style={styles.register__screen}>
        
        <Form
        initialValues={{ name: '', email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
            
        <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='account'
            keyboardType='email-address'
            name='name'
            placeholder='Name'
            textContentType='emailAddress'
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
   
    <SubmitButton title='Register' />
        </Form>
     </Screen>
     </>
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

