import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = () => {
  const img1 = require('../../assets/images/Logo1.png');
  const google = require('../../assets/images/Google.png');
  const apple = require('../../assets/images/Apple.png');
  const fb = require('../../assets/images/Facebook.png');

  const navigation = useNavigation();

  return (
    <View style={styles.window}>
      <View style={styles.container}>
        <Image source={img1} style={styles.image} />
        <Text style={styles.textStyle1}>CINEMAX</Text>
        <Text style={styles.textStyle2}>
          Enter your registered Phone Number to Sign Up
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          alignSelf: 'center',
          marginTop: 34,
        }}>
        <Text style={styles.textStyle3}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen1')}>
          <Text style={[styles.textStyle3, {color: '#12CDD9'}]}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <View style={styles.line} />
        <Text style={[styles.textStyle3, {fontSize: 14}]}>Or Sign Up With</Text>
        <View style={styles.line} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 24,
          alignSelf: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity>
          <Image source={google} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={apple} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={fb} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#171725',
  },
  container: {
    gap: 10,
    marginTop: '20%',
  },
  image: {
    alignSelf: 'center',
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
    width: 190,
    fontSize: 14,
    marginTop: 5,
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
  textStyle3: {
    color: '#92929D',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  container1: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  line: {
    height: 2,
    backgroundColor: '#252836',
    width: 62,
  },
});

export default LoginScreen;
