import { LoggedUserContext } from "../../contexts/LoggedUserContext";
import { useContext } from "react";
import { useState,useEffect } from "react";
import css from './profilo.module.css'

export function Profilo(){
    const {loggedUser,setLoggedUser} = useContext(LoggedUserContext);
    const [img,setImg] = useState("");

    useEffect(()=>{
        getJson();
    },[]);

    const getJson = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setImg(data[(Math.floor(Math.random() * data.length))].thumbnailUrl);
    }


    return<>
        <div className={`${css.profiloBg}`}>
            <section className="vh-100 shadow">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center">
                                        <img src={img} alt="Avatar" className="img-fluid my-5 h-50" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Informazioni</h6>
                                            <hr className="mt-0 mb-4"/>
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Nome</h6>
                                                    <p className="text-muted">{loggedUser.firstName}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Cognome</h6>
                                                    <p className="text-muted">{loggedUser.lastName}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted">{loggedUser.email}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}