import { useState,  } from 'react';
import { StyleSheet, StatusBar} from "react-native";



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#051650',
        alignItems: 'center',
        height: '100%',
        marginTop: StatusBar.currentHeight,
    },

    logo:{
        height: 80,
        width: 200,
        marginBottom: 8,
    },
    arrow:{
        marginTop: 12,
        width: 28,
        height: 28,
        alignItems: 'flex-start',
    },
    subtitle:{
        fontSize: 16,
        opacity: 0.8,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#ffffff',
    },
    input: {
        fontSize: 16,
        paddingLeft: 12,
        height: 40,
        width: 300,
        borderLeftWidth: 2, 
        borderBottomWidth: 2, 
        borderTopWidth: 2, 
        borderRightWidth: 2, 
        borderColor: '#ffffff', // Cambia el color del borde según tus preferencias
        borderRadius: 6, 
        marginBottom: 8,
        color: '#ffffff',
    },
    arrowContainer: {
        marginLeft: '-55%',
        marginBottom: 20,
        width: 120, // Ancho deseado
        height: 50, // Alto deseado
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateInput: {
        marginHorizontal: 5,
        borderLeftWidth: 2, 
        borderBottomWidth: 2, 
        borderTopWidth: 2, 
        borderRightWidth: 2, 
        borderColor: '#000000', // Cambia el color del borde según tus preferencias
        borderRadius: 4,
        paddingHorizontal: 8,
        width: 80,
    },
});

export default styles;