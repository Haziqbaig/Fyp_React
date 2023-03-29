const Card = ({ name, title, detail }) => {
    return (
        <div className="col-4">
            <div className="campaign-detail-card py-3 px-2 h-100">
                <div className="campaign-card-name">{name}</div>
                <div className="campaign-card-title mt-3">{title}</div>
                <div className="campaign-card-detail mt-3">{detail}</div>
            </div>
        </div>
    );
}

export default Card;