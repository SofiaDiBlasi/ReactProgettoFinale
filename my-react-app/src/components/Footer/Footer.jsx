export function Footer(){
    return<>
        <div className="container-fluid bg-warning">
            <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-1">CuteLearn è...</h5>
                            <h6 className="text-uppercase mb-4">Scoprici</h6>
                            <ul className="list-unstyled mb-4">
                                <li>
                                <a href="#!" className="text-white">Su di noi</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Dicono di noi</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Filosofia di insegnamento</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Collaborazioni</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-1">Assistenza</h5>
                            <h6 className="text-uppercase mb-4">Lun./Ven. 9.00/18.00</h6>
                            <ul className="list-unstyled">
                                <li>
                                <a href="#!" className="text-white">Contattaci</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Informazioni</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Pagamenti</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-1">Careers</h5>
                            <h6 className="text-uppercase mb-4">Aziende partner</h6>
                            <ul className="list-unstyled">
                                <li>
                                <a href="#!" className="text-white">Opportunità lavorative</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Iscriviti alla Newsletter</h5>
                            <div className="form-outline form-white mb-4">
                                <input type="email" id="form5Example2" className="form-control" placeholder='Inserisci la tua email' />
                            </div>
                            <button type="submit" className="btn btn-outline-white btn-primary btn-block">Iscriviti</button>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3 border-top border-white">
                    © 2024 Copyright: CuteLearn
                </div>
            </footer>
        </div>
    </>
}