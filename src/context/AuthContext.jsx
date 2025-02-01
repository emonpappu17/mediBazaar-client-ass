import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../services/firebase";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Creating user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signed in user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Getting current login user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    // Setting user Name and Image
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // Password reset
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // Logout User
    const logOut = () => {
        return signOut(auth)
    }

    // Google Sign-In
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    return (
        <AuthContext value={{ user, loading, setLoading, createUser, signIn, updateUserProfile, resetPassword, logOut, signInWithGoogle }}>
            {children}
        </AuthContext>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;
