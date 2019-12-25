import React, { Conponent } from "react";
import {
  AppRegistry,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimension
} from "react-native";

export default class VerticalScrollView extends Component {
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "aliceblue",
          marginHorizontal: 20
        }}
      >
        <Image
          source={{
            uri:
              "https://png.pngtree.com/svg/20161224/download_react_native_1115506.png"
          }}
          style={{ width: 400, height: 700 }}
        ></Image>
      </ScrollView>
    );
  }
}
