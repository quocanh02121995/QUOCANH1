import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  FlatList,
  SectionList,
  SafeAreaView
} from "react-native";

const apiGetMovieInfo = "https://facebook.github.io/react-native/movies.json";

async function getMovieInfoFromServer() {
  try{
    let reponse = await fetch(apiGetMovieInfo);
    let responseJson = await reponse.json();
    return responseJson.data;
  }
  catch(error)
    console.error(`Error is $error}`);
}
