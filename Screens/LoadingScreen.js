import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/mainBackground.png")}
        style={styles.screen}
      >
        <Image
          source={require("../assets/main.png")}
          style={styles.img}
        ></Image>
        <Image
          source={require("../assets/appName.png")}
          style={styles.txt}
        ></Image>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    width: 250,
    height: 250,
  },

  txt: {
    marginTop: 20,
    width: 160,
    height: 50,
    resizeMode: "contain",
  },
});

export default LoadingScreen;
