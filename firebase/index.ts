import firebase from 'firebase/app'
import 'firebase/auth' // If you need it
import 'firebase/firestore' // If you need it
import 'firebase/database' // If you need it
import 'firebase/analytics'
import 'firebase/functions'

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

try {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials)
    // To enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ('measurementId' in clientCredentials) firebase.analytics()
  }
  firebase.firestore()
  firebase.database()
  firebase.functions()
} catch (err) {
  console.error({ message: err.message })
}

export default firebase
