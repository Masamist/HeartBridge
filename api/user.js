import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const createUser = async (firstName, lastName, email, password, accountName) => {
  try {
    // Create user
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  
    // Create user doc
    await firestore().collection('users').doc(user.uid).set({
      firstName,
      lastName,
      email,
      accountName,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });

    // Create family doc
    await firestore().collection('families').add({
      accountName,
      members: [user.uid],
      createdAt: firestore.FieldValue.serverTimestamp(),
    });

    return { status: true, data: { user } };

  } catch (error) {
    console.error('Error during registration:', error);
    if (error.code === 'auth/email-already-in-use') {
      return { error: 'The email you entered is already in use.' };
    } else if (error.code === 'auth/invalid-email') {
      return { error: 'Please enter a valid email address.' };
    }
    return { error: 'Something went wrong with your request.' };
  }
};

export const loginUser = async (email, password) => {
  try {
    console.log('Login start');
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    console.error('Login error:', error);
    if (error.code === 'auth/wrong-password') {
      return { status: false, error: 'Please enter a correct password.' };
    } else if (error.code === 'auth/user-not-found') {
      return { status: false, error: 'The email you entered does not exist.' };
    }
    return { status: false, error: 'Something went wrong.' };
  }
};

export const logOut = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    const token = await auth().currentUser?.getIdToken(true);
    return token;
  } catch (error) {
    return error;
  }
};