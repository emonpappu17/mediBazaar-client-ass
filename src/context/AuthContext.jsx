import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";
import app from "../services/firebase";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { saveUserToDB } from "../services/userService";
import axiosPublic from "../services/axiosPublic";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tokenStored, setTokenStored] = useState(false);
    console.log(user);

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
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser?.email };
                const { data } = await axiosPublic.post('/jwt', userInfo)
                if (data?.token) {
                    localStorage.setItem('access-token', data.token);
                    setLoading(false);
                    setTokenStored(true)
                } else {
                    setLoading(false)
                    setTokenStored(false)
                }
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
                setTokenStored(false)
            }
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
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleProvider)
        console.log('signInWithGoogle', result);

        const userData = {
            email: result.user.email,
            name: result.user.displayName,
            // image: result.user.photoURL,
            role: "user"
        }

        // Storing google user to db
        await saveUserToDB(userData)
    }

    // Github Sign-In
    const signInWithGithub = async () => {
        const result = await signInWithPopup(auth, githubProvider)
        const userData = {
            email: result.user.email,
            name: result.user.displayName,
            // image: result.user.photoURL,
            role: "user"
        }

        // Storing github user to db
        await saveUserToDB(userData)
    }

    // Memoized context value to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({
        user,
        setUser,
        loading,
        tokenStored,
        createUser,
        signIn,
        updateUserProfile,
        resetPassword,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }), [user, loading, tokenStored])

    return (
        <AuthContext value={contextValue}>
            {children}
        </AuthContext>
        // <AuthContext value={{ user, loading, setLoading, createUser, signIn, updateUserProfile, resetPassword, logOut, signInWithGoogle }}>
        //     {children}
        // </AuthContext>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;
