import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//     apiKey: "AIzaSyDwonB9-zZpaPbs-uYl0V1yFRz5rvJHPz8",
//     authDomain: "medi-bazaar-ass.firebaseapp.com",
//     projectId: "medi-bazaar-ass",
//     storageBucket: "medi-bazaar-ass.firebasestorage.app",
//     messagingSenderId: "766415211706",
//     appId: "1:766415211706:web:c8f5cd464c69b4e5c20683"
// };


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app