import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjBd0weEMeHynnZ2BlHVl996EZv7FDIsU",
    authDomain: "react-portfolio-5a704.firebaseapp.com",
    projectId: "react-portfolio-5a704",
    storageBucket: "react-portfolio-5a704.appspot.com",
    messagingSenderId: "462505372601",
    appId: "1:462505372601:web:de0c085ebae0433d8ae468"
  };

  const app = initializeApp(firebaseConfig)

   export const db = getFirestore(app)
