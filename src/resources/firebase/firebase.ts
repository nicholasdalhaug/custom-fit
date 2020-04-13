import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSsGGNtbJKdWhAJ-x8PCZpN5JIZii8x7M",
    authDomain: "custom-fit-885d7.firebaseapp.com",
    databaseURL: "https://custom-fit-885d7.firebaseio.com",
    projectId: "custom-fit-885d7",
    storageBucket: "custom-fit-885d7.appspot.com",
    messagingSenderId: "504159396672",
    appId: "1:504159396672:web:b995f81e096087eb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;