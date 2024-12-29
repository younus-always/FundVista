import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.init";
import {
      createUserWithEmailAndPassword,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      signInWithPopup,
      signOut,
      updateProfile
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const UserContext = createContext();

const UserProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const googleProvider = new GoogleAuthProvider();

      // Sign-up user
      const signup = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      }

      // Sign-in user
      const signin = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      // Sign-in with Google user 
      const googleSignIn = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      }

      // Update user Name & Photo
      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }

      // Signout user
      const Logout = () => {
            setLoading(true);
            signOut(auth)
                  .then(() => {
                        setUser(null)
                  })
                  .then((err) => {
                        console.log(err)
                  })
      }

      // Observer
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);
                  setLoading(false);
            });

            return () => unSubscribe();
      }, [])



      // User collection pass another components
      const UserInfo = {
            signup,
            signin,
            googleSignIn,
            updateUserProfile,
            Logout,
            user,
            setUser,
            loading,
            setLoading
      }

      return (
            <UserContext.Provider value={UserInfo}>
                  {children}
            </UserContext.Provider>
      )
}

export default UserProvider