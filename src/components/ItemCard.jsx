import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <Link
            to={`/shopping-cart/shop/${item.title}`}
            state={{ item: item }}
            data-testid={item.title}
        >
            <div className="item-card">
                <img src={item.imgSrc} alt={item.title} />
                <h4 className="item-card-title">{item.title}</h4>
                <p className="item-card-price">${item.price}</p>
            </div>
        </Link>
    );
};

export default ItemCard;
