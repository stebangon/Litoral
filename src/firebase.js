import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCaY7p5MMdxMpf0vROZSTyVApHD-iUHNeE',
  authDomain: 'litoral-866cd.firebaseapp.com',
  databaseURL: 'https://litoral-866cd-default-rtdb.firebaseio.com',
  projectId: 'litoral-866cd',
  storageBucket: 'litoral-866cd.appspot.com',
  messagingSenderId: '495295935883',
  appId: '1:495295935883:web:6104b034126862e75aab8e',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
var fireDB = firebase;
// Initialize Firebase
export default fireDB;

// checa este video si tienes ddas de como hacer esto:
// https://www.youtube.com/watch?v=pI4438IHBYY
