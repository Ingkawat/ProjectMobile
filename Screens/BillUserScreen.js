import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BillUserScreen = () => {
  return (
    <View style={styles.screen}>
      <TextInput style={styles.txtInput} placeholder="Bill Name"></TextInput>
      <TextInput style={styles.txtInput} placeholder="Place"></TextInput>
      <TextInput
        style={[styles.txtInput, { marginBottom: 30 }]}
        placeholder="Date"
      ></TextInput>
      <View style={styles.rect}>
        <View style={styles.circle}>
          <Image
            source={require("../assets/userprofile.png")}
            style={styles.userProfile}
          ></Image>
        </View>
        <Text style={{ marginLeft: 10, marginTop: 5 }}>
          Name {"\n"} {"\n"}
          <Text style={{ fontWeight: "bold" }}>500 THB</Text>
        </Text>
        {/* <Text style={{ fontWeight: "bold" }}>500 THB</Text> */}
        <Image
          source={require("../assets/favicon.png")}
          style={{ width: 50, height: 50, position: "relative", left: "30%" }}
        ></Image>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>ชำระเงิน</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF8EF",
  },

  txtInput: {
    height: 25,
    width: "60%",
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },

  rect: {
    width: "80%",
    height: 90,
    borderWidth: 3,
    borderColor: "#5A6199",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },

  circle: {
    backgroundColor: "#F06B6D",
    borderRadius: "100%",
    padding: 3,
    marginLeft: 20,
    marginBottom: 30,
  },

  userProfile: {
    width: 33,
    height: 33,
  },

  btn: {
    backgroundColor: "#F06B6D",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
    position: "relative",
    top: "60%",
  },
});

export default BillUserScreen;
