import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  FlatList,
  SectionList,
  ScrollView,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Dimensions,
  Modal
} from "react-native";


export default class AddModal extends Component {

  render() {
    return (
      <Modal
        style={{
          justifyContent: "center",
          borderRadius: Platform === `ios` ? 30 : 0,
          shadowRadius: 10,
          width: screen.width - 80,
          height: 200
        }}
        position="center"
        visible={this.state.modalVisible}
        onClose={() => alert("Modal closed")}
      >
      <Text>Welcome</Text>
      </Modal>
    );
  }
}
