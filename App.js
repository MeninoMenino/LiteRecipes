import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc06e",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    margin: 6,
    padding: 10,
    width: 300,
    borderRadius: 8,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    margin: 12,
    padding: 10,
    width: 300,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    fontSize: 16,
    color: "#000",
  },
  iconImage: {
    marginBottom: 30,
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
