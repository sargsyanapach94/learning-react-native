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
      <View style={{flex: 1}}>
        <Text>
          We have {this.props.clients.length}
          friends!
        </Text>
        <View style={styles.container}>
          {this.props.clients.map(client => (
            <ClientItem
              key={client._id}
              style={styles.clientItem}
              client={client}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#d6d7da",
    height: 200,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  clientItem: {
    // flex: 1,
    // height: 10
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
