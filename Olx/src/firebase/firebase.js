import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc,collection, getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'                     //importing items to upload image in firebase


const firebaseConfig = {
  apiKey: "AIzaSyBoC23Lku7pmisK1Lz2gphdjBWgu2pIvrw",
  authDomain: "olx-clone-9081a.firebaseapp.com",
  projectId: "olx-clone-9081a",
  storageBucket: "olx-clone-9081a.firebasestorage.app",
  messagingSenderId: "1024603789435",
  appId: "1:1024603789435:web:64d61f4cce8d8f11b92ade"
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
            alert("SignUp Successfull")
        } catch (error) {
                console.log(error);
                alert(error)
        }
}


const login= async (email,password)=>{
        try {
            await signInWithEmailAndPassword(auth,email,password);
            alert("SignIn Successfull")
        } catch (error) {
            console.log(error)
        }
}

const logout=()=>{
    signOut(auth)
    alert('Logout Successfull')
}


const addProduct= async (product)=>{
    try{
       const res= await addDoc(collection(db,'products'),product)
        console.log(product)
        console.log("Product added with ID:", res.id);
        alert("product added")
    }catch (error) {
        console.log(error);
        alert(error)
    }
}

export {auth,db,login,signUp,logout,imageDb,addProduct};