import Card from "../components/dashboard/Card";
import Header from "../components/Header";

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="label">
                    Open Campaigns (6)
                </div>
                <div className="row gy-3 mt-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default Dashboard;