import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomNavigation = () => {
  const home = require('../../assets/images/home.png');
  const search = require('../../assets/images/search1.png');
  const download = require('../../assets/images/download.png');
  const person = require('../../assets/images/person.png');

  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.activeNavTab}>
          <Image source={home} />
          <Text style={styles.textStyle3}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.navTab}>
          <Image source={search} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Download')}>
        <View style={styles.navTab}>
          <Image source={download} />
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

const Home = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState(1);
  const avatar = require('../../assets/images/Avatar.png');
  const heart = require('../../assets/images/heart.png');
  const searchImg = require('../../assets/images/search.png');
  const vector = require('../../assets/images/Vector1.png');
  const filter = require('../../assets/images/filter.png');
  const img1 = require('../../assets/images/movieImg1.png');
  const img2 = require('../../assets/images/movieImg2.png');
  const img3 = require('../../assets/images/movieImg3.png');
  const slider = require('../../assets/images/Slider22.png');
  const card1 = require('../../assets/images/Card1.png');
  const card2 = require('../../assets/images/Card2.png');
  const card3 = require('../../assets/images/Card3.png');

  const image1 = require('../../assets/images/Image1.png');
  const image2 = require('../../assets/images/Image2.png');
  const image3 = require('../../assets/images/Image3.png');
  const image4 = require('../../assets/images/Image5.png');
  const calendar = require('../../assets/images/calendar.png');
  const clock = require('../../assets/images/clock.png');
  const film = require('../../assets/images/film.png');
  const folder = require('../../assets/images/no-results1.png');

  // const images = [img1, img2, img3];
  // const screenWidth = Dimensions.get('window').width;

  const changeTab = tab => {
    setActiveTab(tab);
  };

  const [search, setSearch] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(1);

  const handleSearch = text => {
    setSearch(text);
  };

  const renderScreens = () => {
    if (search && searchResults !== 0) {
      return (
        <>
          <View style={styles.searchBar1}>
            <Image source={searchImg} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a title..."
              placeholderTextColor="#92929D"
              value={search}
              onChangeText={handleSearch}
            />
            <TouchableOpacity onPress={() => setSearch('')}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 12,
                  color: '#EBEBEF',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{gap: 16, marginTop: 30, marginBottom: 30}}>
            <View style={styles.movieContainer}>
              <Image source={image1} />
              <View style={{gap: 12}}>
                <Text style={styles.premium}>Premium</Text>
                <Text style={styles.textStyle1}>Spider-Man No Way..</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={calendar} />
                  <Text style={styles.textStyle2}>2021</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={clock} />
                  <Text style={styles.textStyle2}>148 Minutes</Text>
                  <Text style={styles.pgStyle}>PG-13</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={film} />
                  <Text style={styles.textStyle2}>Action</Text>
                  <Image source={vector} />
                  <Text style={[styles.textStyle2, {color: '#fff'}]}>
                    Movie
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.movieContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SerialDetails')}>
                <Image source={image2} />
              </TouchableOpacity>
              <View style={{gap: 12}}>
                <Text style={[styles.premium, {backgroundColor: '#12CDD9'}]}>
                  Free
                </Text>
                <Text style={styles.textStyle1}>Riverdale</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={calendar} />

                  <Text style={styles.textStyle2}>2021</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={clock} />
                  <Text style={styles.textStyle2}>148 Minutes</Text>
                  <Text style={styles.pgStyle}>PG-13</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={film} />
                  <Text style={styles.textStyle2}>Action</Text>
                  <Image source={vector} />
                  <Text style={[styles.textStyle2, {color: '#fff'}]}>
                    Movie
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.movieContainer}>
              <Image source={image3} />
              <View style={{gap: 12}}>
                <Text style={styles.premium}>Premium</Text>
                <Text style={styles.textStyle1}>Life of PI</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={calendar} />
                  <Text style={styles.textStyle2}>2021</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={clock} />
                  <Text style={styles.textStyle2}>148 Minutes</Text>
                  <Text style={styles.pgStyle}>PG-13</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={film} />
                  <Text style={styles.textStyle2}>Action</Text>
                  <Image source={vector} />
                  <Text style={[styles.textStyle2, {color: '#fff'}]}>
                    Movie
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.movieContainer}>
              <Image source={image4} />
              <View style={{gap: 12}}>
                <Text style={styles.premium}>Premium</Text>
                <Text style={styles.textStyle1}>The Jungle Waiting</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={calendar} />
                  <Text style={styles.textStyle2}>2021</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={clock} />
                  <Text style={styles.textStyle2}>148 Minutes</Text>
                  <Text style={styles.pgStyle}>PG-13</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={film} />
                  <Text style={styles.textStyle2}>Action</Text>
                  <Image source={vector} />
                  <Text style={[styles.textStyle2, {color: '#fff'}]}>
                    Movie
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    } else if (search === '') {
      return (
        <>
          <View style={styles.header}>
            <View
              style={{width: 254, height: 40, flexDirection: 'row', gap: 15}}>
              <Image source={avatar} />
              <View>
                <Text style={styles.textStyle1}>Hello, Smith</Text>
                <Text style={styles.textStyle2}>
                  Let's stream your favorite movie
                </Text>
              </View>
            </View>
            <Image source={heart} />
          </View>
          <View style={styles.searchBar}>
            <Image source={searchImg} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a title..."
              placeholderTextColor="#92929D"
              value={search}
              onChangeText={handleSearch}
            />
            <Image source={vector} />
            <Image source={filter} />
          </View>
          <View style={styles.movieSlider}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                height: 166,
                gap: 12,
                marginLeft: 24,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={img1} />
              <Image source={img2} />
              <Image source={img3} />
            </ScrollView>
          </View>
          <Image source={slider} style={{alignSelf: 'center'}} />
          <View style={styles.categories}>
            <Text style={styles.textStyle1}>Categories</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{flexDirection: 'row'}}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.tabs}>
                <TouchableOpacity onPress={() => changeTab(1)}>
                  <Text
                    style={
                      activeTab === 1
                        ? [styles.activeTab, {width: 80}]
                        : [styles.tab, {width: 80}]
                    }>
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeTab(2)}>
                  <Text
                    style={
                      activeTab === 2
                        ? [styles.activeTab, {width: 76}]
                        : [styles.tab, {width: 76}]
                    }>
                    Comedy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeTab(3)}>
                  <Text
                    style={
                      activeTab === 3
                        ? [styles.activeTab, {width: 90}]
                        : [styles.tab, {width: 90}]
                    }>
                    Animation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeTab(4)}>
                  <Text
                    style={
                      activeTab === 4
                        ? [styles.activeTab, {width: 111}]
                        : [styles.tab, {width: 111}]
                    }>
                    Documentary
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={styles.popularSection}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 24,
                marginRight: 24,
              }}>
              <Text style={styles.textStyle1}>Most Popular</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('MostPopular')}>
                <Text style={styles.textStyle3}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.movieCards}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap: 12}}>
                <Image source={card1} />
                <Image source={card2} />
                <Image source={card3} />
              </ScrollView>
            </View>
          </View>
          <View style={[styles.popularSection, {marginBottom: 50}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 24,
                marginRight: 24,
              }}>
              <Text style={styles.textStyle1}>Upcoming Movies</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpcomingMovie')}>
                <Text style={styles.textStyle3}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image source={folder} />
          <Text style={styles.title}>
            We Are Sorry, We Can Not Find The Movie :(
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat-Medium',
              fontSize: 12,
              color: '#92929D',
              textAlign: 'center',
              width: 188,
            }}>
            Find your movie by Type title, categories, years, etd
          </Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.window}>
      <ScrollView>{renderScreens()}</ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center', // Center the content horizontally
  },
  imageContainer: {
    marginHorizontal: 12, // Adjust the margin between images
  },
  image: {
    // Adjust the image width to account for spacing
    resizeMode: 'cover',
  },
  bottomNavigation: {
    flexDirection: 'row',
    gap: 17,
    height: 72,
    marginLeft: 39,
    marginRight: 39,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTab: {
    width: 48,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavTab: {
    width: 90,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#252836',
    borderRadius: 16,
  },
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 45,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  textStyle2: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  searchBar: {
    marginTop: 33,
    height: 41,
    borderRadius: 24,
    backgroundColor: '#252836',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    paddingHorizontal: 24,
  },
  searchBar1: {
    width: 276,
    marginTop: 33,
    height: 41,
    borderRadius: 24,
    backgroundColor: '#252836',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    paddingLeft: 24,
    gap: 10,
  },
  searchInput: {
    width: 239,
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  movieSlider: {
    marginTop: 32,
    marginBottom: 12,
  },
  categories: {
    height: 74,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 24,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
  },
  tab: {
    height: 31,
    color: '#EBEBEF',
    borderRadius: 8,
    textAlign: 'center',
    paddingTop: 8,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  activeTab: {
    height: 31,
    color: '#12CDD9',
    backgroundColor: '#252836',
    borderRadius: 8,
    textAlign: 'center',
    paddingTop: 8,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  popularSection: {
    marginTop: 21,
  },
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  movieCards: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 24,
  },
  movieContainer: {
    height: 147,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
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
  pgStyle: {
    borderRadius: 3,
    width: 43,
    height: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#12CDD9',
    borderColor: '#12CDD9',
    borderWidth: 1,
  },
  container: {
    height: 190,
    width: 252,
    gap: 16,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '50%',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    width: 188,
  },
});
export default Home;
