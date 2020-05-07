import firebase from 'firebase';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyCbthpp3qISldCnFCq-SpXrQNyfhMhJ2iI",
    authDomain: "my-e-profile.firebaseapp.com",
    databaseURL: "https://my-e-profile.firebaseio.com",
    projectId: "my-e-profile",
    storageBucket: "my-e-profile.appspot.com",
    messagingSenderId: "34470939684"
  };
  firebase.initializeApp(config);
  const firestore=firebase.firestore()
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
  firestore.enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });


export default firestore;