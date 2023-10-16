import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqgOzWPMzTi5D97pF2F5iiH44YhCVkjUI",
  authDomain: "fir-6ba71.firebaseapp.com",
  projectId: "fir-6ba71",
  storageBucket: "fir-6ba71.appspot.com",
  messagingSenderId: "771463701333",
  appId: "1:771463701333:web:4d6f06aba362d0241ec5dc",
  measurementId: "G-13HE00WVBD"
};

export default  firebase.initializeApp(firebaseConfig)