import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

//Stylesheet
import styles from './src/styles/App'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/icon.png')}
      style={styles.iconImage}
      />
      <TextInput placeholder="Insira seu e-mail" style={styles.textInput} />
      <TextInput
        placeholder="Insira sua senha"
        secureTextEntry={true}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
}