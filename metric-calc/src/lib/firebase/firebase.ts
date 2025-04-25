'use client';

import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase-konfigurasjon
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialiser Firebase-app
const app = initializeApp(firebaseConfig);

// Analytikk-initialisering med støttekontroll
let analytics = null;
if (typeof window !== 'undefined') {
  // Sjekk om analytics støttes i nåværende miljø
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Initialiser andre Firebase-tjenester
const auth = typeof window !== 'undefined' ? getAuth(app) : null;
const firestore = typeof window !== 'undefined' ? getFirestore(app) : null;

// Eksporter Firebase-tjenester
export { app, analytics, auth, firestore };

// Hjelpefunksjoner for å få tilgang til tjenestene
export const getAnalyticsInstance = () => analytics;
export const getFirebaseAuth = () => auth;
export const getFirestoreInstance = () => firestore;