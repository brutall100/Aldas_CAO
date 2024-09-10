import '../css/Card.css';

const Card = (props) => {
    const { imgUrl, imgAlt, title } = props;
    return (
        <div className="card">
            <img src={imgUrl} alt={imgAlt} />
            <div className="card-content">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Card;