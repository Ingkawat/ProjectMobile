import React from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import { Avatar} from "react-native-paper";
import Card from "../components/card"

function UnEqualDivisionScreen({navigation}){
  return (
    <View style={styles.container} navigation={navigation}>
        <TextInput returnKeyType='next' autoCorrect={false} style={styles.textinput} placeholder="Bill Name" 
       />

        <TextInput returnKeyType='next' autoCorrect={false} style={styles.textinput}  placeholder="Place" 
        />
        
        <TextInput returnKeyType='done' autoCorrect={false} style={styles.textinput}  placeholder="Date" 
        />
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity style={styles.roundbtn}> 
            <Text style={styles.roundbtntext}>+</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            <Text style={{marginLeft:15, marginTop:15}} >Invite friend</Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginLeft: 90}}>
            <TouchableOpacity>
                <Avatar.Image
                size={50}
                backgroundColor='#F06B6D'
            />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'flex-end', marginLeft: -20}}>
            <TouchableOpacity>
                <Avatar.Image
                size={50}
                backgroundColor='#525EBC'
            />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'flex-end', marginLeft: -20}}>
            <TouchableOpacity>
                <Avatar.Image
                size={50}
                backgroundColor='#F3B537'
            />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontWeight: 'bold', marginLeft:30, marginTop:20, marginBottom:20}}>List name</Text>
        <Card/>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8EF',
  },

  textinput: {
    height: 30,
    width: 250,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 5,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  btn: {
    alignSelf: 'center',
    width: 150,
    padding: 10,
    backgroundColor: '#F06B6D',
    marginTop: 130,
    borderRadius: 10,
  },

  btntext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  roundbtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FCC046',
    marginLeft: 30,
    marginTop: 20,
  },

  roundbtntext:{
    fontSize:26,
    fontWeight: "bold",
  },
});

export default UnEqualDivisionScreen;
