import { initializeApp, getApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getReactNativePersistence } from '@firebase/auth';

// Initialize Firebase with your config
const firebaseConfig = {
    apiKey: "AIzaSyDH4JEE5FJUTAEDx2pDKROzzlbAA9093MQ",
    authDomain: "lancha-driver.firebaseapp.com",
    projectId: "lancha-driver",
    storageBucket: "lancha-driver.appspot.com",
    messagingSenderId: "792895440493",
    appId: "1:792895440493:web:f032cef0660a779387e164",
    measurementId: "G-2PB8VG41MV"
};

const app = firebase.initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIRESTORE_DB = app.firestore();
export const FIREBASE_AUTH = getAuth(app);
