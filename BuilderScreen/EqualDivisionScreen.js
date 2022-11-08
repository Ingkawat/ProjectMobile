import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";

function EqualDivisionScreen({ navigation }) {
  return (
    <View style={styles.container} navigation={navigation}>
      <TextInput
        returnKeyType="next"
        autoCorrect={false}
        style={styles.textinput}
        placeholder="Bill Name"
      />

      <TextInput
        returnKeyType="next"
        autoCorrect={false}
        style={styles.textinput}
        placeholder="Place"
      />

      <TextInput
        returnKeyType="done"
        autoCorrect={false}
        style={styles.textinput}
        placeholder="Date"
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.roundbtn}>
          <Text style={styles.roundbtntext}>+</Text>
        </TouchableOpacity>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ marginLeft: 15, marginTop: 15 }}>Invite friend</Text>
        </View>
      </View>
      <View style={{ marginLeft: 65, marginTop: 20, flexDirection: "row" }}>
        <TouchableOpacity style={{ marginRight:-60 , marginTop:-5, zIndex: 1 }}>
          <Avatar.Text
            label="-"
            labelStyle={{ fontSize: 30 }}
            size={25}
            backgroundColor="#5A6199"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 130 }}>
          <Avatar.Image size={50} backgroundColor="#F06B6D" />
        </TouchableOpacity>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ marginLeft: -110 }}>Name</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              alignSelf: "center",
              marginRight:-200,
              marginBottom: 10,
              textDecorationLine: "underline",
            }}
          >
            Total money
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Text style={{ alignSelf: "center", marginLeft: 220, marginTop: -80 }}>
          Money
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8EF",
  },

  textinput: {
    height: 30,
    width: 250,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 5,
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  btn: {
    alignSelf: "center",
    width: 150,
    padding: 10,
    backgroundColor: "#F06B6D",
    marginTop: 200,
    borderRadius: 10,
  },

  btntext: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  roundbtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FCC046",
    marginLeft: 30,
    marginTop: 20,
  },

  roundbtntext: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default EqualDivisionScreen;
