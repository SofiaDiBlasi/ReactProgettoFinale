import { useOutlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export function MainLayout(){
    
    const outlet = useOutlet();

    return<>
        <Navbar/>
        {outlet}
    </>
}