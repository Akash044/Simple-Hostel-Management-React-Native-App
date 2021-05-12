import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Item = (props) => (
  <View style={styles.item}>
    
    <Text style={styles.title}>Email: {props.item.email}</Text>
    <Text style={styles.title}>TrxID: {props.item.trxId}</Text>
    <Text style={styles.title}>Month: {props.item.month}</Text>
    <Text style={styles.title}>Year: {props.item.year}</Text>
    <Text style={styles.title}>Status: {props.item.status}</Text>
    <View>
        <Text style={{...styles.title, marginTop:10}}>Change Status</Text>
      <Picker
        selectedValue={props.item.status}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => props.handleChangeStatus({status:itemValue, trxID:props.item.trxId})}
      >
        <Picker.Item label="pending" value="pending" />
        <Picker.Item label="paid" value="paid" />
        <Picker.Item label="unsuccessful" value="unsuccessful" />
      </Picker>
    </View>
    
  </View>
);

const ManageRent = () => {
  const [rentStatus, setRentStatus] = useState([]);
  const [status, setStatus] = useState('');
  useEffect(() => {
    fetch('https://thawing-meadow-93763.herokuapp.com/paidRents')
      .then(res => res.json())
      .then(data => {
        const allPending = data.filter(element => element.status === 'pending');
        console.log(allPending);
        setRentStatus(data);
      });
  }, [status]);

  const handleChangeStatus = (rent) => {
    console.log(rent.status);
    fetch(`https://thawing-meadow-93763.herokuapp.com/paidRents/${rent.trxID}`,{
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({status:rent.status}),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data && alert("payment status updated")
        setStatus(rent.status);
      });

  }

  const renderItem = ({item}) => <Item item={item} status={rentStatus.status} handleChangeStatus={handleChangeStatus}/>;

  return (
    <SafeAreaView>
      <FlatList
        data={rentStatus}
        renderItem={renderItem}
        keyExtractor={item => item.trxId}
      />
    </SafeAreaView>
  );
};

export default ManageRent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:20,
  },
  title: {
    fontSize: 18,
  },
});
