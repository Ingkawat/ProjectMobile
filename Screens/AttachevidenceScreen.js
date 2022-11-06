import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AttachevidenceScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 16, marginBottom: 40 }}>
        แนบหลักฐานการชำระเงิน
      </Text>
      <View style={styles.circle}>
        <Image
          source={require("../assets/add_picture.png")}
          style={styles.imgAdd}
        ></Image>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
          ชำระเงินเรียบร้อย
        </Text>
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
    backgroundColor: "#FCC046",
    borderRadius: "100%",
    padding: 30,
  },

  imgAdd: {
    width: 130,
    height: 130,
    marginLeft: -5,
  },

  btn: {
    backgroundColor: "#F06B6D",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 40,
  },
});

export default AttachevidenceScreen;
