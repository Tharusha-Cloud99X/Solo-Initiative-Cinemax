import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

//import auth from '@react-native-firebase/auth';

const LoginScreen1 = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const back = require('../../assets/images/BackArrow.png');
  const eyeOff = require('../../assets/images/eye-off.png');

  const navigation = useNavigation();

  const handleEmailChange = emailText => {
    setEmail(emailText);
  };
  const handlePasswordChange = pass => {
    setPassword(pass);
  };

  const handleLogin = async () => {
    if (email !== '' && password !== '') {
      try {
        await auth().signInWithEmailAndPassword(email, password);
        console.log('Logged in successfully');
      } catch (error) {
        console.error('Error signing in:', error);
      }
    } else {
      console.log('Please Provide an Email and Password');
    }
  };

  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image source={back} />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
        <View style={{width: 24, height: 24}} />
      </View>
      <Text style={[styles.textStyle1]}>Hi, Tiffany</Text>
      <Text style={[styles.textStyle2, {width: 177, marginTop: 10}]}>
        Welcome back! Please enter your details.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={styles.emailLabel}>Email Address</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Tiffanyjearsey@gmail.com"
              placeholderTextColor="rgba(146, 146, 157, 1)"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
        </View>
        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={styles.passwordLabel}>Password</Text>
            <TextInput
              style={styles.inputField}
              secureTextEntry={true}
              value={password}
              onChangeText={handlePasswordChange}
              // placeholder="••••••••••••••••••••••••"
              // placeholderTextColor="rgba(146, 146, 157, 1)"
            />
          </View>
          <TouchableOpacity>
            <Image source={eyeOff} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{width: 112, alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.textStyle3}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  header: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 24,
  },
  textStyle2: {
    color: '#EBEBEF',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 12,
  },
  textStyle3: {
    marginTop: -20,
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  emailLabel: {
    width: 90,
    height: 15,
    color: '#EBEBEF',
    marginTop: -5,
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  passwordLabel: {
    color: '#EBEBEF',
    marginTop: -5,
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    width: 65,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  inputContainer: {
    gap: 32,
    marginTop: 72,
    width: 327,
    height: 169,
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputFieldContainer: {
    width: 327,
    height: 53,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#252836',
  },
  inputField: {
    width: 263,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: 'rgba(146, 146, 157, 1)',
    paddingLeft: 15,
    paddingBottom: 20,
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#12CDD9',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
});

export default LoginScreen1;
