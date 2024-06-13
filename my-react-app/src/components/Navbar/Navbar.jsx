import { NavLink } from "react-router-dom"
import { LoginContext } from "../../contexts/LoginContext";
import { LoggedUserContext } from "../../contexts/LoggedUserContext";
import { useContext } from "react";
import Cookies from 'js-cookie';

export function Navbar(){
    const {login,setLogin} = useContext(LoginContext);
    const {loggedUser,setLoggedUser} = useContext(LoggedUserContext);

    async function esci(event) {
      event.preventDefault();
      setLogin(false);
      Cookies.remove("login");
      Cookies.remove("loggedUser");
      Cookies.remove("JWT");
  }

    return<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow">
          <div className="container-fluid">
          <NavLink className="navbar-brand text-decoration-none" href="#">CuteLearn</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {login ? <NavLink className="nav-link text-decoration-none" to="elencocorsi" href="#">Tutti i Corsi</NavLink>: ''}
              </li>
              <li className="nav-item">
                {login && loggedUser.role[0] === 'Admin' ? <NavLink className="nav-link text-decoration-none" to="aggiungi" href="#">Aggiungi Corsi</NavLink>: ''}
              </li>
              <li className="nav-item">
                 {login ? <NavLink className="nav-link text-decoration-none" to="iscrizione" href="#">Iscriviti ai Corsi</NavLink>: ''}
              </li>
              <li className="nav-item">
                 {login && loggedUser.role[0] === 'Admin' ? <NavLink className="nav-link text-decoration-none" to="utenti" href="#">Tutti gli utenti</NavLink>: ''}
              </li>
              <li className="nav-item">
                 {login && loggedUser.role[0] === 'Admin' ? <NavLink className="nav-link text-decoration-none" to="logs" href="#">Logs</NavLink>: ''}
              </li>
            </ul>
            <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  { !login ?
                    <li><NavLink className="dropdown-item m-2 text-decoration-none" to="login" href="#">Login</NavLink></li>
                  : <li><NavLink className="dropdown-item m-2 text-decoration-none" onClick={(event)=>esci(event)} to="" href="#">Log Out</NavLink></li>}
                  {login ? <li><NavLink className="dropdown-item m-2 text-decoration-none" to="profilo" href="#">Profilo</NavLink></li>: ''}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
}