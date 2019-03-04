import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

class ClientItem extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.col}> {this.props.client.name} </Text>
        <Text style={styles.col}> {this.props.client.email} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    borderWidth: 1.5,
    borderColor: "#d6d7da",
    height: 50
    // flex: 1,
    // flexDirection: "row"
  },
  col: {
    height: 50,
    backgroundColor: "powderblue"
  }
});

export default connect()(ClientItem);
