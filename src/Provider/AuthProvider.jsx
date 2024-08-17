import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();
const githhubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };

  const setUpdateProfile = (name, image, phone) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
      phoneNumber: phone,
    });
  };

  const googleSingUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSingUp = () => {
    setLoading(true);
    return signInWithPopup(auth, githhubProvider);
  };
  const authInfo = {
    user,
    createUser,
    signIn,
    loading,
    googleSingUp,
    logOut,
    setUpdateProfile,
    githubSingUp,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
