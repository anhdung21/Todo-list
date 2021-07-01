import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA5l0-bCK5_5Jlu1mRyvrMrju9yzTLSfJA',
  authDomain: 'todo-list-30b59.firebaseapp.com',
  projectId: 'todo-list-30b59',
  storageBucket: 'todo-list-30b59.appspot.com',
  messagingSenderId: '450366089400',
  appId: '1:450366089400:web:bad046a8f4cc91236aac4d',
};
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
