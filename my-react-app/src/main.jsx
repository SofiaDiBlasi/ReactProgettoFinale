import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import { MainLayout } from './components/MainLayout/MainLayout.jsx';
import { AggiungiCorsi } from './components/AggiungiCorsi/AggiungiCorsi.jsx';
import { ElencoCorsi} from './components/ElencoCorsi/ElencoCorsi.jsx';
import { Utenti} from './components/Utenti/Utenti.jsx';
import { Login } from './components/Login/Login.jsx';
import { Registrazione } from './components/Registrazione/Registrazione.jsx';
import { Profilo} from './components/Profilo/Profilo.jsx';
import { DettagliCorso } from './components/DettagliCorso/DettagliCorso.jsx';
import { ModificaCorso } from './components/ModificaCorso/ModificaCorso.jsx';
import { IscrizioneCorsi } from './components/IscrizioneCorsi/IscrizioneCorsi.jsx';
import LoginContextProvider  from "./contexts/LoginContext.jsx";
import LoggedUserContextProvider from "./contexts/LoggedUserContext";
//import { LogsAdmin } from './components/LogsAdmin/LogsAdmin.jsx';

const router = createBrowserRouter([
    {
      element: <MainLayout/>,
      children: [
        {
          path: "",
        element:<Home/>
        },
        {
          path: "/aggiungi",
          element:<AggiungiCorsi/>
        },
        {
          path: "/elencocorsi",
          element:<ElencoCorsi/>
        },
        {
          path: "/elencocorsi/dettaglio/:id",
          element:<DettagliCorso/>
        },
        {
          path: "/elencocorsi/dettaglio/:id/modifica",
          element:<ModificaCorso/>
        },
        {
          path: "/iscrizione",
          element:<IscrizioneCorsi/>
        },
        {
          path: "/utenti",
          element:<Utenti/>
        },
        {
          path: "/login",
          element:<Login/>
        },
        {
          path: "/login/registrazione",
          element:<Registrazione/>
        },
        {
          path: "/profilo",
          element: <Profilo/>
        },
        {
          path:"/iscrizione",
          element:<IscrizioneCorsi/>
        }
        /*{
          path:"/logs",
          element:<LogsAdmin/>
        }*/
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginContextProvider>
            <LoggedUserContextProvider>
                <RouterProvider router={router} />
            </LoggedUserContextProvider>
  </LoginContextProvider>
)
