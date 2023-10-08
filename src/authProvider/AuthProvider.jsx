import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../firbase/firebase.config";
export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState();
    // sign up with email
    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user email and photo
    const updateProfileAndEmail = (updateData) => {
        return updateProfile(auth.currentUser,updateData);
    }

    // sign up with google
    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign up with github
    const signUpWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // user Sign in with email
    const userSingInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign up with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign up with github
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }


    // user loged out
    const signOutUser = () => {
        return signOut(auth);
    }


    // catch current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        signUpWithEmail,
        updateProfileAndEmail,
        signUpWithGoogle,
        signUpWithGithub,
        signOutUser,
        userSingInWithEmail,
        signInWithGoogle,
        signInWithGithub,
        user,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;