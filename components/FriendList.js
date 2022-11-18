import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

const FriendList = (props) => {
  const status = props.status;
  const onPressButton = () => {
    props.acceptFriendFunc(props.name);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: "5%",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../assets/userprofileicon.png")}
        style={styles.userProfile}
      ></Image>
      <Text
        style={{
          marginLeft: "5%",
          fontSize: 14,
          marginTop: "2%",
          fontWeight: "bold",
        }}
      >
        {props.name}
      </Text>
      {status === "Pending" ? (
        <View style={{ flexDirection: "row", marginLeft: "30%" }}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#77CEC6" }]}
            onPress={() => onPressButton()}
          >
            <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#F06B6D" }]}
          >
            <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
              Unfriend
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: "#F06B6D", marginLeft: "40%" },
          ]}
        >
          <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>Unfriend</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#F06B6D",
    borderRadius: 100,
    padding: 3,
    marginBottom: 30,
    marginTop: "5%",
    marginLeft: "-30%",
  },

  userProfile: {
    width: 33,
    height: 33,
    // marginLeft: "10%"
  },

  btn: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: "5%",
    alignSelf: "center",
  },
});

export default FriendList;
