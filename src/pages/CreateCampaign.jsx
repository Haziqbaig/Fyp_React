import Header from "../components/Header";

const CreateCampaign = () => {
    return (
        <>
            <Header />
            <div className="container mt-5 px-4 d-flex justify-content-center">
                <div className="create-campaign-inner p-5 w-75">
                    <div className="w-100 create-campaign-title">
                        Create a campaign
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-6">
                            <div className="input-label">
                                Your Name*
                            </div>
                            <input type="text" className="form-control mt-2" placeholder="Name" />
                        </div>

                        <div className="col-6">
                            <div className="input-label">
                                Campaign Title*
                            </div>
                            <input type="text" className="form-control mt-2" placeholder="Title" />
                        </div>

                        <div className="col-12">
                            <div className="input-label">
                                Story*
                            </div>
                            <textarea name="story" id="" rows="6" className="w-100 form-control mt-2" placeholder="Write your story"></textarea>
                        </div>
                        <div className="d-block w-100 text-center mt-4">
                            <div className="btn cc-btn col-4 fw-bold p-3">Create</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateCampaign;