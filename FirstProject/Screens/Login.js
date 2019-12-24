import React, { Component } from "react";
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

export default class Login extends Component {
  return() {
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
        <View></View>
      </View>

      <View style={styles.footer}>
        <HelloWorld />
      </View>
    </View>;
  }
}
