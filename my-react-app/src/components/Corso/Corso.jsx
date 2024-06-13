import { NavLink } from "react-router-dom";
import catpc from '../../assets/img/catpc.png'
import css from './corso.module.css'

const Corso =({data}) => {
    return(
        <div className="border  bg-light border-warning m-5 bgCardElenco shadow p-1 rounded-3 col-5">
            <div className="card-body row rounded-3 mt-5 p-3 d-flex">
                <div className="col-6">
                    <p className="card-title w-auto">{data.Titolo}</p>
                    <p className="card-title w-auto">{data.Categoria}</p>
                    <br/>
                    <NavLink className="nav-link active text-center bg-warning rounded-3 mt-2 text-white p-2 w-50 mb-3" to={`dettaglio/${data.id}`} state={data}>Dettagli</NavLink>
                </div>
                <div className="col-6">
                    <img className={`${css.cardImg}`} src={catpc} alt="" />
                </div>
            </div>
        </div>
    )
};
export default Corso;