import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDBFJYM6SAFUrJ112NeAEr9XVVpd0BkSSA",
    authDomain: "projectapp-5adcd.firebaseapp.com",
    databaseURL: "https://projectapp-5adcd.firebaseio.com",
    projectId: "projectapp-5adcd",
    storageBucket: "projectapp-5adcd.appspot.com",
    messagingSenderId: "1025926909757"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})
  export default firebase;