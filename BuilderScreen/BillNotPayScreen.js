import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BillNotPayScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.rect}>
        <Text style={styles.txt}>Party dinner</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: "18%" }}>
          500 THB
        </Text>
      </View>
      <View style={styles.circle}>
        <Image
          style={styles.userProfile}
          source={require("../assets/userprofile.png")}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD47C",
  },

  rect: {
    width: "75%",
    height: 115,
    borderWidth: 3,
    borderColor: "#5A6199",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },

  txt: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 20,
    marginRight: "30%",
    marginBottom: "18%",
  },

  circle: {
    backgroundColor: "#F06B6D",
    borderRadius: 100,
    padding: 3,
    marginLeft: 20,
    marginBottom: 30,
    position: "relative",
    bottom: "10%",
    right: "28%",
  },

  userProfile: {
    width: 33,
    height: 33,
  },
});

export default BillNotPayScreen;
