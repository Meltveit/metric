'use client'; //  Important!  This is a Client Component

import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, FirebaseAnalytics } from 'firebase/analytics';
import { getAuth, FirebaseAuth } from 'firebase/auth';
//  Import other Firebase services as needed (Firestore, etc.)
import { getFirestore, FirebaseFirestore } from 'firebase/firestore';

let firebaseApp: FirebaseApp | null = null;
let firebaseAnalytics: FirebaseAnalytics | null = null;
let firebaseAuth: FirebaseAuth | null = null;
let firebaseFirestore: FirebaseFirestore | null = null;

function createFirebaseApp() {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
  }
  return firebaseApp;
}

export const getFirebaseApp = () => {
  if (!firebaseApp) {
    firebaseApp = createFirebaseApp();
  }
  return firebaseApp;
};

export const getAnalyticsInstance = () => {
  if (!firebaseAnalytics && firebaseApp) {
    firebaseAnalytics = getAnalytics(firebaseApp);
  }
  return firebaseAnalytics;
};

export const getFirebaseAuth = () => {
  if (!firebaseAuth) {
    firebaseAuth = getAuth(getFirebaseApp());
  }
  return firebaseAuth;
};

export const getFirestoreInstance = () => {
  if (!firebaseFirestore && firebaseApp) {
    firebaseFirestore = getFirestore(getFirebaseApp());
  }
  return firebaseFirestore;
};

//  Export other Firebase service initializations as needed