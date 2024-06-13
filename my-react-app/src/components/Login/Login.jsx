import { NavLink } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../../contexts/LoginContext";
import { LoggedUserContext } from "../../contexts/LoggedUserContext";
import { loginUtente,getUserByEmail } from "../../config/loginService";
import Cookies from 'js-cookie';
import css from './login.module.css'

export function Login(){

    const {login,setLogin} = useContext(LoginContext);
    const {loggedUser,setLoggedUser} = useContext(LoggedUserContext);

    const { 
        register,
        handleSubmit,
        formState: { errors },
        reset 
    } = useForm({
        defaultValues: {
            email: "",
            password:"",
        }
    });

    const onSubmit = async (data) => {
        const user = await loginUtente(data.email,data.password)
        if(user != null){
            const userFromDatastore = await getUserByEmail(user.email);
            setLoggedUser(userFromDatastore);
            setLogin(true);
            Cookies.set("loggedUser",JSON.stringify(userFromDatastore));
            Cookies.set("login",true);
            Cookies.set("JWT",user.refreshToken);
            toast.success("Bentornata! Login eseguito con successo", { autoClose: 2000 });
        } else{
            toast.error("Login non riuscito", { autoClose: 2000 });
        }
         reset();
     };

    return<>
        <div className={`${css.loginBg}`}>
            <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="loginBg p-5">   
                                <form className="container bg-light rounded-3 shadow mt-5 w-25" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row-col">
                                        <div className="col-6"><h1 className="text-warning">Bentornato</h1></div>
                                        <div className="col-6"><h4>Effettua il Login</h4></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                                        <input type="email" name="email" className="form-control shadow rounded-3 bg-light" {...register("email", { required: true})} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                        <input type="password" name="password" className="form-control shadow rounded-3 bg-light" {...register("password", { required: true})} />
                                    </div>
                                    <button type="submit" className="btn btn-warning text-white mb-4 mt-2">Submit</button>
                                    <NavLink className="navbar-brand p-3 mb-5" to="registrazione">Non sei ancora dei nostri? <b className="text-warning">Registrati</b></NavLink>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
}