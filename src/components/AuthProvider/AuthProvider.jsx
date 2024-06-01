import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      // If user exists, then a token will be issue
      //   if (currentUser) {
      //     axios
      //       .post(
      //         "https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/jwt",
      //         loggedUser,
      //         {
      //           withCredentials: true,
      //         }
      //       )
      //       .then((res) => {
      //         console.log(res.data);
      //       });
      //   } else {
      //     axios
      //       .post(
      //         "https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/logout",
      //         loggedUser,
      //         {
      //           withCredentials: true,
      //         }
      //       )
      //       .then((res) => {
      //         console.log(res.data);
      //       });
      //   }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    setLoading,
    registerUser,
    logInUser,
    signOutUser,
    // googleUser,
    setUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
