import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, ThemeProvider} from 'react-native-elements';

const AddNewRoom = () => {
  return (
    <View style={styles.container}>
      <Text>this is adding new room</Text>

      <Input
        placeholder="Enter Room No."
        leftIcon={<Icon name="sign-in" size={24} color="black" />}
      />
      <Input
        placeholder="Enter Description"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Enter Room No."
        leftIcon={<Icon name="users" size={24} color="black" />}
      />
    </View>
  );
};

export default AddNewRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
