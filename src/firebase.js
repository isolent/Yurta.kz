import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfuIg3fi1LIEKZiFREnmGubVH0ho2-c1M",
  authDomain: "yurta-69b3d.firebaseapp.com",
  databaseURL: "https://yurta-69b3d-default-rtdb.firebaseio.com",
  projectId: "yurta-69b3d",
  storageBucket: "yurta-69b3d.appspot.com",
  messagingSenderId: "643453870614",
  appId: "1:643453870614:web:d5f8b21a9edcdbb8318b37",
  measurementId: "G-7Q9YLPJSN9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const querySnapshot = await getDocs(collection(firestore, 'your_collection_name'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
export { auth, firestore, storage };

