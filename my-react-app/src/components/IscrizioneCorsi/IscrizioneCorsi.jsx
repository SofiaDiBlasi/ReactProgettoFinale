import css from './iscrizione.module.css'

export function IscrizioneCorsi(){

    return<>
        <div className={`${css.iscrizioneBg}`}>
             <form className="container-fluid w-50 bg-light rounded-3 shadow pt-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome e Cognome</label>
                    <input type="text" name="Titolo" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="autore" className="form-label">Scegli Corso</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Java</option>
                        <option value="1">Javascript</option>
                        <option value="2">React</option>
                        <option value="3">Angular</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-warning text-white mb-3">Invia e vai al pagamento</button>
            </form>
        </div>
    </>
}