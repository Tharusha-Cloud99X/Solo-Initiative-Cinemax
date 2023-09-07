import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Onboarding2 = () => {
  const img1 = require('../../assets/images/onboarding2img.png');
  const background = require('../../assets/images/onboarding2.png');
  const slider = require('../../assets/images/Slider2.png');
  const nextBtn = require('../../assets/images/NextBtn1.png');

  const navigation = useNavigation();

  return (
    <View style={styles.window}>
      <View>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={{height: 421, flex: 1}}
        />
        <Image source={img1} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle1}>
          Lorem ipsum dolar sit amet consecteur esplicit
        </Text>
        <Text style={styles.textStyle2}>
          Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,
          lacreet id sem semper parturient.
        </Text>
      </View>
      <View style={styles.lastSection}>
        <Image source={slider} />
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding3')}>
          <Image source={nextBtn} />
        </TouchableOpacity>
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
    marginTop: 10,
    width: 'auto',
    height: 420,
  },
  textContainer: {
    marginTop: 46,
    width: 264,
    height: 157,
    alignSelf: 'center',
    alignItems: 'center',
    gap: 14,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 18,
  },
  textStyle2: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    width: 260,
    fontSize: 14,
  },
  lastSection: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: '2%',
  },
});

export default Onboarding2;
