import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SignUp = ({route, navigation}) => {
  console.log(route.params)
  const {roomNo} = route.params;
  const [newBoarderInfo, setNewBoarderInfo] = useState({});

  const handleInputField = (value) => {
    setNewBoarderInfo({ ...newBoarderInfo, ...value ,roomNo: roomNo});
    console.log(newBoarderInfo)
  };

  const handleRegisterBtn = () => {
    fetch("https://thawing-meadow-93763.herokuapp.com/addBoarder",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBoarderInfo),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data && alert("boarder info added successfully")
    })
  }

  return (<View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.containerText}>Register for room no: {roomNo}</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            borderRadius: 20,
            padding: 10,
          }}
          onChangeText={(value)=> handleInputField({name:value})}
          placeholder="  Enter your Name"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            borderRadius: 20,
            padding: 10,
          }}
          onChangeText={(value)=> handleInputField({email:value})}
          placeholder="  Enter email"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            borderRadius: 20,
            padding: 10,
          }}
          onChangeText={(value)=> handleInputField({password:value})}
          placeholder="  Enter password"
        />
        <View style={{ width: "40%", marginLeft: 70 }}>
          <Button title="Register" onPress={handleRegisterBtn} />
        </View>
       
      </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
     flex:1,
     justifyContent: "center",
     alignItems: "center",
  },
  containerText: {
    paddingBottom: 10,
    fontSize:18
  },
  inputContainer: {
    width: "70%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});

export default SignUp;
