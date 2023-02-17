import { initializeApp } from 'firebase/app';
import {
    getAuth,
    // onAuthStateChanged
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBtI8S4QfOSDcjKVtyVZyuFYb6jFmuDYL4",
    authDomain: "catco-2.firebaseapp.com",
    projectId: "catco-2",
    storageBucket: "catco-2.appspot.com",
    messagingSenderId: "786696823551",
    appId: "1:786696823551:web:95bc1debd4d1fcef0ba2ca",
    measurementId: "G-9QFX4JCHPY"
});

// const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

// detect authState

// onAuthStateChanged(auth, user => {
//     if (user != null) {
//         console.log('logged in!!!')
//     } else {
//         console.log('no user')
//     }
// });


// first time working with firebae just use this as a reference in the future if usin this website.