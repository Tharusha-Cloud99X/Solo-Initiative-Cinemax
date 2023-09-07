import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const img1 = require('../../assets/images/Logo.png');

  const navigation = useNavigation();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  });

  return (
    <View style={styles.window}>
      <View style={styles.container}>
        <Image source={img1} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 138,
    height: 138,
  },
});

export default SplashScreen;
