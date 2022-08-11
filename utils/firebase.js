import firebase from "firebase/compat/app";
import 'firebase/analytics';


const firebaseConfig = {

  apiKey: process.env.apiKey,

  authDomain: process.env.authDomain,

  projectId: process.env.projectId,

  storageBucket: process.env.storageBucket,

  messagingSenderId: process.env.messagingSenderId,

  appId: process.env.appId,

  measurementId: process.env.measurementId

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const analytics = () => {
  if (typeof window != "undefined") {
    return firebase.analytics; 
  } else {
    return null
  }
}

export default firebase;