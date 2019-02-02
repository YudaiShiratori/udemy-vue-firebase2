import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAH2BAcVCvf-u20akw9h49twAWABAE4AOE",
  authDomain: "udemy-ninja-smoothies-80460.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-80460.firebaseio.com",
  projectId: "udemy-ninja-smoothies-80460",
  storageBucket: "udemy-ninja-smoothies-80460.appspot.com",
  messagingSenderId: "388164311361"
};

const firebaseApp = firebase.initializeApp(config);

//export firestore database
export default firebaseApp.firestore()