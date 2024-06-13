import css from './main.module.css'
import pc from '../../assets/img/pc.png'
import community from '../../assets/img/community.png'
import office from '../../assets/img/office.png'
import question from '../../assets/img/question.png'
import mouse from '../../assets/img/mouse.png'

export function MainSezione1(){
    return<>
    <div className="container-fluid mt-5 bg-light">
        <div className="row p-3 mb-5">
            <div className="col-9">
                <h2 className={`${css.darkBlueText}`}><b>Non le classiche lezioni online !</b></h2>
                <h5 className={`${css.darkBlueText}`}>Basta seguire come uno zombie !</h5>
                <p className={`${css.darkBlueText}`}>Ciò che rende CuteLearn veramente speciale è il suo forte impegno verso la creazione di
                    una community attiva e solidale. La piattaforma non solo fornisce risorse educative di
                    alta qualità, ma anche strumenti per connettere gli studenti tra loro e con esperti del settore. Attraverso forum di discussione, gruppi di studio, e sessioni di mentoring, CuteLearn facilita un ambiente collaborativo dove gli studenti possono condividere conoscenze, risolvere problemi insieme e costruire reti professionali.</p>
            </div>
            <div className="col-3">
                <div className={`${css.lilacBg}`}>
                    <img className={`${css.boxImg}`} src={mouse} alt="" />
                </div>
            </div>
        </div>
        <div className="row p-3">
            <div className="col-3">
                <div className={`${css.lightBlue}`}>
                        <img className={`${css.boxImg}`} src={pc} alt="" />
                    </div>
                </div>
            <div className="col-3">
                <div className={`${css.yellowBg}`}>
                        <img className={`${css.boxImg}`} src={community} alt="" />
                    </div>
                </div>
            <div className="col-3">
                <div className={`${css.greenBg}`}>
                        <img className={`${css.boxImg}`} src={office} alt="" />
                    </div>
                </div>
            <div className="col-3">
                 <div className={`${css.orangeBg}`}>
                    <img className={`${css.boxImg}`} src={question} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
}