import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";

export default class MyHeader extends React.Component {
  render() {
    return (
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Clients list", style: { color: "#fff" } }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
