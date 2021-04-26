import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SignUp = (props) => {
  // console.log(props)
    const [userInfo, setUserInfo] = useState({});
  const handleInputField = (value) => {
    setUserInfo({ ...userInfo, ...value });
    console.log(userInfo)
  };
  return (
      <View style={styles.inputContainer}>
        <Text style={styles.containerText}>Sign up</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            borderRadius: 20,
            padding: 10,
          }}
          onTextInput={(e) => handleInputField({ name: e.nativeEvent.text })}
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
          onTextInput={(e) => handleInputField({ email: e.nativeEvent.text })}
          placeholder="  Enter your email"
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
          onTextInput={(e) =>
            handleInputField({ password: e.nativeEvent.text })
          }
          placeholder="  Enter password"
        />
        <View style={{ width: "40%", marginLeft: 70 }}>
          <Button title="Sing up"  />
        </View>
        <Text style={{ margin: 10 }}>
          Already have an account? 
          <Text onPress={() => props.handleIsUser(true)} style={{ color: "blue",borderBottomColor:"blue",borderWidth:1 }}>
            sign in
          </Text>
        </Text>
      </View>
  );
};
const styles = StyleSheet.create({
  containerText: {
    paddingBottom: 10,
  },
  inputContainer: {
    width: "70%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});

export default SignUp;
