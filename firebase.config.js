import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyAvb1oI3cGkb-FZ12wsZTUwm2JayWxSm0Q",
    authDomain: "dukaan-cba6a.firebaseapp.com",
    databaseURL: "https://dukaan-cba6a-default-rtdb.firebaseio.com",
    projectId: "dukaan-cba6a",
    storageBucket: "dukaan-cba6a.appspot.com",
    messagingSenderId: "814105696816",
    appId: "1:814105696816:web:4d683cdbd2c7e268f46bf5"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)

const storage = getStorage(app);

export {app, firestore, storage};