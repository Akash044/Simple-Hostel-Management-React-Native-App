import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import UserProfile from '../UserProfile/UserProfile';
import UserRentStatus from '../UserRentStatus/UserRentStatus';
import UserMealStatus from '../UserMealStatus/UserMealStatus';
import UserGuest from '../UserGuest/UserGuest';

const Tab = createMaterialBottomTabNavigator();

const UserBottomTabs = () => {
  return (
     <Tab.Navigator initialRouteName="Profile"
     activeColor="white"
     barStyle={{ backgroundColor: 'blue',color: 'white'}}>
      <Tab.Screen name="Profile" component={UserProfile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ), 
      }} 
      />
      <Tab.Screen name="URent" component={UserRentStatus} 
       options={{
        tabBarLabel: 'Rent',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="UMeal" component={UserMealStatus} 
       options={{
        tabBarLabel: 'Meal',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="UGuest" component={UserGuest} 
       options={{
        tabBarLabel: 'Guest',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTabs;

const styles = StyleSheet.create({});
