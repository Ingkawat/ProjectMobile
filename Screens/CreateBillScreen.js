import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CreateBill = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.createText}>สร้างบิล</Text>
      <View style={styles.rect}>
        <Image
          source={require("../assets/favicon.png")}
          style={{ width: 50, height: 50, marginLeft: 20 }}
        ></Image>
        <Text style={styles.textInRect}>หารเท่ากัน</Text>
        <Image
          source={require("../assets/right_arrow.png")}
          style={{ width: 40, height: 40 }}
        ></Image>
      </View>
      <View style={[styles.rect]}>
        <Image
          source={require("../assets/favicon.png")}
          style={{ width: 50, height: 50, marginLeft: 20 }}
        ></Image>
        <Text style={[styles.textInRect]}>หารไม่เท่ากัน</Text>
        <Image
          source={require("../assets/right_arrow.png")}
          style={{ width: 40, height: 40, marginLeft: -25 }}
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
    backgroundColor: "#FFF8EF",
  },

  createText: {
    color: "#5A6199",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 40,
    alignSelf: "flex-start",
    marginLeft: "15%",
  },

  rect: {
    width: "80%",
    height: 100,
    borderWidth: 3,
    borderColor: "#A9AED9",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 50,
  },

  textInRect: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    marginRight: "25%",
    color: "#525EBC",
  },
});

export default CreateBill;
