import Header from "../components/Header";

const Requests = () => {
    // const renderRows = () => {
    //     return this.props.requests.map((request, index) => {
    //       return (
    //         <RequestRow
    //           key={index}
    //           id={index}
    //           request={request}
    //           address={this.props.address}
    //           approversCount={this.props.approversCount}
    //         />
    //       );
    //     });
    //   }

    return (
        <>
            <Header />

            <div className="container mt-5">
                <div className="label">
                    Requests
                </div>
                <div className="mt-4">
                    <div className="d-flex justify-content-end">
                        <div className="btn cc-btn p-3 fw-bold">New Request</div>
                    </div>
                    <table className="table table-borderless mt-3 text-white border-0">
                        <thead className="border-bottom border-2">
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Recipient</th>
                                <th>Approval Count</th>
                                <th>Approve</th>
                                <th>Finalize</th>
                            </tr>
                        </thead>
                        <tbody className="fw-light">
                            <tr>
                                <td>0</td>
                                <td>Want to buy batteries</td>
                                <td>0.00000000000125</td>
                                <td>0xsjdhs966862349232</td>
                                <td>3/7</td>
                                <td>
                                    <div className="btn btn-sm cc-btn p-2 fw-bold px-3">Approve</div>
                                </td>

                                <td>
                                    <div className="btn btn-sm cc-btn p-2 fw-bold px-3">Finalize</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="input-label">Found one request</div>
                </div>
            </div>
        </>
    );
}

export default Requests;