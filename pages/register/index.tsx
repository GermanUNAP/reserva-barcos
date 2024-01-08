import React, { useState, useEffect } from 'react';
import { Image, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';
import Button from '../../componnents/button'; 
import SelectDropdown from 'react-native-select-dropdown';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../services/FirebaseConfig';
import Toast from 'react-native-root-toast';


const Register = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [ruc, setRuc] = useState('');

  const accounts = ["Empresa", "Turista"];
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const fieldsCompleted =
      nombre !== '' &&
      email !== '' &&
      password !== '' &&
      isChecked !== false &&
      password.length > 5;

    setIsButtonDisabled(!fieldsCompleted);
  }, [nombre, email, ciudad, year, month, day, password, isChecked]);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleRegistration = async () => {
    setIsButtonDisabled(true);
    
    const data = {
      name: nombre,
      email: email,
      city: ciudad,
      year: year,
      month: month,
      day: day,
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/perdido-b3776.appspot.com/o/users%2FuserPhoto.png?alt=media&token=07db58af-e762-4a72-8102-f801b9658106',
      uid: '',
      accountType: accountType,
    };
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, password);
  
      if (userCredential) {
        data.uid = userCredential.user.uid;
        await FIRESTORE_DB.collection("usuarios").doc(userCredential.user.uid).set(data);
  
        console.log('Usuario registrado exitosamente');
        Toast.show('Se creó la cuenta correctamente', {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
        });

        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Error durante el registro:', error.message);
  
      if (error.code === 'auth/email-already-in-use') {
        Toast.show('Este correo electrónico ya ha sido utilizado. Por favor, inicia sesión o utiliza otro correo.', {
          position: Toast.positions.TOP,
          duration: Toast.durations.LONG,
          shadow: true,
          animation: true,
          hideOnPress: true,
        });
      } else if (error.code === 'auth/invalid-email') {
        Toast.show('El correo electrónico proporcionado no es válido. Por favor, verifica la dirección de correo electrónico.', {
          position: Toast.positions.TOP,
          duration: Toast.durations.LONG,
          shadow: true,
          animation: true,
          hideOnPress: true,
        });
      } else {
        // Otro tipo de error
        Toast.show('Ocurrió un error al crear la cuenta. Por favor, inténtalo nuevamente.', {
          position: Toast.positions.TOP,
          duration: Toast.durations.LONG,
          shadow: true,
          animation: true,
          hideOnPress: true,
        });
      }
    }
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
            placeholder="Pepito Suarez"
            onChangeText={(text) => setNombre(text)}
            value={nombre}
          />

          <Text style={styles.subtitle}>Correo electrónico: </Text>
          <TextInput
            style={styles.input}
            placeholder="lancha@driver.com"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.subtitle}>Tipo de cuenta:</Text>
          <SelectDropdown
            data={accounts}
            onSelect={(selectedItem, index) => setAccountType(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            defaultButtonText="Selecciona un tipo"
            buttonStyle={{
              alignSelf: 'center',
              borderRadius: 4,
              height: 32,
              width: 160,
              backgroundColor: 'lightgray',
            }}
            buttonTextStyle={{
              fontSize: 14,
            }}
            rowStyle={{
              height: 30,
            }}
            rowTextStyle={{
              fontSize: 14,
            }}
          />

          {accountType === 'Empresa' ? (
            <>
              <Text style={styles.subtitle}>Ingrese su RUC: </Text>
              <TextInput
                style={styles.input}
                placeholder="20428729201 "
                onChangeText={(text) => setRuc(text)}
                value={ruc}
                keyboardType="numeric"
                autoCapitalize="none"
              />
            </>
          ) : (
            <>
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
                  onChangeText={(text) => setMonth(text)}
                  value={month}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.dateInput}
                  placeholder="Día"
                  onChangeText={(text) => setDay(text)}
                  value={day}
                  keyboardType="numeric"
                />
              </View>
            </>
          )}

          <Text style={styles.subtitle}>Ingrese su contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="*********"
            placeholderTextColor="#fff"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />  
          <CheckBox
            title="Acepto los términos y condiciones" 
            checked={isChecked}
            onPress={handleCheckboxChange}
          />
          <Button
            text="Registrarme"
            onPress={() => handleRegistration()}
            disabled={isButtonDisabled}
            style={{ opacity: isButtonDisabled ? 0.65 : 1, marginBottom: 20 }}
          />
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Register;
