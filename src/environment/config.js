import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCobunfQoXAOYt-CsFkZaDCILcGVR4ufWk",
    authDomain: "auka-918e9.firebaseapp.com",
    databaseURL: "https://auka-918e9.firebaseio.com",
    projectId: "auka-918e9",
    storageBucket: "auka-918e9.appspot.com",
    messagingSenderId: "853403277404",
    appId: "1:853403277404:web:fe9cdedb05a78d6b2b6e99"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;