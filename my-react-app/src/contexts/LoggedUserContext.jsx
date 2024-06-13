import { createContext } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';

export const LoggedUserContext = createContext(null)
export default function LoggedUserContextProvider({ children }) {
    const [loggedUser, setLoggedUser] = useState(Cookies.get('loggedUser') ? JSON.parse(Cookies.get('loggedUser')) : null)
    return (
        <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
            {children}
        </LoggedUserContext.Provider>
    )
}