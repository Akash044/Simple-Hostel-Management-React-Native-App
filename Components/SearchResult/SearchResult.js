import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SearchResult = () => {
    const [rooms, setRooms] = useState([]);
  useEffect(()=>{

  },[])

  const handleSearch = () => {

  }
    return (
        <View>
           {
               rooms?.map(room =>{
                   <View>
                       <Text>{room.name}</Text>
                   </View>
               })
           }
        </View>
    )
}

export default SearchResult

const styles = StyleSheet.create({})
