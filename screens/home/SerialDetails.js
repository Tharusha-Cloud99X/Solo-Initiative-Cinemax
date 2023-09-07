import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const SerialDetails = () => {
  const bgImage = require('../../assets/images/BgRiverdale.png');
  const heart = require('../../assets/images/heart.png');
  const back = require('../../assets/images/BackArrow.png');
  const calendar = require('../../assets/images/calendar.png');
  const clock = require('../../assets/images/clock.png');
  const film = require('../../assets/images/film.png');
  const vector = require('../../assets/images/Vector1.png');
  const star = require('../../assets/images/star.png');
  const playButton = require('../../assets/images/Trailerbutton.png');
  const download = require('../../assets/images/Download2B.png');
  const download1 = require('../../assets/images/Download11.png');
  const share = require('../../assets/images/Share.png');
  const avatar = require('../../assets/images/Avatar.png');
  const close = require('../../assets/images/Close.png');
  const fb = require('../../assets/images/Facebook1.png');
  const insta = require('../../assets/images/Instagram.png');
  const messenger = require('../../assets/images/Messenger.png');
  const telegram = require('../../assets/images/Telegram.png');
  const arrowDown = require('../../assets/images/arrow-ios-back.png');
  const image = require('../../assets/images/Group22583.png');

  const navigation = useNavigation();

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [season, setSeason] = React.useState('Season 2');
  return (
    <View style={styles.window}>
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={bgImage}
            resizeMode="cover"
            style={{height: 552, width: 'auto'}}
          />
          <LinearGradient
            colors={['rgba(31,29,43,0.6)', 'rgba(31,29,43,1)']} // Define gradient colors and opacity
            style={styles.gradientOverlay}
          />
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MostPopular')}>
              <Image source={back} />
            </TouchableOpacity>
            <Text style={styles.title}>Riverdale</Text>
            <Image source={heart} />
          </View>
          <Image source={bgImage} style={styles.image} />
          <View style={{flexDirection: 'row', gap: 12, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={calendar} />
              <Text style={styles.textStyle1}>2021</Text>
            </View>
            <Image source={vector} />
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={clock} />
              <Text style={styles.textStyle1}>148 Minutes</Text>
            </View>
            <Image source={vector} />
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={film} />
              <Text style={styles.textStyle1}>Action</Text>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              gap: 5,
              marginTop: 8,
            }}>
            <Image source={star} />
            <Text style={styles.textStyle2}>4.5</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              alignSelf: 'center',
              marginTop: 24,
            }}>
            <TouchableOpacity>
              <Image source={playButton} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={download} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image source={share} />
            </TouchableOpacity>
          </View>
          <Modal animationType="slide" transparent={true} visible={open}>
            <View style={{flex: 1, backgroundColor: 'rgba(31,29,43, 0.9)'}}>
              <View style={styles.centeredModal}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    onPress={() => setOpen(false)}
                    style={{alignSelf: 'flex-end'}}>
                    <Image source={close} />
                  </TouchableOpacity>
                  <Text style={[styles.textStyle3, {fontSize: 18}]}>
                    Share to
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 16,
                      marginTop: 48,
                      marginBottom: 10,
                    }}>
                    <TouchableOpacity>
                      <Image source={fb} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image source={insta} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image source={messenger} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image source={telegram} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <View style={styles.story}>
            <View style={{gap: 5, marginRight: 24}}>
              <Text style={styles.title}>Story Line</Text>
              <Text style={styles.description}>
                Originally a story from Archie Comics which started in 1941,
                Riverdale centres around a group of high school students who are
                shocked by the death of classmate, Jason Blossom. Together
                theyunravel the secrets of Riverdale and who
                <Text style={{color: '#12CDD9'}}> More</Text>
              </Text>
            </View>
            <View style={{gap: 5, marginBottom: 20}}>
              <Text style={styles.title}>Cast and Crew</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginTop: 5, gap: 12}}>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image source={avatar} />
                  <View>
                    <Text style={styles.textStyle3}>Jon Watts</Text>
                    <Text style={styles.textStyle4}>Directors</Text>
                  </View>
                </View>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image source={avatar} />
                  <View>
                    <Text style={styles.textStyle3}>Chris McKenna</Text>
                    <Text style={styles.textStyle4}>Writers</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                  }}>
                  <Image source={avatar} />
                  <View>
                    <Text style={styles.textStyle3}>Erik Sommers</Text>
                    <Text style={styles.textStyle4}>Writers</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={{marginTop: -10, marginBottom: 30}}>
              <Text style={styles.title}>Episode</Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  gap: 5,
                  marginTop: 16,
                  alignItems: 'center',
                  width: 93,
                }}
                onPress={() => setOpen1(true)}>
                <Text style={styles.textStyle5}>{season}</Text>
                <Image source={arrowDown} />
              </TouchableOpacity>
              <View style={styles.episodeContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 16,
                      alignItems: 'center',
                    }}>
                    <Image source={image} />
                    <View style={{gap: 10}}>
                      <Text style={styles.premium}>Premium</Text>
                      <Text style={styles.textStyle4}>1h30m</Text>
                      <Text style={styles.textStyle5}>Episode 1</Text>
                    </View>
                  </View>
                  <Image source={download1} />
                </View>
                <Text style={styles.textStyle6}>
                  Football player who longs to write his own music. It’s not all
                  smiles for this hunk though after he gets involved with his
                  music teacher.
                </Text>
              </View>
              <View style={styles.episodeContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 16,
                      alignItems: 'center',
                    }}>
                    <Image source={image} />
                    <View style={{gap: 10}}>
                      <Text style={styles.premium}>Premium</Text>
                      <Text style={styles.textStyle4}>1h30m</Text>
                      <Text style={styles.textStyle5}>Episode 2</Text>
                    </View>
                  </View>
                  <Image source={download1} />
                </View>
                <Text style={styles.textStyle6}>
                  Football player who longs to write his own music. It’s not all
                  smiles for this hunk though after he gets involved with his
                  music teacher.
                </Text>
              </View>
            </View>
            <Modal animationType="slide" transparent={true} visible={open1}>
              <View style={{flex: 1, backgroundColor: 'rgba(31,29,43, 0.9)'}}>
                <View style={styles.centeredModal}>
                  <View style={styles.modalView}>
                    <TouchableOpacity
                      onPress={() => setOpen1(false)}
                      style={{alignSelf: 'flex-end'}}>
                      <Image source={close} />
                    </TouchableOpacity>
                    <View style={{gap: 20, alignItems: 'center'}}>
                      <Text style={styles.selectedText}>Season 1</Text>
                      <Text style={styles.normalText}>Season 2</Text>
                      <Text style={styles.normalText}>Season 3</Text>
                      <Text style={styles.normalText}>Season 4</Text>
                      <Text style={styles.normalText}>Season 5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
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
    position: 'relative', // To allow absolute positioning of child elements
  },
  gradientOverlay: {
    position: 'absolute',
    width: '100%',
    height: 552,
  },
  header: {
    marginTop: -520,
    marginLeft: 28,
    marginRight: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 16,
  },
  textStyle1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
  textStyle2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#FF8700',
  },
  story: {
    marginLeft: 24,
    marginTop: 24,
    justifyContent: 'space-between',
    gap: 24,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#EBEBEF',
  },
  textStyle3: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#fff',
  },
  textStyle4: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#92929D',
  },

  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#252836',
    borderRadius: 16,
    width: '90%',
    padding: 35,
    alignItems: 'center',
  },
  textStyle5: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  episodeContainer: {
    height: 212,
    marginTop: 24,
    marginRight: 24,
    borderRadius: 16,
    backgroundColor: '#252836',
    gap: 11,
    padding: 12,
  },
  premium: {
    backgroundColor: '#FF8700',
    color: '#fff',
    borderRadius: 6,
    width: 65,
    height: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textStyle6: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#EBEBEF',
    height: 88,
    width: 282,
  },
  selectedText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: '#fff',
  },
  normalText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#696974',
  },
});

export default SerialDetails;
