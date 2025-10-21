import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    setUser,
    googleSignIn,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
