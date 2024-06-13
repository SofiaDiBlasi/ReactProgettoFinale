import { useForm } from "react-hook-form";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from "../../config/loginService";
import css from './registrazione.module.css'

export function Registrazione(){

    const { 
        register,
        handleSubmit,
        formState: { errors },
        reset 
    } = useForm({
        defaultValues: {
            firstName:"",
            lastName:"",
            email: "",
            password:"",
            confirmedPassword:""
        }
    });

    const onSubmit = async (data) => {
        const pas = data.password;
        const confirmedPass = data.confirmedPassword;

        if(pas === confirmedPass){
            try {
                await registerUser(data);
                toast.success("Ti sei correttamente registrato", { autoClose: 2000 });
                reset();
            } catch (error) {
                toast.error("Registrazione fallita", { autoClose: 2000 });
            }
        } else {
            toast.error("Le password non coincidono", { autoClose: 2000 });
        }
     };


    return<>
        <div className={`${css.registrazioneBg}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="loginBg p-5">   
                            <form className="container bg-light rounded-3 shadow mt-5 w-25" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row-col">
                                    <div className="col-6"><h1 className="text-primary">Benvenuto</h1></div>
                                    <div className="col-9"><h4>Siamo felici tu voglia essere dei nostri !</h4></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nome</label>
                                    <input type="text" name="firstName" className="form-control shadow rounded-3 bg-light" {...register("firstName", { required: true})} />
                                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Cognome</label>
                                    <input type="text" name="lastName" className="form-control shadow rounded-3 bg-light" {...register("lastName", { required: true})} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                                    <input type="email" name="email" className="form-control shadow rounded-3 bg-light" {...register("email", { required: true})} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                    <input type="password" name="password" className="form-control shadow rounded-3 bg-light" {...register("password", { required: true})} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Conferma Password</label>
                                    <input type="password" name="confirmedPassword" className="form-control shadow rounded-3 bg-light" {...register("confirmedPassword", { required: true})} />
                                </div>
                                <button type="submit" className="btn btn-primary text-white mb-4 mt-2">Submit</button>
                            </form>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}