import React from 'react';
import { Image, Text, View, StatusBar} from 'react-native';

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
            <StatusBar></StatusBar>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/driver.png')}
                />
                <Image
                    style={styles.image1}
                    source={require('../../assets/images/titikaka1.png')}
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
            </View>
        </>
    );
};
export default Principal;