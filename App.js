import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import MyHeader from "./src/components/MyHeader";
import MainContainer from "./src/components/MainContainer";
import clients from "./src/reducers";
console.log(clients);
const store = createStore(clients);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} style={styles.container}>
        <MyHeader style={styles.header} />
        <MainContainer style={styles.content} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  header: {
    height: 30
  },
  content: {
    height: 500
  }
});
