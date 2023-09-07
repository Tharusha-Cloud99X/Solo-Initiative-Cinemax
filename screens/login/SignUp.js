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

const Signup = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const back = require('../../assets/images/BackArrow.png');
  const eyeOff = require('../../assets/images/eye-off.png');
  const checkbox = require('../../assets/images/Checkbox.png');
  const checkbox1 = require('../../assets/images/Checkbox1.png');

  const navigation = useNavigation();

  const handleNameChange = name => {
    setName(name);
  };
  const handleEmailChange = emailText => {
    setEmail(emailText);
  };
  const handlePasswordChange = pass => {
    setPassword(pass);
  };
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image source={back} />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
        <View style={{width: 24, height: 24}} />
      </View>
      <Text style={[styles.textStyle1]}>Let's get started</Text>
      <Text style={[styles.textStyle2, {width: 177, marginTop: 10}]}>
        The latest movies and series and here
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={[styles.emailLabel, {width: 70}]}>Full Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Tiffany"
              placeholderTextColor="rgba(146, 146, 157, 1)"
              value={name}
              onChangeText={handleNameChange}
            />
          </View>
        </View>
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
      </View>
      <View style={styles.termsSection}>
        {checked ? (
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <Image source={checkbox1} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <Image source={checkbox} />
          </TouchableOpacity>
        )}
        <View style={{width: 226}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textStyle3}>I aggree to the </Text>
            <Text style={[styles.textStyle3, {color: '#12CDD9'}]}>
              Terms and Services
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textStyle3}>and </Text>
            <Text style={[styles.textStyle3, {color: '#12CDD9'}]}>
              Privacy Policy
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Sign Up</Text>
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
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  emailLabel: {
    width: 95,
    height: 15,
    color: '#EBEBEF',
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  passwordLabel: {
    color: '#EBEBEF',
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
    height: 231,
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
    paddingBottom: 22,
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

export default Signup;
