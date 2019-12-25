import React, { Component } from "react";
import { AppRegistry } from "./index";
import TextBlink from "./Components/TextBlink";
import HelloWorld from "./Components/HelloWorld";
import Login from "./Screens/Login";

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
  ScrollView,
  Dimensions,
  FlatList,
  SafeAreaView
} from "react-native";

const flatListData = [
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
    image: "https://www.boxymo.ie/news/img/lamborghini.jpg",
    price: "$4.8M"
  }
];

function Item({ name, price, image }) {
  return (
    <View style={{flex:1,flexDirection: 'row'}}>
      <Image
        style={styles.itemImage}
        source={{ uri: flatListData.image }}
      />
      <View style={styles.item}>
        <Text style={styles.itemDetail}>{name}</Text>
        <Text style={styles.itemDetail}>{price}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={flatListData}
        renderItem={({ item }) => (
          <Item image={item.image} name={item.name} price={item.price} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 15,
    backgroundColor: "#000000",
    alignItems: "center"
  },
  container: {
    flex: 70,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  footer: {
    flex: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderColor: "#000000",
    borderTopWidth: 0.3
  },
  loginHeader: {
    color: "#ffffff",
    paddingTop: 30,
    fontSize: 20
  },
  loginButton: {
    paddingTop: 10,
    color: "blue",
    width: 200
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  item: {
    backgroundColor: "aliceblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column'
  },
  itemDetail: {
    fontSize: 16,

  },
  itemImage: {
    width: 100,
    height: 100,
    margin: 5,
    alignItems: "center"
  }
});
