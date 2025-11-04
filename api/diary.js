//import db from '@react-native-firebase/firestore';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, getDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { app } from '../firebaseConfig'; // your Firebase app

const db = getFirestore(app);

export const getDailyPosts = async (familyId) => {
  try {
    const familyDocRef = doc(db, 'families', familyId);
    const familySnap = await getDoc(familyDocRef);
    const diaryRef = collection(db, 'families', familyId, 'diary');
    const snapshot = await getDocs(diaryRef);
    // const postsQuery = query(diaryRef, orderBy('createdAt', 'desc'));
    // const snapshot = await getDocs(postsQuery);
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //console.log('Now at getDialyPost end:'+ posts)
    return { status: true, data: posts };   
  } catch (error) {
   // console.log('Firestore error: ', error);
    return { status: false, error: error.message };
  }
};

export const addDiaryPost = async (userId, text, imageUrl) => {
  try {
    const postRef = await addDoc(collection(db, 'diary'), {
      userId,
      text,
      imageUrl,
      createdAt: serverTimestamp(),
    });
    console.log('Family post added with ID:', postRef.id);
    return { status: true, data: { id: postRef.id, userId, text, imageUrl } };
  } catch (error) {
    console.log('Firestore error:', error);
    return { status: false, error: error.message };
  }
};

