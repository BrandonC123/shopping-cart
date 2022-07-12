import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <Link to={`/shop/${item.title}`} state={{ item: item }}>
            <div className="item-card">
                <img src={item.imgSrc} alt={item.title} />
                <h3 className="item-card-title">{item.title}</h3>
                <h4 className="item-card-price">{item.price}</h4>
            </div>
        </Link>
    );
};

export default ItemCard;
