import Icon from '../../images/icon.png';

const Card = () => {
    return (
        <div className="col-4">
            <div className="dashboard-card px-3 py-4 d-flex flex-column justify-content-between">
                <div>
                    <div className="dashboard-card-title">
                        Building a PC
                    </div>
                    <div className="dashboard-card-subtitle">
                        Campaign story goes here about what campaign is
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-6">
                            <div className="dashboard-card-data">
                                <div className="fw-bold">0.05</div>
                                <div className="">Baised of  0.5</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="dashboard-card-data">
                                <div className="fw-bold">2</div>
                                <div className="">Days Left</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-4 justify-content-center align-items-center">
                        <img src={Icon} alt="" className=" me-3" width={24} height={24} />
                        <div className='dashboard-card-by'>by 0xxjsnkdjenufebi3987565</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;