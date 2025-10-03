import { createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBxBICBhwICDK_kgCnZB1bCWLtunooZm8c",
  authDomain: "netflix-clone-347c3.firebaseapp.com",
  projectId: "netflix-clone-347c3",
  storageBucket: "netflix-clone-347c3.firebasestorage.app",
  messagingSenderId: "350010430306",
  appId: "1:350010430306:web:794503915393cad1ee123b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth, email, password);
        const user= res.user;
        await addDoc(collection(db, "user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        } )
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
};
const login = async (email, password)=>{
try {
    await signInWithEmailAndPassword(auth, email, password);

} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
}
};
const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};