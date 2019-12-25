import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";

const flatListData = [
  {
    name: "Zenvo ST1",
    price: "$1.2M"
  },
  {
    name: "Ferrari LaFerrari",
    price: "$1.4M"
  },
  {
    name: "Pagani Huyara",
    price: "$1.4M"
  },
  {
    name: "Aston Martin One-77",
    price: "$1.2M"
  },
  {
    name: "Koenigsegg One:1",
    price: "$2.0M"
  },
  {
    name: "Ferrari F60 America",
    price: "$2.5M"
  },
  {
    name: "Mansory Vivere Bugatti Veyron",
    price: "$3.4M"
  },
  {
    name: "W Motors Lykan Hypersport",
    price: "$3.4M"
  },
  {
    name: "Lamborghini Veneno",
    price: "$1.2M"
  },
  {
    name: "Koenigsegg CCXR Trevita",
    price: "$4.8M"
  }
];

function Item({ name, price }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemDetail}>{name}</Text>
      <Text style={styles.itemDetail}>{price}</Text>
    </View>
  );
}

export default class flatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={flatListData}
          renderItem={({ item }) => (
            <Item name={item.name} price={item.price} />
          )}
        />
      </View>
    );
  }
}
