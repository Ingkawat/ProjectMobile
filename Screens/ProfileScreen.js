import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.circle}>
        <Image
          source={require("../assets/userprofile.png")}
          style={styles.userProfile}
        ></Image>
      </View>
      <Text style={{ marginTop: 30 }}>Name Profile</Text>
      <TextInput style={styles.txtInput} placeholder="HUAKUY"></TextInput>
      <TextInput style={styles.txtInput} placeholder="01******"></TextInput>
      <TextInput style={styles.txtInput} placeholder="อีเมล์"></TextInput>
      <TextInput style={styles.txtInput} placeholder="0123456789"></TextInput>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#77CEC6", marginRight: 15 }]}
        >
          <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#F06B6D" }]}>
          <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8EF",
  },

  circle: {
    backgroundColor: "#F06B6D",
    borderRadius: "100%",
    padding: 15,
  },

  userProfile: {
    width: 140,
    height: 140,
  },

  txtInput: {
    height: 25,
    width: "60%",
    marginTop: 35,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },

  btn: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 50,
  },
});

export default ProfileScreen;
