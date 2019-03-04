import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import ClientsList from "./ClientsList";

export default class MainContainer extends React.Component {
  // componentDidMount() {
  //   dispatch(fetchPostsIfNeeded("selectedSubreddit"));
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Some description !!!</Text>
        <ClientsList> </ClientsList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
