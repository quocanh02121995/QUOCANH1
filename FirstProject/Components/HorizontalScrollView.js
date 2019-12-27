import React, { Conponent } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  FlatList,
  SectionList,
  View,
  Text,
  TextInput,
  Dimensions
} from "react-native";

export default class HorizontalScrollView extends Component {
  render() {
    let screenHeight = Dimensions.get("window").height;
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled
        showHorizontalScrollIndicator={true}
      >
        <View
          style={{
            backgroundColor: "green",
            flex: 1,
            marginBottom: 10,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Screen 1
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            marginBottom: 10,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Screen 2
        </Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            marginBottom: 10,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center"
          }}
        ><Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Screen 3
        </Text>
        </View>
      </ScrollView>
    );
  }
}
