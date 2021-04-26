import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserDashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <Text onPress={() => navigation.navigate('UserProfile')}>Profile</Text>
      </View>
      <View style={{margin: 10}}>
        <Text onPress={() => navigation.navigate('UserRent')}>Rent</Text>
      </View>
      <View style={{margin: 10}}>
        <Text onPress={() => navigation.navigate('UserMeal')}>Meal</Text>
      </View>
      <View style={{margin: 10}}>
        <Text onPress={() => navigation.navigate('UserGuest')}>Guest</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    elevation: 4,
    borderRadius: 10,
  },
  containerText: {
    paddingBottom: 10,
  },
});
export default UserDashboard;
