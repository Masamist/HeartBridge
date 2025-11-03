import { initializeApp } from 'firebase/app';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyDEEGoHxb1mwkUvHxfx4GfLncgmKEdgViQ',
  authDomain: 'firebaseapp.com.firebaseapp.com',
  projectId: 'heartbridge-c4712',
  storageBucket: 'heartbridge-c4712.appspot.com',
  messagingSenderId: '861543176879',
  appId: '1:861543176879:android:ef0105e41fc9681842d25a',

  // apiKey: 'API_KEY',
  // authDomain: 'PROJECT_ID.firebaseapp.com',
  // projectId: 'PROJECT_ID',
  // storageBucket: 'PROJECT_ID.appspot.com',
  // messagingSenderId: 'SENDER_ID',
  // appId: 'APP_ID',
};

export const app = initializeApp(firebaseConfig);