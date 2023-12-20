import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View} from 'react-native';

import styles from './styles';
import Button from '../../componnents/button';


const Principal = (props) => {
    const { navigation } = props;

    const goToPageHome = () => {
        navigation.navigate('Home');
    }
    const goToPageLogin = () => {
        navigation.navigate('Login');
    }

    const goToPageRegister = () => {
        navigation.navigate('Register');
    }


    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/logo.png')}
                />
                <View style={styles.buttonContainer}>
                    <Button
                    text="Iniciar sesión"
                    style={styles.button}
                    onPress={goToPageLogin}
                    />
                    <Button
                    text="Registrarme"
                    style={styles.button}
                    onPress={goToPageRegister}
                    />
                </View>
                <StatusBar style="auto" />
            </View>
        </>
    );
};
export default Principal;