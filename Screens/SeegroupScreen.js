import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SeegroupScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.rect}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            paddingLeft: 20,
            marginRight: "30%",
          }}
        >
          Party dinner
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>500 THB</Text>
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
    height: 80,
    borderWidth: 3,
    borderColor: "#5A6199",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SeegroupScreen;
