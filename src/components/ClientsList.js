import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import ClientItem from "./ClientItem";
import { fetchPostsIfNeeded } from "../actions/clients";

class ClientsList extends React.Component {
  // componentDidMount() {
  //   dispatch(fetchPostsIfNeeded("selectedSubreddit"));
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          We have {this.props.clients.length}
          friends!
        </Text>
        {this.props.clients.map(client => (
          <ClientItem key={client._id} client={client} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#d6d7da",
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "stretch"
  }
});

const mapStateToProps = state => {
  const { clients } = state;
  return {
    clients
  };
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       addFriend
//     },
//     dispatch
//   );

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ClientsList);
