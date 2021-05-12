import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';

const Item = (props) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      Room No.{'            '} Seat {'            '} Status
    </Text>
    <Text style={styles.title}>
      {props.item.roomNo} {'                         '} {props.item.seat} {'         '}{props.item.vacantStatus}
    </Text>
    <View style={{flexDirection:"row",justifyContent:"center",marginTop:10}}>
      <Button title="Book Now"  onPress={() =>props.handleSearch(props.item.roomNo)} />
    </View>

  </View>
);

const SearchResult = ({navigation}) => {
  const [vacantRooms, setVacantRooms] = useState([]);
  useEffect(() => {
    fetch('https://thawing-meadow-93763.herokuapp.com/allRooms')
      .then(res => res.json())
      .then(rooms => {
        const vacRooms = rooms.filter(room => room.vacantStatus === true);
        setVacantRooms(vacRooms);
      });
  }, []);

  const handleSearch = (value) => {
    navigation.navigate("SignUp",{
        roomNo: value,
    })
  };
  const renderItem = ({item}) => <Item item={item} handleSearch={handleSearch}/>;
  return (
    <View>
      <FlatList
        data={vacantRooms}
        renderItem={renderItem}
        keyExtractor={item => item.roomNo}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
});
