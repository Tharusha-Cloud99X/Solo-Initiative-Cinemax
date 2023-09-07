import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding1 from './screens/onboarding/Onboarding1';
import Onboarding2 from './screens/onboarding/Onboarding2';
import Onboarding3 from './screens/onboarding/Onboarding3';
import Onboarding4 from './screens/onboarding/Onboarding4';
import Onboarding5 from './screens/onboarding/Onboarding5';
import Onboarding6 from './screens/onboarding/Onboarding6';
import SplashScreen from './screens/login/SplashScreen';
import LoginScreen from './screens/login/LoginScreen';
import LoginScreen1 from './screens/login/LoginScreen1';
import Signup from './screens/login/SignUp';
import ResetPassword from './screens/login/ResetPassword';
import Verification from './screens/login/Verification';
import NewPassword from './screens/login/NewPassword';
import Home from './screens/home/Home';
import Search from './screens/home/Search';
import MovieDetails from './screens/home/MovieDetails';
import Download from './screens/home/Download';
import MostPopular from './screens/home/MostPopular';
import SerialDetails from './screens/home/SerialDetails';
import PremiumAccount from './screens/premiumAccount/PremiumAccount';
import PaymentMethod from './screens/premiumAccount/PaymentMethod';
import Wishlist from './screens/home/Wishlist';
import UpcomingMovie from './screens/home/Upcoming';
import Trailer from './screens/home/Trailer';
import Genre from './screens/home/Genre';
import Profile from './screens/profile/Profile';
import EditProfile from './screens/profile/EditProfile';
import PrivacyPolicy from './screens/profile/PrivacyPolicy';
import Notifications from './screens/profile/Notifications';
import Language from './screens/profile/Language';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding4"
          component={Onboarding4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding5"
          component={Onboarding5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding6"
          component={Onboarding6}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen1"
          component={LoginScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Download"
          component={Download}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MostPopular"
          component={MostPopular}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SerialDetails"
          component={SerialDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PremiumAccount"
          component={PremiumAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Wishlist"
          component={Wishlist}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpcomingMovie"
          component={UpcomingMovie}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Trailer"
          component={Trailer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Genre"
          component={Genre}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
