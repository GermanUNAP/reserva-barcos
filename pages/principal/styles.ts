import { useState,  } from 'react';
import { StyleSheet, StatusBar} from "react-native";



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#051650',
        marginTop: StatusBar.currentHeight,
      },
      image: {
        width: 300,
        height: 140,
        marginBottom: 28,
      },
      buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',  // Centra los elementos en el contenedor
      },
      button: {
        marginBottom: 10,
        width: 300,  // Ajusta el ancho según tus necesidades
      },
      image1: {
        width: 200,
        height: 200,
        marginBottom: 28,
      },
});

export default styles;
