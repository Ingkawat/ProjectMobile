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
  Alert,
} from "react-native";
import Constants from "expo-constants";
import { Context as AuthContext } from "../context/AuthContext";
import FriendList from "../components/FriendList";

const ContactScreen = () => {
  const { state } = useContext(AuthContext);
  const [nameUser, setNameUser] = useState("");
  const [friendNameForAdd, setfriendNameForAdd] = useState("");
  const [friendNameForAccept, setfriendNameForAccept] = useState("");
  const [friendNameForUnFriend, setfriendNameForUnFriend] = useState("");
  const [allFriend, setallFriend] = useState([]);
  const [friendPending, setfriendPending] = useState([]);
  const [friendPendingSender, setfriendPendingSender] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/getFriendPendingFirst/${state.username}`
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
        // setfriendPendingSender(
        //   Friend.filter(
        //     ({ status, sentByYourSelf }) =>
        //       status === "Pending" && sentByYourSelf === true
        //   )
        // );
        // console.log({ friendPendingSender: friendPendingSender });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    axios
      .post(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/user/${state.username}`
      )
      .then(async (res) => {
        const Friend = res.data.friends;
        setfriendPending(
          Friend.filter(
            ({ status, sentByYourSelf }) =>
              status === "Pending" && sentByYourSelf === false
          )
        );
        console.log({ friendPending });
        if (friendPending.length > 0) {
          Alert.alert("Alert", "Have friend request to you", [{ text: "OK" }]);
        }
        setfriendPendingSender(
          Friend.filter(
            ({ status, sentByYourSelf }) =>
              status === "Pending" && sentByYourSelf === true
          )
        );
        console.log({ friendPendingSender });
        if (friendPendingSender.length > 0) {
          Alert.alert("Alert", "Have friend request to someone", [
            { text: "OK" },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const AddFriend = () => {
    axios
      .post(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/sendFriendRequest/${nameUser}`,
        { FriendName: friendNameForAdd }
      )
      .then(async (res) => {
        console.log(res.data);
        setfriendNameForAdd("");
        if (res.data === "Name is not exists") {
          Alert.alert("Alert", "Can't add friend yourself", [{ text: "OK" }]);
        } else if (res.data === "Can't add friend yourself") {
          Alert.alert("Alert", "Name is not exists", [{ text: "OK" }]);
        } else if (res.data === "You already sent friend request") {
          Alert.alert("Alert", "You already sent friend request", [
            { text: "OK" },
          ]);
        } else {
          Alert.alert("Alert", "Send friend request success", [{ text: "OK" }]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const accpetFriend = (prop) => {
    setfriendNameForAccept(prop);
    console.log(
      { nameUser: nameUser },
      { friendNameForAccept: friendNameForAccept }
    );
    axios
      .post(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/acceptFriendRequest/${nameUser}/${friendNameForAccept}`
      )
      .then(async (res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unFriend = (prop) => {
    setfriendNameForUnFriend(prop);
    console.log(
      { nameUser: nameUser },
      { friendNameForUnFriend: friendNameForUnFriend }
    );
    axios
      .delete(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/unFriend/${nameUser}/${friendNameForUnFriend}`
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
        image={itemData.item.image}
        sentByYourSelf={itemData.item.sentByYourSelf}
        acceptFriendFunc={(value) => accpetFriend(value)}
        unFriendFunc={(value) => unFriend(value)}
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
