import React, {createContext, useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard';
import UserMealStatus from './Components/UserDashboard/UserMealStatus/UserMealStatus';
import UserProfile from './Components/UserDashboard/UserProfile/UserProfile';
import UserRentStatus from './Components/UserDashboard/UserRentStatus/UserRentStatus';
import SignUp from './Components/SignUp/SignUp';
import UserGuest from './Components/UserDashboard/UserGuest/UserGuest';
import SearchResult from './Components/SearchResult/SearchResult';
import ManageMeal from './Components/AdminDashBoard/ManageMeal/ManageMeal';
import ManageRent from './Components/AdminDashBoard/ManageRent/ManageRent';
import ManageRoom from './Components/AdminDashBoard/ManageRoom/ManageRoom';
import ManageBoarder from './Components/AdminDashBoard/ManageBoarder/ManageBoarder';

const screenStack = createStackNavigator();

export const userContext = createContext();

const App = () => {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <userContext.Provider value={[loggedUser, setLoggedUser]}>
      <SafeAreaProvider>
        <NavigationContainer>
          <screenStack.Navigator initialRouteName="Home">
            {/* <screenStack.Screen name="Admin" component={AdminDashBoard} />
                <screenStack.Screen name="Home" component={HomePage} />
                <screenStack.Screen name="Login" component={LoginPage} />
                <screenStack.Screen name="SignUp" component={SignUp} />
                <screenStack.Screen name="Search" component={SearchResult} />
                <screenStack.Screen name="User" component={UserDashboard} /> */}

            {loggedUser.isAdmin ? (
              <screenStack.Screen name="Admin" component={AdminDashBoard} />
            ) : loggedUser.isUser ? ( 
              <screenStack.Screen name="User" component={UserDashboard} />
            ) : (
              <>
                <screenStack.Screen name="Home" component={HomePage} />
                <screenStack.Screen name="Login" component={LoginPage} />
                <screenStack.Screen name="SignUp" component={SignUp} />
                <screenStack.Screen name="Search" component={SearchResult} />
              </>
            )}
          </screenStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </userContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

{
  /* <screenStack.Screen name="MMeal" component={ManageMeal} />
            <screenStack.Screen name="MRent" component={ManageRent} />
            <screenStack.Screen name="MRoom" component={ManageRoom} />
            <screenStack.Screen name="MBoarder" component={ManageBoarder} /> */
}

{
  /* <screenStack.Screen name="UserMeal" component={UserMealStatus} />
      <screenStack.Screen name="UserRent" component={UserRentStatus} />
      <screenStack.Screen name="UserProfile" component={UserProfile} />
      <screenStack.Screen name="UserGuest" component={UserGuest} /> */
}
