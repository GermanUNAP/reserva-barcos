import { Pressable, PressableProps, StyleSheet, Text, ViewStyle } from "react-native";


interface ButtonProps extends PressableProps {
  text?: string;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
    button: {
      width: 300,
      backgroundColor: '#000000', // Cambia el color del fondo a un gris oscuro
      height: 40,
      borderRadius: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 16,
    },
    text: {
      color: '#ffffff',
      fontSize: 16,
      textTransform: "uppercase"
    },
  });
  

const Button = ({ text, style, ...props }: ButtonProps) => {
  return (
    <Pressable style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;