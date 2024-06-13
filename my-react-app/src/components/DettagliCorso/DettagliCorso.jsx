import { NavLink } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import { LoggedUserContext } from "../../contexts/LoggedUserContext";
import { deleteCorsi } from "../../config/corsiService";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import css from './dettagli.module.css'

export function DettagliCorso(){
    const {loggedUser,setLoggedUser} = useContext(LoggedUserContext);
    const location = useLocation();
    const {id} = useParams();

    async function cancella(event,id) {
        event.preventDefault();
        if(deleteCorsi(id)){
            toast.success("Corso cancellato con successo", { autoClose: 2000 });
        } else{
            toast.error("Cancellazione non riuscita", { autoClose: 2000 });
        }
    }

    return<>
        <div className={`${css.pageBg}`}>
            <div className="container-fluid bgDettaglio mb-5">
                <div className="container rounded-3">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="border border-primary bg-light rounded-2 p-3 mb-1">Benvenuto sulla pagina del corso selezionato</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 border border-primary bg-light rounded-5 mt-4 mb-4">
                            <h3 className="m-5">Titolo: {location.state.Titolo}</h3>
                            <h5 className="m-5">Categoria: {location.state.Categoria}</h5>
                            <p className="m-5">Della durata di {location.state.Durata} ore.</p>
                            <p className="m-5">Descrizione: {location.state.Descrizione}</p>
                        </div>
                        {loggedUser.role[0] === 'Admin' ? 
                            <div className="mt-2 mb-4">
                                <NavLink className="nav-link active bg-warning btn text-white p-2 w-25 mb-3" to="modifica" state={location.state}>Modifica Corso</NavLink>
                                <button className="btn btn-danger w-25" onClick={(event)=>cancella(event,location.state.id)} type="button">Cancella corso</button>
                            </div>
                        : ''}
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </div>
    </>
}