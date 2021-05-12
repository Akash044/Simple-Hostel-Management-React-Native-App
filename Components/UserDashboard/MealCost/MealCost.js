import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,TextInput,ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

const MealCost = props => {
  const [search, setSearch] = useState({});
  const [mealData, setMealData] = useState([])
  const [matchedMeals, setMatchedMeals] = useState([])

   
  useEffect(() => {
    fetch(`https://thawing-meadow-93763.herokuapp.com/boarderMeal/${props.email}`)
    .then(res => res.json())
    .then(data => {
    //   console.log(data);
      setMealData(data);
    });

  },[])
  const handleInputField = value => {
    setSearch({...search, ...value});
    // console.log(search);
  };
  const handleCheckMealCost = () => {
    // console.log(search);
    const matchedMeals = mealData.filter(meal => parseInt(meal.year) == parseInt(search.year) && parseInt(meal.month) == parseInt(search.month));
    // console.log(matchedMeals)
    setMatchedMeals(matchedMeals)

  }
  return (
    <View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput
          style={styles.input}
          onChangeText={value => handleInputField({month: value})}
          placeholder="Month"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={value => handleInputField({year: value})}
          placeholder="Year"
          keyboardType="numeric"
        />
      </View>
      
      <View style={{flexDirection:"row",justifyContent:"center",marginTop:10}}>
        <Button
          title="Check"
          onPress={handleCheckMealCost}
        />
      </View>
      <View style={{flexDirection:"row",justifyContent:"center",marginTop:10}}>
        <Button
          title="go back meal page"
          onPress={() => props.handleMealCost(false)}
        />
      </View>
      <Text style={styles.text}> Date{"          "} Morning{" "} Lunch{" "} Dinner</Text>
      <ScrollView style={styles.scrollView}>
        {
        matchedMeals?.map((matched) => <Text key={matched._id} style={styles.text}> {matched.date}      {matched.morning}            {matched.lunch}             {matched.dinner} </Text>)
        }
      </ScrollView>

    </View>
  );
};

export default MealCost;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    width: 220,
    borderRadius: 10,
    padding: 10,
  },
  scrollView: {
    backgroundColor: 'pink',
    // marginHorizontal: 20,
    marginVertical:10,
  },
  text: {
    fontSize: 22,
    backgroundColor:"salmon",
    borderRadius:10,
    marginTop:5,
  },
});
