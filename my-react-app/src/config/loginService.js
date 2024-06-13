import { collection, addDoc, deleteDoc, getDocs, doc, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth,db} from './firebase';


export function selectCollection(collectionName){
    return collection(db, collectionName);
}
export async function addUser(userData){
    await addDoc(selectCollection("utenti"), userData);
}

export async function registerUser(userData){
    const ud = {
        firstName : userData.firstName,
        lastName : userData.lastName,
        email : userData.email,
        role:[]
    };
    const userCredenziali = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
    );
     await addUser(ud);
    const user = userCredenziali.user;
    return user;
}

export async function deleteUser(id){
    const user = doc(db, "utenti", id);
    await deleteDoc(user);
}

export async function loginUtente(email,password){
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}
export async function getUserByEmail(email){
    const q =  query(selectCollection("utenti"), where("email", "==", email));
    const result = await getDocs(q);
    return result.docs[0].data();
}
export async function getUtenti(){
    const response = await getDocs(selectCollection("utenti"));
    const data = response.docs.map((doc) => ({
        id: doc.id,...doc.data()
    }));
    return data;
}



