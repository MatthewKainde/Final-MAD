// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyY2LY3PVXNAj74Z_yoXoMz96ditTtHqU",
  authDomain: "final-mad-5a361.firebaseapp.com",
  projectId: "final-mad-5a361",
  storageBucket: "final-mad-5a361.appspot.com", // diperbaiki
  messagingSenderId: "354406323593",
  appId: "1:354406323593:web:27d1c4b35bf990f1c5bd58",
  databaseURL: "https://final-mad-5a361-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getDatabase(app);
const storage = getStorage(app);

export { app, auth, db, storage };