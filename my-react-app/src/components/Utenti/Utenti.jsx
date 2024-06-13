import { useEffect,useState } from "react";
import { getUtenti,deleteUser } from "../../config/loginService";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import css from './utenti.module.css'
import utentiImg from '../../assets/img/utenti.png'


export function Utenti(){
    const [utenti,setUtenti] = useState([]);

    const [img,setImg] = useState("");

    useEffect(()=>{
        getJson();
    },[]);

    const getJson = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setImg(data[(Math.floor(Math.random() * data.length))].thumbnailUrl);
    }

    useEffect( ()=>{
        async function fetchUtenti(){
            const utenti = await getUtenti();
            setUtenti(utenti);
        }
        fetchUtenti();
    },[])
    async function cancella(event,id) {
        event.preventDefault();
        if(deleteUser(id)){
            toast.success("Utente cancellato con successo", { autoClose: 2000 });
        } else{
            toast.error("Cancellazione non riuscita", { autoClose: 2000 });
        }
    }

    return<>
        <div className={`${css.utentiBg}`}>
            <div className="container-fluid">
                <h1 className="p-3 text-white">Tutti gli utenti:</h1>
                <div className="row">
                    <div className="col-8 h-50 overflow-y align-self-center d-flex flex-wrap">
                    {utenti.map((element) => (
                        <div className="flip-card m-2">
                        <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="profile-image">
                                <img src={img} alt="Avatar" className="img-fluid my-5 h-50" />
                                <div className="name">
                                    {element.firstName} {element.lastName}
                                </div>
                            </div>
                        </div>
                            <div className="flip-card-back">
                                <p className="text-white mt-5">Corso: nome del corso</p>
                                <button className="btn btn-danger mt-5" onClick={(event)=>cancella(event,element.id)} type="button">Cancella utente</button>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <div className="col-4">
                        <img className={`${css.imgUtenti}`} src={utentiImg} alt="" />
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </div>
    </>
}