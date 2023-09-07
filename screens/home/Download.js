import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Download = () => {
  const back = require('../../assets/images/BackArrow.png');
  const img = require('../../assets/images/DownImage.png');
  const img1 = require('../../assets/images/DownImage1.png');
  const download = require('../../assets/images/download2.png');
  const vector = require('../../assets/images/Vector2.png');
  const folder = require('../../assets/images/folder1.png');

  const navigation = useNavigation();

  const [downloads, setDownloads] = React.useState(1);
  return (
    <View style={styles.window}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={back} />
          </TouchableOpacity>
          <Text style={styles.title}>Download</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        {downloads !== 0 ? (
          <View>
            <View style={styles.card}>
              <Image source={img} />
              <View style={{gap: 8}}>
                <Text style={styles.textStyle1}>Action</Text>
                <Text style={styles.textStyle2}>Spider-Man No Way Home</Text>
                <View style={{flexDirection: 'row', gap: 8}}>
                  <Image source={download} />
                  <Text style={styles.textStyle3}>1.25 of 1.78 GB</Text>
                  <Image source={vector} />
                  <Text style={styles.textStyle3}>75%</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={img1} />
              <View style={{gap: 8}}>
                <Text style={styles.textStyle1}>Action</Text>
                <Text style={styles.textStyle2}>Spider-Man No Way Home</Text>
                <View style={{flexDirection: 'row', gap: 8}}>
                  <Text style={styles.textStyle3}>Movie</Text>
                  <Image source={vector} />
                  <Text style={styles.textStyle3}>1.78 GB</Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <Image source={folder} />
            <Text style={styles.title}>There is no movie yet!</Text>
            <Text style={[styles.textStyle3, {textAlign: 'center'}]}>
              Find your movie by Type title, categories, years, etc{' '}
            </Text>
          </View>
        )}
      </View>
      <BottomNavigation />
    </View>
  );
};
const BottomNavigation = () => {
  const home = require('../../assets/images/home1.png');
  const search = require('../../assets/images/search1.png');
  const download = require('../../assets/images/downloadB.png');
  const person = require('../../assets/images/person.png');

  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.navTab}>
          <Image source={home} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.navTab}>
          <Image source={search} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Download')}>
        <View style={styles.activeNavTab}>
          <Image source={download} />
          <Text style={styles.navText}>Download</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.navTab}>
          <Image source={person} />
        </View>
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
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  textStyle1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#EBEBEF',
  },
  textStyle2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#fff',
    width: 166,
  },
  textStyle3: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
  card: {
    height: 107,
    backgroundColor: '#252836',
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
    paddingLeft: 24,
  },
  container: {
    height: 164,
    width: 252,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 169,
    flex: 1,
    gap: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    gap: 17,
    height: 72,
    paddingLeft: 39,
    paddingRight: 39,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F1D2B',
    width: 'auto',
  },
  navTab: {
    width: 48,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavTab: {
    width: 116,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#252836',
    borderRadius: 16,
  },
  navText: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
});

export default Download;
