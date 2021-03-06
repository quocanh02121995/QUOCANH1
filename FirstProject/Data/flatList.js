import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Dimensions
} from "react-native";

var flatListData = [
  {
    name: "Zenvo ST1",
    image: "https://www.boxymo.ie/news/img/zenvo.jpg",
    price: "$1.2M"
  },
  {
    name: "Ferrari LaFerrari",
    image: "https://www.boxymo.ie/news/img/ferrari.jpg",
    price: "$1.4M"
  },
  {
    name: "Pagani Huyara",
    image: "https://www.boxymo.ie/news/img/pagani-huayra.jpg",
    price: "$1.4M"
  },
  {
    name: "Aston Martin One-77",
    image: "https://www.boxymo.ie/news/img/aston-martin.jpg",
    price: "$1.2M"
  },
  {
    name: "Koenigsegg One:1",
    image: "https://www.boxymo.ie/news/img/koenigsegg.jpg",
    price: "$2.0M"
  },
  {
    name: "Ferrari F60 America",
    image: "https://www.boxymo.ie/news/img/ferrari-f60.jpg",
    price: "$2.5M"
  },
  {
    name: "Mansory Vivere Bugatti Veyron",
    image: "https://www.boxymo.ie/news/img/bugatti.jpg",
    price: "$3.4M"
  },
  {
    name: "W Motors Lykan Hypersport",
    image: "https://www.boxymo.ie/news/img/lykan-hypersport.jpg",
    price: "$3.4M"
  },
  {
    name: "Lamborghini Veneno",
    image: "https://www.boxymo.ie/news/img/lamborghini.jpg",
    price: "$4.5M"
  },
  {
    name: "Koenigsegg CCXR Trevita",
    image: "https://www.boxymo.ie/news/img/koenigsegg-trevita.jpg",
    price: "$4.8M"
  }
];

let screenWidth = Dimensions.get("window").width;

function onPressAdd() {
  alert("Add an item");
}

class Item({ name, price, image }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "bisque",
        borderBottomWidth: 0.75,
        borderBottomColor: "white"
      }}
    >
      <Image
        style={{ width: 100, height: 100, margin: 5, alignItems: "center" }}
        source={{ uri: image }}
      />
      <View styles={{ flex: 1 }}>
        <Text style={{ flexDirection: "column", fontSize: 16, margin: 5 }}>
          {name}
          {"\n"}
          {price}
        </Text>
      </View>
    </View>
  );
}

export default class FlatList extends Component {
  render() {
    return (
      <View style={{ flex: 1,marginTop: 24}}>
        <View
          style={{
            backgroundColor: '#e2593e',
            height: 64,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={{ marginRight: 10 }}
            underlayColor="black"
            onPress={onPressAdd}
          >
            <Image
              style={{ height: 35, width: 35 }}
              source={require("./Icons/icons8-add-32.png")}
            />
          </TouchableHighlight>
        </View>
        <FlatList
          data={flatListData}
          renderItem={({ item}) => (
            <FlastListItem
              image={item.image}
              name={item.name}
              price={item.price}
            />
          )}
        />
      </View>
    );
  }
}
