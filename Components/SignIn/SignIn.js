import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


const SignIn = (props) => {
  console.log(props)
  const [userInfo, setUserInfo] = useState({});
  const [isUser, setIsUser] = useState(true);
  const handleInputField = (value) => {
    setUserInfo({ ...userInfo, ...value });
    // console.log(userInfo)
  };
  
  const handleEmailPassSignIn = () => {
    
    navigation.navigate("Admin");
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
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:10}}>
          <Button title="Sing in" onPress={handleEmailPassSignIn} />
        </View>
      </View>  
    </View>
  );
};
const styles = StyleSheet.create({
  containerText: {
    paddingBottom: 10,
  },
  inputContainer: {
    width: "90%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});

export default SignIn;
