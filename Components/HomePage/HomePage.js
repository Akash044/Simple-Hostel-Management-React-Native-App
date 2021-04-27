import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomePage = ({ navigation }) => {
  
  
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.containerText}>Welcome to LT. Selim Hall</Text>
        <Text style={styles.containerText}>
          To see your dashboard please login...
        </Text>
        <Button
          title="Go to Login page"
          onPress={() => navigation.navigate("Login")}
        />
        <Text style={styles.containerText}>
          Want room? please search..
        </Text>
        <Button
          title="Search"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-between",
    
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // margin: 40,
    // elevation:4,
    // borderRadius:10
  },
  containerText: {
    padding: 10,
  },
});

export default HomePage;
