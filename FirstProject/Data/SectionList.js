import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, } from "react-native";

const carList = [
  {
    title: "Ford",
    data: ["Ecosport", "Focus", "Fiesta", "Everest", "Ford Ranger"]
  },
  {
    title: "Kia",
    data: ["Cerato", "Morning", "Sedona", "Sorento"]
  },
  {
    title: "Toyota",
    data: ["Vios", "Fortuner", "Camry", "Innova", "Land Cruiser"]
  },
  {
    title: "Honda",
    data: ["City", "Civic", "CR-V", "Odyssey"]
  }
];

let screenWidth = Dimensions.get("window").width;

function Item({ title }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "bisque",
        borderBottomWidth: 0.75,
        borderBottomColor: "white",
        padding: 10,
        justifyContent: "center"
      }}
    >
      <Text
        style={{
          flexDirection: "column",
          fontSize: 16,
          textAlign: "center",
          margin: 5
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default class sectionList extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "burlywood" }}>
        <SectionList
          sections={carList}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                color: "white",
                fontSize: 24,
                padding: 10,
                textAlign: "center"
              }}
            >
              {title}
            </Text>
          )}
        />
      </View>
    );
  }
}
