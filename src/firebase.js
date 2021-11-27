import * as firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyD4kF3QR4PA5TztDT9of14m7evvCf6kSZc",
  authDomain: "react-firebase-homework.firebaseapp.com",
  projectId: "react-firebase-homework",
  storageBucket: "react-firebase-homework.appspot.com",
  messagingSenderId: "1014586412456",
  appId: "1:1014586412456:web:12b2eb613960df089d619d",
  measurementId: "G-761CNZJV4D",
  databaseURL: "https://react-firebase-homework-default-rtdb.firebaseio.com/",
}
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref()
