import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

const FriendList = (props) => {
  const status = props.status;
  const image = props.image;
  const sentByYourSelf = props.sentByYourSelf;

  const acceptFriend = () => {
    props.acceptFriendFunc(props.name);
  };

  const unFriend = () => {
    props.unFriendFunc(props.name);
  };

  const renderFriendList = () => {
    if (status === "Pending" && sentByYourSelf === false) {
      return (
        <View
          style={{
            flexDirection: "row",
            marginTop: "5%",
            justifyContent: "center",
          }}
        >
          {/* <Image
            source={require("../assets/userprofileicon.png")}
            style={styles.userProfile}
          ></Image> */}
          {image == null ? (
            <Image
              source={require("../assets/userprofileicon.png")}
              style={styles.userProfile}
            ></Image>
          ) : (
            <Image
              source={{
                uri: `http://${Constants.expoConfig.extra.apiUrl}:3000/${image}`,
              }}
              style={styles.userProfile2}
            ></Image>
          )}
          <Text
            style={{
              marginLeft: "5%",
              fontSize: 14,
              marginTop: "5%",
              fontWeight: "bold",
            }}
          >
            {props.name}
          </Text>
          <View style={{ flexDirection: "row", marginLeft: "30%" }}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: "#77CEC6" }]}
              onPress={() => acceptFriend()}
            >
              <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
                Accept
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: "#F06B6D" }]}
              onPress={() => unFriend()}
            >
              <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
                Unfriend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (status === "Accepted") {
      return (
        <View
          style={{
            flexDirection: "row",
            marginTop: "5%",
            justifyContent: "center",
          }}
        >
          {image == null ? (
            <Image
              source={require("../assets/userprofileicon.png")}
              style={styles.userProfile}
            ></Image>
          ) : (
            <Image
              source={{
                uri: `http://${Constants.expoConfig.extra.apiUrl}:3000/${image}`,
              }}
              style={styles.userProfile2}
            ></Image>
          )}
          <Text
            style={{
              marginLeft: "5%",
              fontSize: 14,
              marginTop: "5%",
              fontWeight: "bold",
            }}
          >
            {props.name}
          </Text>
          <TouchableOpacity
            style={[
              styles.btn,
              { backgroundColor: "#F06B6D", marginLeft: "40%" },
            ]}
            onPress={() => unFriend()}
          >
            <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
              Unfriend
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  return renderFriendList();
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
    width: 60,
    height: 60,
    // marginLeft: "10%"
  },

  userProfile2: {
    width: 60,
    height: 60,
    borderRadius: 100,
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
