import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

//Stylesheet
import styles from "../styles/App";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.iconImage}
        />
        <TextInput placeholder="Insira seu e-mail" style={styles.textInput} />
        <TextInput
          placeholder="Insira sua senha"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.props.navigation.navigate("HomeScreen");
          }}
        >
          <Text style={styles.loginButtonText}>Fazer login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
