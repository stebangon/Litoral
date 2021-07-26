import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBcEWfoSbR1OOgGvrUAcG_ZI1DW-dI8Py0',
  authDomain: 'litoral-df396.firebaseapp.com',
  databaseURL: 'https://litoral-df396-default-rtdb.firebaseio.com',
  projectId: 'litoral-df396',
  storageBucket: 'litoral-df396.appspot.com',
  messagingSenderId: '1044962665892',
  appId: '1:1044962665892:web:a7f44b5d12f344efd98d31',
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
var fireDB = firebase;
// Initialize Firebase
export default fireDB;

// checa este video si tienes ddas de como hacer esto:
// https://www.youtube.com/watch?v=pI4438IHBYY
