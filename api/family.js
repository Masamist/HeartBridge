//import db from '@react-native-firebase/firestore';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, getDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { app } from '../firebaseConfig'; // your Firebase app

const db = getFirestore(app);

export const getFamilyMembers = async (familyId) => {
  try {
    console.log('Now at getFamilyMembers starts');

    // 1. Get family document
    const familyDocRef = doc(db, 'families', familyId);
    const familySnap = await getDoc(familyDocRef);

    if (!familySnap.exists()) {
      console.log('Family doc does not exist');
      return { status: false, error: 'Family not found' };
    }

    const familyData = familySnap.data();
    //console.log('Family doc exists?', familyData);

    // 2. Get member IDs array
    const memberIds = familyData.members || [];
    //console.log('Member IDs:', memberIds);

    // 3. Fetch member details from users collection
    const memberPromises = memberIds.map(async (userId) => {
      const userDocRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userDocRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        return {
          id: userSnap.id,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
        };
      } else {
        return null;
      }
    });

    const members = (await Promise.all(memberPromises)).filter(Boolean);
    //console.log('Fetched members:', members);

    return { status: true, data: members };

  } catch (error) {
    console.log('Firestore error:', error);
    return { status: false, error: error.message };
  }
};