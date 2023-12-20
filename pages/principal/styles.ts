import { useState,  } from 'react';
import { StyleSheet} from "react-native";



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
        marginBottom: 20,
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
});

export default styles;
