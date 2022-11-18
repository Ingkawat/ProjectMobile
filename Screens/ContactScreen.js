import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { Context as AuthContext } from "../context/AuthContext";
import FriendList from "../components/FriendList";

const ContactScreen = () => {
  const { state } = useContext(AuthContext);
  const [nameUser, setNameUser] = useState("");
  const [friendNameForAdd, setfriendNameForAdd] = useState("");
  const [friendNameForAccept, setfriendNameForAccept] = useState("");
  const [allFriend, setallFriend] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/getFriend/${state.username}`
      )
      .then(async (res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/user/${state.username}`
      )
      .then(async (res) => {
        const Friend = res.data.friends;
        setNameUser(res.data.name);
        setallFriend(Friend);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const AddFriend = () => {
    axios
      .post(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/sendFriendRequest/${nameUser}`,
        { FriendName: friendNameForAdd }
      )
      .then(async (res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const accpetFriend = (prop) => {
    setfriendNameForAccept(prop);
    axios
      .post(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/acceptFriendRequest/${friendNameForAccept}/${nameUser}`
      )
      .then(async (res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderFriendRequest = (itemData) => {
    return (
      <FriendList
        name={itemData.item.name}
        status={itemData.item.status}
        acceptFriendFunc={(prop) => accpetFriend(prop)}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.txtInput}
        value={friendNameForAdd}
        onChangeText={(value) => setfriendNameForAdd(value)}
      ></TextInput>
      <TouchableOpacity style={styles.btn} onPress={() => AddFriend()}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
          เพิ่มเพื่อน
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: "5%" }}>
        Contact
      </Text>
      <FlatList data={allFriend} renderItem={renderFriendRequest} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF8EF",
    paddingTop: "10%",
  },

  txtInput: {
    height: 25,
    width: "50%",
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },

  btn: {
    backgroundColor: "#525EBC",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default ContactScreen;
