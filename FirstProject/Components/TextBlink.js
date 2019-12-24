import React, { Component } from "react";
import { Text, View } from "react-native";

class Blink extends Component {
  componentDidMount() {
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      500
    );
  }
  state = { isShowingText: true };

  render() {
    if (this.state.isShowingText) {
      return null;
    }
    return <Text style={{ fontSize: 15 }}>{this.props.text}</Text>;
  }
}

export default class TextBlink extends Component {
  render() {
    return (
      <View
        style={{

          alignItems:'center',
          padding:20,
          justifyContent: 'center'
        }}
      >
        <Blink text="Welcome! Please login to gain access" />
      </View>
    );
  }
}
