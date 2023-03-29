import Card from "../components/campaign/Card";
import Header from "../components/Header";

const SingleCampaign = () => {
    return (
        <>
            <Header />
            <div className="container my-5">

                <div className="label">
                    Campaign Details
                </div>

                <div className="row mt-4">
                    <div className="col-8">
                        <div className="row gy-4">
                            <div className="col-6">
                                <div className="campaign-detail-data py-4">
                                    Name
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="campaign-detail-data py-4">
                                    Title
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="campaign-detail-data py-5">
                                    Detail
                                </div>
                            </div>
                            <Card name={'0xjhs9762648612'} title={'Address of Manager'} detail={'The manager created this campaign and can create requests to withdraw money'} />
                            <Card name={'100'} title={'Minimum Contribution (wei)'} detail={'You must contribute at least this much wei to become approver'} />
                            <Card name={'1'} title={'Number of Requests'} detail={'A request tries to withdraw money from the contract. Request must be approved by approvers.'} />
                            <Card name={'7'} title={'Number of Approvers'} detail={'Number of people who have already donated to this campaign'} />
                            <Card name={'0.0000245592699'} title={'Campaign Balance (Ether)'} detail={'The balance is how much money this campaign has left to spend.'} />
                            <div className="col-7">
                                <div className="btn cc-btn p-3 w-100 fw-bold">View Request</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-label">Amount to Contribute</div>
                        <input type="text" className="form-control py-3 px-4 rounded-4 mt-2" placeholder="Ether" />
                        <div className="btn cc-btn mt-3 p-3">Contribute!</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCampaign;