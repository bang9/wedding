import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../configs/firebase.config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const firebase = {
  app,
  db,
};
