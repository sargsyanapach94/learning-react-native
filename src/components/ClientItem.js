import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import  ClientActions from './ClientActions'

class ClientItem extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.col}> {this.props.client.name} </Text>
        <Text style={styles.col}> {this.props.client.email} </Text>
        <Text style={styles.col}> {this.props.client.providers.length} </Text>
        <View><ClientActions/></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  col: {
    borderWidth: 1.5,
    borderColor: "#d6d7da",
    flex: 1,
    backgroundColor: "powderblue"
  }
});

export default connect()(ClientItem);
