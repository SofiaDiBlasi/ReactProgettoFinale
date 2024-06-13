/*import { collection, addDoc, deleteDoc, getDocs, doc, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth,db} from './firebase';


export function selectCollection(collectionName){
    return collection(db, collectionName);
}
export async function createLog(message) {
    const log = {
      date: new Date().toLocaleString(),
      message: message,
    };
    await addDoc(selectCollection("logs"), log);
}
export async function deleteLog(id) {
    const log = doc(db, "logs", id);
    await deleteDoc(log);
}
export async function getLogs(){
    const response = await getDocs(selectCollection("logs"));
    const data = response.docs.map((doc) => ({
        id: doc.id,...doc.data()
    }));
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
    return data;
}*/


