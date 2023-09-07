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

const NewPassword = () => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setconfirmPassword] = React.useState('');

  const back = require('../../assets/images/BackArrow.png');
  const eyeOff = require('../../assets/images/eye-off.png');

  const navigation = useNavigation();

  const handlePasswordChange = pass => {
    setPassword(pass);
  };
  const handlePasswordChange1 = pass => {
    setconfirmPassword(pass);
  };
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
          <Image source={back} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.textStyle1, {marginTop: 46}]}>
        Create New Password
      </Text>
      <Text style={[styles.textStyle2, {marginTop: 10}]}>
        Enter your new password
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={styles.passwordLabel}>New Password</Text>
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
        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={[styles.passwordLabel, {width: 120}]}>
              Confirm Password
            </Text>
            <TextInput
              style={styles.inputField}
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={handlePasswordChange1}
              // placeholder="••••••••••••••••••••••••"
              // placeholderTextColor="rgba(146, 146, 157, 1)"
            />
          </View>
          <TouchableOpacity>
            <Image source={eyeOff} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Reset</Text>
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
    fontFamily: 'Montserrat-SemiBold',
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
  textStyle3: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  passwordLabel: {
    color: '#EBEBEF',
    marginTop: -5,
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    width: 90,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  inputContainer: {
    gap: 32,
    marginTop: 72,
    width: 327,
    height: 146,
    alignSelf: 'center',
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
  termsSection: {
    width: 326,
    height: 38,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 15,
    marginTop: 16,
    marginLeft: 10,
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

export default NewPassword;
