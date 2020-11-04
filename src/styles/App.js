import { StyleSheet } from "react-native";

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
    borderRadius: 100,
  },
});

export default styles;