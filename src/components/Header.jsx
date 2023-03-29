import Logo from '../images/logo.png';

const Header = () => {
    return (
        <div className="header-container mt-4">
            <div className="container">
                <div className="d-flex align-items-start justify-content-between">
                    <div className="d-flex align-items-center header-logo text-white fs-3">
                        <img src={Logo} alt="" className='img-fluid me-3' width={48} />
                        Crowd Coin
                    </div>
                    <div className='d-flex'>
                        <div className="btn cc-btn px-4 rounded-3">
                            View<br />Campaign
                        </div>
                        <div className="btn cc-btn px-4 ms-3 rounded-3">
                            Create<br />Campaign
                        </div>
                        <div className="btn cc-btn-2 px-4 ms-3 align-middle rounded-3">
                            Log Out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;