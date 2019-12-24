import React from "react";

import { AppRegistry } from "./index";
import TextBlink from "./Components/TextBlink";
import HelloWorld from "./Components/HelloWorld";
import Login from "./Screens/Login"
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
export default function App() {
  
  return (

    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.loginHeader}>Log in</Text>
      </View>
      <View style={styles.logo}>
        <Image
          source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={{
            width: 200,
            height: 200
          }}
        />
      </View>
      <View style={styles.container}>
        <View style={{ height: 50, padding: 15 }}>
          <TextBlink />
        </View>
        <View>
          <TextInput
            style={{
              height: 40,
              width: 200,
              margin: 10,
              borderWidth: 1,
              padding: 10
            }}
            keyboardType="default"
            placeholder="Username"
            placeholderTextColor="rgb(184, 190, 190)"
            autoFocus={true}
          ></TextInput>
          <TextInput
            style={{
              height: 40,
              width: 200,
              margin: 10,
              borderWidth: 1,
              padding: 10
            }}
            keyboardType="default"
            placeholder="Password"
            placeholderTextColor="rgb(184, 190, 190)"
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View style={styles.loginButton}>
          <Button
            title="Log in"
            color="red"
            onPress={() => Alert.alert("Logging in, please wait")}
          ></Button>
        </View>
        <View>

        </View>
      </View>

      <View style={styles.footer}>
        <HelloWorld />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    flex: 15,
    backgroundColor: "#000000",
    alignItems: "center"
  },
  container: {
    flex: 70,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  footer: {
    flex: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderColor: "#000000",
    borderTopWidth: 0.3
  },
  loginHeader: {
    color: "#ffffff",
    paddingTop: 30,
    fontSize: 20
  },
  loginButton: {
    paddingTop: 10,
    color: "blue",
    width: 200
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  }
});
