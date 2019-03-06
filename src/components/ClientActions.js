import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

class ClientActions extends React.Component {
  onPressLearnMore = () => {};

  render() {
    return (
      <View>
        <Button
          onPress={this.onPressLearnMore}
          title="Edit"
          color="#5cb85c"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Remove"
          color="#d9524e"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default connect()(ClientActions);
