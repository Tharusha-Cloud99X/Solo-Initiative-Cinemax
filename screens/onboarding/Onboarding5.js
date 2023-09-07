import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Onboarding5 = () => {
  const img1 = require('../../assets/images/onboarding5.png');
  const slider = require('../../assets/images/Slider2.png');
  const nextBtn = require('../../assets/images/NextBtn1.png');

  const navigation = useNavigation();

  return (
    <View style={styles.window}>
      <Image source={img1} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle1}>
          Offers ad-free viewing of high quality
        </Text>
        <Text style={styles.textStyle2}>
          Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,
          lacreet id sem semper parturient.
        </Text>
        <View style={styles.lastSection}>
          <Image source={slider} />
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding6')}>
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
    width: 315,
    height: 339,
    alignSelf: 'center',
    marginTop: 20,
  },
  textContainer: {
    backgroundColor: '#171725',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginRight: 32,
    height: 341,
    marginTop: '1%',
    paddingBottom: 40,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 32,
    marginLeft: 32,
    marginRight: 32,
    width: 263,
  },
  textStyle2: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginLeft: 32,
    marginRight: 32,
    fontSize: 14,
    marginTop: 14,
    width: 260,
  },
  lastSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 130,
    marginTop: 47,
  },
});

export default Onboarding5;
