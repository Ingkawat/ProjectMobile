import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const PayMoneyScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 15, marginBottom: 40, fontWeight: "bold" }}>
        QR CODE
      </Text>
      <View style={styles.circle}>
        <Image
          source={require("../assets/favicon.png")}
          style={styles.QRimg}
        ></Image>
      </View>
      <Text style={{ marginTop: 20 }}>or</Text>
      <Text style={{ marginTop: 20 }}>Bank BUILDER</Text>
      <Text style={styles.txt}>Name BUILDER</Text>
      <Text style={styles.txt}>
        Account number BUILDER{" "}
        <Image
          source={require("../assets/favicon.png")}
          style={{ width: 15, height: 15, position: "relative", left: "18%" }}
        />
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>แนบหลักฐาน</Text>
      </TouchableOpacity>
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
    backgroundColor: "#A9AED9",
    borderRadius: "100%",
    padding: 30,
  },

  QRimg: {
    width: 130,
    height: 130,
    marginLeft: -5,
  },

  txt: {
    height: 25,
    width: "60%",
    marginTop: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },

  btn: {
    backgroundColor: "#F06B6D",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 40,
  },
});

export default PayMoneyScreen;
