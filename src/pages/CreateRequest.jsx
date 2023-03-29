import Header from "../components/Header";

const CreateRequest = () => {
    return (
        <>
            <Header />
            <div className="container mt-5 px-4 d-flex justify-content-center">
                <div className="create-campaign-inner p-5 w-75">
                    <div className="w-100 create-campaign-title">
                        Create a request
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-12">
                            <div className="input-label">
                                Description
                            </div>
                            <input type="text" className="form-control mt-2 rounded-3" placeholder="Description" />
                        </div>

                        <div className="col-12">
                            <div className="input-label">
                                Value in Ether
                            </div>
                            <input type="text" className="form-control mt-2 rounded-3" placeholder="Value" />
                        </div>

                        <div className="col-12">
                            <div className="input-label">
                                Recipient
                            </div>
                            <input type="text" className="form-control mt-2 rounded-3" placeholder="Recipient" />
                        </div>

                        <div className="d-block w-100 text-center mt-4">
                            <div className="btn cc-btn col-2 fw-bold p-3">Create</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateRequest;