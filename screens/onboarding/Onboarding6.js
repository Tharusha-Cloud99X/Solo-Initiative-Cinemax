import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Onboarding6 = () => {
  const img1 = require('../../assets/images/onboarding6.png');
  const slider = require('../../assets/images/Slider3.png');
  const nextBtn = require('../../assets/images/NextBtn2.png');

  const navigation = useNavigation();

  return (
    <View style={styles.window}>
      <Image source={img1} style={styles.image} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.textStyle1}>
            Our service brings together your favourite series
          </Text>
          <Text style={styles.textStyle2}>
            Semper in cursus magna et eu varius nunc adipiscing. Elementum
            justo, lacreet id sem semper parturient.
          </Text>
        </View>
        <View style={styles.lastSection}>
          <Image source={slider} />
          <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
            <Image source={nextBtn} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  image: {
    marginTop: 50,
    alignSelf: 'center',
    marginRight: 40,
  },
  textContainer: {
    backgroundColor: '#171725',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 24,
    height: 341,
    marginTop: '1%',
    paddingBottom: 50,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 32,
    width: 263,
    marginLeft: 32,
    marginRight: 32,
  },
  textStyle2: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    width: 260,
    fontSize: 14,
    marginTop: 14,
    marginLeft: 32,
    marginRight: 32,
  },
  lastSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 130,
    marginTop: 47,
  },
});

export default Onboarding6;
