import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast , ToastContainer } from "react-toastify";
import { addCorso } from "../../config/corsiService";
import 'react-toastify/dist/ReactToastify.css';
import css from './aggiungi.module.css'

export function AggiungiCorsi(){
    const { 
        register,
        handleSubmit,
        reset 
    } = useForm({
        defaultValues: {
            Titolo: "",
            Categoria: "",
            Descrizione: "",
            Durata: 0
        }
    });

    const onSubmit = async (data) => {
        await addCorso(data)
        toast.success("Hai aggiunto correttamente il corso!", { autoClose: 2000 });
        reset();
    };

    return<>
        <div className={`${css.pageBg}`}>
             <form className="container-fluid w-50 bg-light rounded-3 shadow" onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer />
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Titolo corso</label>
                    <input type="text" name="Titolo" className="form-control" {...register("Titolo", { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="autore" className="form-label">Categoria</label>
                    <input type="text" name="Categoria" className="form-control" {...register("Categoria", { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="autore" className="form-label">Durata del corso (in ore)</label>
                    <input type="number" name="Durata" className="form-control" {...register("Durata", { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Descrizione del corso</label>
                    <textarea className="form-control" name="Descrizione" {...register("Descrizione", { required: true })}></textarea>
                </div>
                <button type="submit" className="btn btn-warning text-white mb-3">Aggiungi</button>
            </form>
        </div>
    </>
}