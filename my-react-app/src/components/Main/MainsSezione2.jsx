import css from './main.module.css'
import mBanner from '../../assets/img/mBanner.png'

export function MainSezione2(){
    return<>
    <div className="container-fluid mt-5">
        <div className="row p-1">
            <div className="col-6">
                <img className='w-75 mt-5' src={mBanner} alt="" />
            </div>
            <div className="col-6 mt-5">
                <h1 className={`${css.darkBlueText}`}>Ti offriamo Coaching <br /> <b className='text-warning'>personalizzato</b> <br /> in base al tuo livello di Skills</h1>
                <div className='mt-3'>
                    <h3 className={`${css.darkBlueText}`}>Avrai a disposizione un tutor con il quale potrai <br />
                        confrontarti giornalmente su dubbi pratici e teorici !
                    </h3>
                    <h3 className={`${css.darkBlueText}`}>Altri vantaggi :
                    </h3>
                </div>
                <div className="d-flex">
                    <div className='m-2 border border-warning rounded-3 p-3 text-center bg-warning w-25'>
                    <h4 className={`${css.darkBlueText}`}>Dove vuoi quando vuoi</h4>
                    <p className={`${css.darkBlueText}`}>La frequenza br è solo online !</p>
                    </div>
                    <div className='m-2 border border-warning rounded-3 p-3 text-center bg-warning w-25'>
                        <h4 className={`${css.darkBlueText}`}>Attestato</h4>
                        <p className={`${css.darkBlueText}`}>Rilascio di un attestato <br />valido nel mondo de lavoro</p>
                    </div>
                    <div className='m-2 border border-warning rounded-3 p-3 text-center bg-warning w-25'>
                        <h4 className={`${css.darkBlueText}`}>Webinar</h4>
                        <p className={`${css.darkBlueText}`}>Partecipazione gratuita <br /> per sempre a tutti i nostri <br /> webinar ed eventi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}