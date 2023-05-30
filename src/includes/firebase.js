import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBLQSBUblB_7TTto5dgPeqX1TfirmmnZJQ',
  authDomain: 'music-vuejs-f64ad.firebaseapp.com',
  projectId: 'music-vuejs-f64ad',
  storageBucket: 'music-vuejs-f64ad.appspot.com',
  messagingSenderId: '55531334677',
  appId: '1:55531334677:web:c088b0244681bb79adf21xc'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

// Persistence Firebase
db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, storage, commentsCollection }
