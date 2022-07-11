import { initializeApp, getApps, getApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqqfnaZKTmf32evGlZrrm_ce__v3txzT8",
    authDomain: "instagram-clone-225be.firebaseapp.com",
    projectId: "instagram-clone-225be",
    storageBucket: "instagram-clone-225be.appspot.com",
    messagingSenderId: "644751305287",
    appId: "1:644751305287:web:0484161b85fc858b641f62"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage };