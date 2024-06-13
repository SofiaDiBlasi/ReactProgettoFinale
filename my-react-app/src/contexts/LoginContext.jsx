import { createContext } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';

export const LoginContext = createContext(null)
export default function LoginContextProvider({ children }) {
    const [login, setLogin] = useState(Cookies.get('login') ? Cookies.get('login') : false)
    return(
        <LoginContext.Provider value={{login, setLogin}}>
            {children}
        </LoginContext.Provider>
    )
}
