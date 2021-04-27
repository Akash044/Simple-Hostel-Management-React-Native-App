import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AddNewRoom from '../AddNewRoom/AddNewRoom';
import ManageRoom from '../ManageRoom/ManageRoom';
import ManageMeal from '../ManageMeal/ManageMeal';
import ManageRent from '../ManageRent/ManageRent';
import ManageBoarder from '../ManageBoarder/ManageBoarder';

const Tab = createMaterialBottomTabNavigator();

const AdminBottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName="AddRoom"
     activeColor="white"
     barStyle={{ backgroundColor: 'blue',color: 'white'}}>
      <Tab.Screen name="AddRoom" component={AddNewRoom}
      options={{
        tabBarLabel: 'Add Room',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ), 
      }} 
      />
      <Tab.Screen name="MRoom" component={ManageRoom} 
       options={{
        tabBarLabel: 'Manage Room',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="MMeal" component={ManageMeal} 
       options={{
        tabBarLabel: 'Manage Meal',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="MRent" component={ManageRent} 
       options={{
        tabBarLabel: 'Manage Rent',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="MBoarder" component={ManageBoarder} 
       options={{
        tabBarLabel: 'Manage Boarder',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
    )
}

export default AdminBottomTabs

const styles = StyleSheet.create({})
