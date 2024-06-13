import css from './header.module.css'
import insegnante from '../../assets/img/insegnante.png'
export function Header(){
    return<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h1 className={`${css.headerText}`}>La <b>Miglior</b> <br /> Piattaforma <br /> per imparare in modo <br /> facile e divertente ! <br /> <button className='btn btn-warning text-white w-25 shadow'>Scopri di più!</button> </h1>
                </div>
                <div className="col-6">
                    <img className="w-75" src={insegnante} alt="" />
                </div>
            </div>
        </div>
    </>
}