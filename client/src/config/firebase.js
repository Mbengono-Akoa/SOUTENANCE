import "firebase/app";
import { initializeApp } from "firebase/app";
import 'firebase/storage';
import {getStorage} from 'firebase/storage';


const firebaseConfig = initializeApp({

        apiKey: "AIzaSyDfC3cMrYeHgkG86ZFECkVJVtZ8glzBZyM",
    
        authDomain: "soutenance-1c4f4.firebaseapp.com",
      
        projectId: "soutenance-1c4f4",
      
        storageBucket: "soutenance-1c4f4.appspot.com",
      
        messagingSenderId: "918779478621",
      
        appId: "1:918779478621:web:496165e9be159c790303b4",
      
        measurementId: "G-X272XCS478"
      
 
})

const storage  = getStorage(firebaseConfig);

export default storage;