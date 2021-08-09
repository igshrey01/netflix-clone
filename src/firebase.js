import firebase  from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDaf885lJlSdtrB9S_8ku6j5VULriV7MQk",
    authDomain: "netflix-clone-901f6.firebaseapp.com",
    projectId: "netflix-clone-901f6",
    storageBucket: "netflix-clone-901f6.appspot.com",
    messagingSenderId: "510710051804",
    appId: "1:510710051804:web:f4e35dabec231b89f19519"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth}
export default db;