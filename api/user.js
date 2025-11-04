import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import firestore from '@react-native-firebase/firestore';
import {updateToken} from '../redux/reducers/User';

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

  //await auth().signOut();
  try {
    const currentUser = auth().currentUser;
    if (!currentUser) {
      console.warn('No user currently signed in. Skipping Firebase logout.');
      return;
    }
    await auth().signOut();
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Logout failed:', error);
  }
  
};

export const checkToken = async () => {
  try{
    let response = await auth().currentUser.getIdToken(true)
    store.dispatch(updateToken(response));
    return response;
  }catch(error){
    return error;
  }
};