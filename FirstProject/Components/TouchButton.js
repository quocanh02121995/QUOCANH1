import React,{Component} from "react";
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
              fontSize: 16
            }}
          >
            <Text style={{ color: "white", margin: 10 }}>Press me</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
