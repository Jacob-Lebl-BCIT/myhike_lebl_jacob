//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCkJjZ6sZhQqTA457G0Ih6i4Cj43YjkK5o",
    authDomain: "fir-2025-c97f4.firebaseapp.com",
    projectId: "fir-2025-c97f4",
    storageBucket: "fir-2025-c97f4.firebasestorage.app",
    messagingSenderId: "906835237073",
    appId: "1:906835237073:web:a4a73f4573e79e74eccdf0"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

