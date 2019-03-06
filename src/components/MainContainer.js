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
        <ClientsList style={styles.clientsList}> </ClientsList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  // clientsList: { flex: 1 }
});
