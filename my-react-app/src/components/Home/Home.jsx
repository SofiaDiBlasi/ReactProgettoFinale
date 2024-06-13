import { Navbar } from "../Navbar/Navbar"
import { Header } from "../Header/Header"
import { MainSezione1 } from "../Main/MainSezione1"
import { MainSezione2 } from "../Main/MainsSezione2"
import { Footer } from "../Footer/Footer"

export function Home(){

    return<>
        <Header/>
        <MainSezione1/>
        <MainSezione2/>
        <Footer/>
    </>
}