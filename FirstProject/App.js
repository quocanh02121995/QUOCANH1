import React, { Component } from "react";
import TextBlink from "./Components/TextBlink";
import HelloWorld from "./Components/HelloWorld";
import Login from "./Screens/Login";
import AppRegistry from "./index";
import {
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
  Modal,
  Platform
} from "react-native";
import AddModal from "./Components/AddModal";

//import {getMovieInfoFromServer} from './Networking/Server';

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
  setModalVisible(true);
}

function FlatListItem({ name, price, image }) {
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

export default class flatList extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 24 }}>
        <View
          style={{
            backgroundColor: "#e2593e",
            height: 64,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={{ marginRight: 10 }}
            underlayColor="black"
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Image
              style={{ height: 35, width: 35 }}
              source={require("./Icons/icons8-add-32.png")}
            />
          </TouchableHighlight>
        </View>
        <FlatList
          data={flatListData}
          renderItem={({ item }) => (
            <FlatListItem
              image={item.image}
              name={item.name}
              price={item.price}
            />
          )}
        />
        <Modal
          style={{
            justifyContent: "center",
            borderRadius: 30,
            shadowRadius: 10
          }}
          position="center"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
            alert("Modal closed");
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 24 }}>
            Insert car information
          </Text>
        </Modal>
      </View>
    );
  }
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
    width: screenWidth
  },
  itemDetail: {
    flexDirection: "column",
    fontSize: 16,
    textAlign: "center",
    margin: 5
  },
  itemImage: {
    backgroundColor: "black",
    width: 100,
    height: 100,
    margin: 5,
    alignItems: "center"
  }
});
