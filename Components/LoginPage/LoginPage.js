import React, {useState, useEffect, useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import {GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { userContext } from '../../App';
import { ScrollView } from 'react-native-gesture-handler';

const LoginPage = ({navigation}) => {
  const [isUser, setIsUser] = useState(true);
  const [loggedUser, setLoggedUser] = useContext(userContext);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:'522802067123-fsqon54096gp8rv6ofhbqv7o249ar97i.apps.googleusercontent.com',
      offlineAccess: true, 
      forceCodeForRefreshToken: true,
      
    });
  }, []);

  const handleIsUser = value => {
    setIsUser(value);
  };
  const handleGoogleSingIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({userInfo});
      console.log(userInfo.user);
      setLoggedUser({
        email : userInfo.user.email,
        id : userInfo.user.id,
        name : userInfo.user.familyName,
        photoUrl : userInfo.user.photo,
        isAdmin : false
      })
      console.log(loggedUser);
      // isAdmin(userInfo.user.email);
      // userInfo.user.id && navigation.push("User");
    } catch (error) {
      console.log({error});
    }
  };

  const isAdmin = (email) => {
    fetch(`http://192.168.0.107:8080/admin?email=${email}`)
    .then(res => res.json())
    .then(data => {
      console.log(loggedUser);
      if(data) {
        setLoggedUser({...loggedUser, isAdmin:true});
        navigation.push("Admin");
    }else{
      navigation.push("User");
    }

    })
  }

  return (
    <View style={styles.container}>
      {isUser ? (
        <SignIn handleIsUser={handleIsUser} />
      ) : (
        <SignUp handleIsUser={handleIsUser} />
      )}
      <View>
        <Text style={{marginLeft: 80, margin: 10}}>Or....</Text>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleSingIn}
        />
        {/* <Button title="Continue with Google" onPress={handleGoogleSingIn} /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});

export default LoginPage;
