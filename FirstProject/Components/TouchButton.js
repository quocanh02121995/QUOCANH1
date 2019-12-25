import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

export default class TouchButton extends Component {
  _onPressButton = () => {
    alert("You have pressed the button!");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="black">
          <View
            style={{
              backgroundColor: "blue",
              width: 100,
              height: 40,
              margin: 10
            }}
          >
            <Text
              style={{
                color: "white",
                margin: 10,
                fontSize: 14,
                textAlign: "center"
              }}
            >
              Blue
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableNativeFeedback
          onPress={this._onPressButton}
          useForeground={false}
        >
          <View
            style={{
              backgroundColor: "green",
              width:100,
              height: 40,
              margin:10
            }}
          >
            <Text
              style={{
                color: "white",
                margin: 10,
                fontSize: 16,
                textAlign: "center"
              }}
            >Green</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableOpacity onPress={this._onPressButton} activeOpacity={0.5}>
          <View
            style={{
              backgroundColor: "red",
              width: 100,
              height: 40,
              margin:10
            }}
          >
            <Text
              style={{
                color: "white",
                margin: 10,
                fontSize: 16,
                textAlign: "center"
              }}
            >Red</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
