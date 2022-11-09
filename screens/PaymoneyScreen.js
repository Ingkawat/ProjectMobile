import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import Clipboard from "@react-native-clipboard/clipboard";
import * as Clipboard from "expo-clipboard";

const PayMoneyScreen = () => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("เลขบัญชี");
  };

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
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.txt}>Account number BUILDER</Text>
        <TouchableOpacity onPress={copyToClipboard}>
          <Image
            source={require("../assets/copynum.png")}
            style={{ width: 20, height: 20, marginTop: 20, marginLeft: -20 }}
          />
        </TouchableOpacity>
      </View>
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
    borderRadius: 100,
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
