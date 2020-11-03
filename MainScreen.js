import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";

//Ícones
import Icon from "react-native-vector-icons/Feather";

//Imports de navegação
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Stylesheet
import styles from "./src/styles/MainScreen";

//-----Conteúdo das abas-----
function homeTab(){
  return null;
}

function settingsTab(){
  return null;
}
//---------------------------

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          //Seta o ícone da Tab Bar
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Configurações":
                iconName = "settings";
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        //Seta as cores dos ícones ativos e inativos
        tabBarOptions={{
          activeTintColor: "#ffc06e",
          inactiveTintColor: "#777",
        }}
      >
        <Tab.Screen name="Home" component={homeTab} />
        <Tab.Screen name="Configurações" component={settingsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
