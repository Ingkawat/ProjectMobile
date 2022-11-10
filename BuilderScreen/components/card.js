import React from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { Card, Avatar} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 


const Cards = () => {
  return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <Card>
                <TextInput returnKeyType='done' autoCorrect={false} style={styles.textinput} placeholder="List name" />
            </Card>
            <View style={{justifyContent: 'center'}}>
                <Card>
                    <TextInput returnKeyType='done' autoCorrect={false} style={styles.textinput2} placeholder="Money" />
                </Card>
            </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.roundbtn}> 
            <Text style={styles.roundbtntext}>+</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'flex-end', marginLeft: 10}}>
          <TouchableOpacity style={{marginLeft:30, marginBottom:5, zIndex: 1}}>
                <Avatar.Text
                label='-'
                labelStyle={{fontSize: 30}}
                size={25}
                backgroundColor='#5A6199'
                
            />
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:-22}}>
                <Avatar.Image
                size={50}
                backgroundColor='#F06B6D'
            />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'flex-end', marginLeft: 170}}>
          <FontAwesome name="trash-o" size={30} color="#F06B6D"/>
          </View>
        </View>
        <View style={styles.container2}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.roundbtn2}> 
                    <Text style={styles.roundbtntext}>+</Text>
                </TouchableOpacity>
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight:'bold', marginLeft:10}}>New list</Text>
                </View>
            </View>
        </View>
      </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    width:350,
    height:120,
    backgroundColor: '#FFF8EF',
    borderColor: '#525EBC',
    borderRadius: 20,
    borderWidth: 3,
  },
  container2:{
    alignSelf:'center',
    width:350,
    height:55,
    borderRadius:20,
    backgroundColor: '#FCC046',
    marginTop:50,
  },
  textinput: {
    backgroundColor: '#FFF8EF',
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width:130,
    marginLeft: 20,
    marginTop: 10,
  },
  textinput2: {
    textAlign:'center',
    backgroundColor: '#FFF8EF',
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width:50,
    marginLeft: 130,
    marginTop: 10,
  },
  roundbtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FCC046',
    marginLeft: 10,
    marginTop: 20,
  },
  roundbtn2: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#F06B6D',
    marginLeft: 20,
    
  },
  roundbtntext:{
    fontSize:26,
    fontWeight: "bold",
  },
});
