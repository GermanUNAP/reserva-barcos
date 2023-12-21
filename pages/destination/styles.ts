
import { useState,  } from 'react';
import { StyleSheet, StatusBar} from "react-native";



const styles = StyleSheet.create({

    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        height: '100%',
    },

    logo:{
        height: 80,
        width: 200,
        marginBottom: 40,
    },
    arrow:{
        marginTop: 16,
        width: 28,
        height: 28,
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    subtitle:{
        fontSize: 16,
        opacity: 0.8,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        fontSize: 16,
        paddingLeft: 12,
        height: 40,
        width: 300,
        borderLeftWidth: 2, // Agrega un borde a la izquierda
        borderBottomWidth: 2, // Agrega un borde abajo
        borderColor: '#000000', // Cambia el color del borde según tus preferencias
        borderRadius: 8, 
        marginBottom: 20,
    },
    arrowContainer: {
        marginLeft: '-55%',
        marginBottom: 60,
        width: 120, // Ancho deseado
        height: 50, // Alto deseado
    },
    message:{
        fontSize: 16,
    },
    register:{
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 20,
    }
});

export default styles;