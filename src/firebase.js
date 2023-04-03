import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAjeXKNGx_Uw2yZ_s_Yk8BkbOQbcFWmb_4",
    authDomain: "netflix-clone-64dcb.firebaseapp.com",
    projectId: "netflix-clone-64dcb",
    storageBucket: "netflix-clone-64dcb.appspot.com",
    messagingSenderId: "417013206712",
    appId: "1:417013206712:web:1b4a38473a6c8810506e4d"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;