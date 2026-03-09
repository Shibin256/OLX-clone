import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc,collection, getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'                     //importing items to upload image in firebase
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
  


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)   //firebase authonication configured
const db= getFirestore(app) // firebase database getting
const imageDb=getStorage(app)           //for image uploading

const signUp= async (name,email,phone,password)=>{
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);            //creating user with email and password
            const user=res.user;            //getting user deatials from response
            await addDoc(collection(db,"user"),{                                                //adding deatials to fireabse databse using addDoc
                uid: user.uid,                                  //this is the object where we define the data that store in the user collection
                name,
                email,
                phone,
                authProvider:'local',
            })
            console.log("New User Signed in");
            toast.success("SignUp Successful");
        } catch (error) {
                console.log(error);
                toast.error(error.code.split('/')[1].split('-').join(' '))
        }
}


const login= async (email,password)=>{
        try {
            await signInWithEmailAndPassword(auth,email,password);
            toast.success("Login Successfull")
        } catch (error) {
            toast.error(error.code.split('/')[1].split('-').join(' '))
            console.log(error)
        }
}

const logout=()=>{
    signOut(auth)
    toast.success('Logout Successfull')
}

const addProduct= async (product)=>{
    try{
       const res= await addDoc(collection(db,'products'),product)
        console.log(product)
        console.log("Product added with ID:", res.id);
        toast.success("Product added successfully")
    }catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

export {auth,db,login,signUp,logout,imageDb,addProduct};