import React, { useState, useEffect } from 'react';
import { Image, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'; // Importa TouchableOpacity
import styles from './styles';
import Button from '../../componnents/button'; 


const Login = (props) => {

  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  
  useEffect(() => {
    const fieldsCompleted =
      email !== '' &&
      password !== '' &&
      password.length > 5;
      setIsButtonDisabled(!fieldsCompleted);
  }, [ email, password]);


  const goToback = () => {
    navigation.goBack();
  };
  const goRegister = () =>{
    navigation.navigate('Register');
  };
  const goChangePassword = () =>{
    navigation.navigate('ChangePassword');
  };
  

  return (
    <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.arrowContainer} onPress={()=> goToback()}> 
          <Image source={require('../../assets/icon/arrow-left1.png')} style={styles.arrow} />
        </TouchableOpacity>

        <Text style={styles.subtitle}>Ingrese su correo: </Text>
        <TextInput
          style={styles.input}
          placeholder="ejemplo@lancha.com"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.subtitle}>Ingrese su contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="*********"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

        <Button 
          text="Iniciar Sesión" 
          onPress={() => console.log("Iniciar Sesión")} 
          style={{marginBottom: 12, opacity: isButtonDisabled ? 0.65 : 1} } 
          disabled={isButtonDisabled}
        />
        <TouchableOpacity onPress={goChangePassword}>
          <Text style={styles.register}>Recuperar contraseña</Text>
        </TouchableOpacity>
        <Text style={styles.message}>
          ¿No tiene una cuenta?
        </Text>
        <TouchableOpacity onPress={goRegister}>
          <Text style={styles.register}>Registrarme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
    </>
  );
};

export default Login;