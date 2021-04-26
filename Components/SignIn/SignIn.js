import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


const SignIn = (props) => {
  // console.log(props)
  const [userInfo, setUserInfo] = useState({});
  const [isUser, setIsUser] = useState(true);
  const handleInputField = (value) => {
    setUserInfo({ ...userInfo, ...value });
    // console.log(userInfo)
  };
  
  const handleEmailPassSignIn = () => {
    
    // navigation.navigate("User");
  };

  return (
    <View>
        <View style={styles.inputContainer}>
        <Text style={styles.containerText}>Sign in</Text>
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
          <Button title="Sing in" onPress={handleEmailPassSignIn} />
        </View>
        <Text style={{ margin: 10 }}>
          Create a new account?
          <Text
            onPress={() => props.handleIsUser(false)}
            style={{ color: "blue",borderColor: "blue", borderWidth:5}}
          >
            sign up
          </Text>
        </Text>
      </View>  
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

export default SignIn;
