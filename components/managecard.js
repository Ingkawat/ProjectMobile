import React, { useState } from "react";

import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Card, Avatar } from "react-native-paper";

const ManageCard = () => {
  const [isPayAlready, setisPayAlready] = useState(false);
  const [seeMoney, setseemoney] = useState('Money');
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ marginTop: 10, marginLeft: 20 }}>
          <Avatar.Image size={50} backgroundColor="#F06B6D" />
        </TouchableOpacity>
        <View style={{ justifyContent: "center", zIndex:1}}>
          <Card style={{backgroundColor: "#FFF8EF"}}>
            <Text style={styles.txt}>Name</Text>
          </Card>
        </View>
        <View  style={{ justifyContent: "center", backgroundColor: "#FFF8EF"}}>
          <Card style={{backgroundColor: "#FFF8EF"}}>
              <Text  style={styles.txt2}>{seeMoney}</Text>
          </Card>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Proof of payment
          </Text>
        </TouchableOpacity>
        {isPayAlready ? (
          <Image
            source={require("../assets/paidalready.png")}
            style={{ width: 50, height: 50, marginLeft: 80, marginTop: 20 }}
          ></Image>
        ) : (
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              setisPayAlready(true);
              setseemoney('');
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#77CEC6",
                fontWeight: "bold",
              }}
            >
              Complete
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ManageCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: 350,
    height: 150,
    backgroundColor: "#FFF8EF",
    borderColor: "#525EBC",
    borderRadius: 20,
    borderWidth: 3,
  },
  txt: {
    textAlign: "center",
    backgroundColor: "#FFF8EF",
    color: "black",
    marginLeft: 20,
    marginTop: 10,
  },
  txt2: {
    textAlign: "center",
    backgroundColor: "#FFF8EF",
    color: "black",
    marginLeft: 140,
    marginTop: 10,

  },
  btn: {
    alignSelf: "center",
    width: 150,
    padding: 10,
    backgroundColor: "#FCC046",
    borderRadius: 4,
    marginLeft: 20,
    marginTop: 25,
  },
  btn2: {
    alignSelf: "center",
    width: 100,
    padding: 10,
    borderColor: "#77CEC6",
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 50,
    marginTop: 25,
  },
});
