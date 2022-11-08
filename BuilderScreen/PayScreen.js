import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import SelectList from "react-native-dropdown-select-list";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

function PayScreen({ navigation }) {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "KTB" },
    { key: "2", value: "Gujrat" },
    { key: "3", value: "Maharashtra" },
    { key: "4", value: "Goa" },
  ];

  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container} navigation={navigation}>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          marginBottom: 20,
          fontSize: 18,
        }}
      >
        QR CODE
      </Text>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={pickImage}>
          <Avatar.Image size={220} backgroundColor={'#A9AED9'} source={{ uri: image }} />
        </TouchableOpacity>
      </View>
      <Text style={{textAlign:'center', fontSize:18, marginTop:10}}>or</Text>
      <SelectList
        setSelected={setSelected}
        data={data}
        arrowicon={
          <FontAwesome name="chevron-down" size={14} color={"black"} />
        }
        search={false}
        boxStyles={{
          height: 45,
          width: 300,
          alignSelf: "center",
          borderColor: "#5A6199",
          borderWidth: 2,
          marginTop: 20,
        }}
        dropdownStyles={{
          alignSelf: "center",
          width: 250,
          borderColor: "#5A6199",
          borderWidth: 2,
        }}
        dropdownTextStyles={{ fontWeight: "bold" }}
        inputStyles={{ fontWeight: "bold" }}
        defaultOption={{ key: "0", value: "Select Bank" }}
      ></SelectList>

      <TextInput
        returnKeyType="next"
        autoCorrect={false}
        style={styles.textinput}
        placeholder="Account name"
      />

      <TextInput
        returnKeyType="done"
        autoCorrect={false}
        style={styles.textinput}
        secureTextEntry={true}
        keyboardType="numeric"
        placeholder="Account number"
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Generate Bill</Text>
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
    marginTop: 30,
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

export default PayScreen;
