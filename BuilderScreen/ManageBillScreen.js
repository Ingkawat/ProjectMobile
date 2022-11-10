import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ManageCard from "../components/managecard";
import { Entypo } from "@expo/vector-icons";

function ManageBillScreen ({ navigation }) {
  return (
    <View style={styles.container} navigation={navigation}>
      <View style={{ flexDirection: "row" , alignSelf: 'center'}}>
        <TextInput
          returnKeyType="next"
          autoCorrect={false}
          style={styles.textinput}
          placeholder="Bill Name"
        />
        <View style={{ justifyContent: "flex-end", zIndex: 1, marginLeft: -20}}>
          <Entypo name="new-message" size={24} color="black" />
        </View>
      </View>

      <View style={{ flexDirection: "row" , alignSelf: 'center'}}>
        <TextInput
          returnKeyType="next"
          autoCorrect={false}
          style={styles.textinput}
          placeholder="Place"
        />
        <View style={{ justifyContent: "flex-end", zIndex: 1, marginLeft: -20}}>
          <Entypo name="new-message" size={24} color="black" />
        </View>
      </View>

      <View style={{ flexDirection: "row" , alignSelf: 'center', marginBottom:25}}>
        <TextInput
          returnKeyType="next"
          autoCorrect={false}
          style={styles.textinput}
          placeholder="Date"
        />
        <View style={{ justifyContent: "flex-end", zIndex: 1, marginLeft: -20}}>
          <Entypo name="new-message" size={24} color="black" />
        </View>
      </View>
      <ManageCard/>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Delete Bill</Text>
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
    marginTop: 130,
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

export default ManageBillScreen;
