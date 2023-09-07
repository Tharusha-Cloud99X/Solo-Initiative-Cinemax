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

const Onboarding4 = () => {
  const img1 = require('../../assets/images/onboarding4.png');
  const slider = require('../../assets/images/Slider1.png');
  const nextBtn = require('../../assets/images/NextBtn.png');

  const navigation = useNavigation();

  return (
    <View style={styles.window}>
      <ImageBackground
        source={img1}
        resizeMode="cover"
        style={{height: 800, width: 'auto'}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle1}>
          The biggest international and local film streaming
        </Text>
        <Text style={styles.textStyle2}>
          Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,
          lacreet id sem semper parturient.
        </Text>
        <View style={styles.lastSection}>
          <Image source={slider} />
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding5')}>
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
  textContainer: {
    marginTop: '-110%',
    backgroundColor: '#171725',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 24,
    height: 341,
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

export default Onboarding4;
