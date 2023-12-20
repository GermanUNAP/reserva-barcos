import React, { useState, useEffect } from 'react';
import { Image, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';
import BlueButton from '../../componnents/button';

var permission = false;

const Register = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para habilitar/deshabilitar el botó
  const [isChecked, setChecked] = useState(false);
  
  useEffect(() => {
    const fieldsCompleted =
      nombre !== '' &&
      email !== '' &&
      ciudad !== '' &&
      year !== '' &&
      month !== '' &&
      day !== '' &&
      password !== '' &&
      isChecked !== false &&
      password.length > 6; // Asegúrate de que la contraseña también esté completa
  
    setIsButtonDisabled(!fieldsCompleted);
  }, [nombre, email, ciudad, year, month, day, password]);




  



  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
 

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/icon/arrow-left1.png')} style={styles.arrow} />
          </TouchableOpacity>
         
          <Text style={styles.subtitle}>Nombre:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            onChangeText={(text) => setNombre(text)}
            value={nombre}
          />

          <Text style={styles.subtitle}>Correo electrónico: </Text>
          <TextInput
            style={styles.input}
            placeholder="ejemplo@perdido.com"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.subtitle}>Fecha de nacimiento (año/mes/dia):</Text>
          <View style={styles.dateRow}>
            <TextInput
              style={styles.dateInput}
              placeholder="Año"
              onChangeText={(text) => setYear(text)}
              value={year}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.dateInput}
              placeholder="Mes"
              value={month}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.dateInput}
              placeholder="Día"
              value={day}
              keyboardType="numeric"
            />
          </View>

          <Text style={styles.subtitle}>Ingrese su contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="*********"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          
          <BlueButton
            text="Registrarme"
            onPress={() => console.log('pressed')}
            disabled={isButtonDisabled}
            style={{ opacity: isButtonDisabled ? 0.65 : 1, marginBottom: 20}}
          />
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Register;
