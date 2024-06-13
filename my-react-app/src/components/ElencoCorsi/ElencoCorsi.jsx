import { useEffect,useState } from "react";
import Corso from "../Corso/Corso";
import { getCorsi } from "../../config/corsiService";
import developer from '../../assets/img/developer.png'
import pcportatile from '../../assets/img/pcportatile.png'
import css from './elenco.module.css'

export function ElencoCorsi(){
    const [corsi,setCorsi] = useState([]);

    useEffect( ()=>{
        async function fetchCorsi(){
            const corsi = await getCorsi();
            setCorsi(corsi);
        }
        fetchCorsi();
    },[])
    return<>
        <div className={`${css.bgConfetti}`}>
            <div className="container-fluid">
                    <div className="row d-flex">
                        <div className="col-7 p-5 colonnaCorsi">
                        {corsi.map((element) => (
                            <Corso data={element} />
                        ))}
                        </div>
                        <div className="col-4">
                            <img className="w-100 mt-5" src={developer} alt="" />
                            <img className="w-100 mt-5" src={pcportatile} alt="" />
                        </div>
                    </div>
                </div>
        </div>
    </>
}