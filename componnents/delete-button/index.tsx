import React from "react";
import { Pressable, PressableProps, StyleSheet, View, ViewStyle } from "react-native";
import { Feather } from '@expo/vector-icons'; 

interface ButtonProps extends PressableProps {
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  button: {
    width: 24, // Ancho del icono
    height: 24, // Altura del icono
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const DeleteButton = (props: ButtonProps) => {
  return (
    <Pressable style={[styles.button, props.style]} {...props}>
      <Feather name="x-circle" size={24} color={'#60100B'} />
    </Pressable>
  );
};

export default DeleteButton;