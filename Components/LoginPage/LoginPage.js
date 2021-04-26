import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import {GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

const LoginPage = ({navigation}) => {
  const [isUser, setIsUser] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '522802067123-fsqon54096gp8rv6ofhbqv7o249ar97i.apps.googleusercontent.com',
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
      console.log(userInfo.user.id);
      userInfo.user.id && navigation.push("User");
    } catch (error) {
      console.log({error});
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  // Handle user state changes

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
