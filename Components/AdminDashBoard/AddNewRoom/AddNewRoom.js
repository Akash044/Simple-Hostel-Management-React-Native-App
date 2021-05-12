import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import {Input, Button, ThemeProvider} from 'react-native-elements';
import  {launchImageLibrary}  from 'react-native-image-picker';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
// import RNFetchBlob from 'rn-fetch-blob'

const AddNewRoom = () => {
  const [newRoomInfo, setNewRoomInfo] = useState({});
  const [imageData, setImageData] = useState({});

  const handleInputField = value => {
    console.log(value);
    setNewRoomInfo({...newRoomInfo, ...value,vacantStatus:true});
    console.log(newRoomInfo);
  };

  const handleImgInput = () => {
 
  };
  
  const handleAddRoom = () => {
    console.log(newRoomInfo);
    fetch('https://thawing-meadow-93763.herokuapp.com/addRoom', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newRoomInfo),
    })
      .then(res => res.json())
      .then(data => {
        data && alert('room added successful');
      });
    

  };
  console.log(imageData);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Input
        placeholder="Enter Room No."
        leftIcon={<Icon name="sign-in" size={24} color="black" />}
        onChangeText={room => handleInputField({roomNo: room})}
      />
      <View >
        <Text>Select seat</Text>
      <Picker
        selectedValue={newRoomInfo.seat}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => handleInputField({seat: itemValue})}
      >
        <Picker.Item label="2 seat" value="2" />
        <Picker.Item label="3 seat" value="3" />
        <Picker.Item label="4 seat" value="4" />
      </Picker>
    </View>
      <Input
        placeholder="Enter Description"
        leftIcon={<Icon name="user" size={24} color="black" />}
        onChangeText={desc => handleInputField({description: desc})}
      />
     <View style={{flexDirection:"row",justifyContent:"center"}}>
     {/* <Button
        icons="image"
        title="Upload an image"
        onPress={handleImgInput}
      /> */}
     </View>
     <View style={{flexDirection:"row",justifyContent:"center",marginTop:10}}>
      <Button icons="plus" title="Add Room"  onPress={handleAddRoom} />
      {/* <Image
        source={{uri: imageData.uri}}
        style={{width: 200, height: 200}}
        PlaceholderContent={<ActivityIndicator />}
      /> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddNewRoom;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: 'center',
  
  }
});
