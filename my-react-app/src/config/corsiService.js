import { collection, addDoc, deleteDoc, getDocs, doc, updateDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth,db} from './firebase';

export function selectCollection(collectionName){
    return collection(db, collectionName);
}

export async function addCorso(corso){
    await addDoc(selectCollection("corsi"), corso);
}

export async function getCorsi(){
    const response = await getDocs(selectCollection("corsi"));
    const data = response.docs.map((doc) => ({
        id: doc.id,...doc.data()
    }));
    return data;
}
export async function deleteCorsi(id) {
    const log = doc(db, "corsi", id);
    return await deleteDoc(log);
}

export async function modificaCorsi(id, nuoviDati) {
    const corsoDaMod = doc(db, "corsi", id); 
    await updateDoc(corsoDaMod, nuoviDati);  
}

