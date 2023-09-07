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
//import {TextInput} from '@react-native-material/core';

const ResetPassword = () => {
  const [email, setEmail] = React.useState('');

  const back = require('../../assets/images/BackArrow.png');

  const navigation = useNavigation();
  const handleEmailChange = emailText => {
    setEmail(emailText);
  };
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen1')}>
          <Image source={back} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.textStyle1, {marginTop: 46}]}>Reset Password</Text>
      <Text style={[styles.textStyle2, {marginTop: 10}]}>
        Recover your account password
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
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.btnText}>Next</Text>
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
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 50,
    marginTop: 30,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: 28,
  },
  textStyle2: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
  },
  emailLabel: {
    width: 95,
    height: 15,
    color: '#EBEBEF',
    marginTop: -20,
    marginLeft: 5,
    backgroundColor: '#1F1D2B',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  inputContainer: {
    gap: 32,
    marginTop: 72,
    width: 327,
    alignSelf: 'center',
  },
  inputFieldContainer: {
    width: 327,
    height: 53,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 8,
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
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#12CDD9',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
});

export default ResetPassword;
