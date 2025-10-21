import { useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { auth } from './../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL }).then(
      () => {
        // Update React context user state
        setUser({
          ...auth.currentUser,
          displayName,
          photoURL,
        });
      }
    );
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider).then(res => {
      setUser(res.user); // store signed-in user in context
      return res;
    });
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    profileUpdate,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
