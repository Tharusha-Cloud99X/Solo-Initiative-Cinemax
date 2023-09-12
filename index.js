/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Import Firebase
import {initializeApp} from '@react-native-firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAMDfHlqQ7eYzdwtcv_FDocR-K7YYONgn8',
  authDomain: 'cinemax-9454b.firebaseapp.com',
  projectId: 'cinemax-9454b',
  storageBucket: 'cinemax-9454b.appspot.com',
  messagingSenderId: '475032014522',
  appId: '1:475032014522:web:6098a4cc6f0a436cedfc83',
  measurementId: 'G-MF54RTPJSE',
};

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
