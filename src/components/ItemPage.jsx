import { useState } from "react";
import { useLocation } from "react-router-dom";

const ItemPage = ({ addOrDeleteToCart }) => {
    const location = useLocation();
    const item = location.state.item;
    const [quantity, setQuantity] = useState(1);
    function addItemToCart() {}
    return (
        <div className="item-page-container">
            <img src={item.imgSrc} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p className="item-description">{item.description}</p>
            <label htmlFor="item-quantity">Quantity:</label>
            <input
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
                type="number"
                defaultValue={1}
                id="item-quantity"
            />
            <button
                onClick={() => {
                    addOrDeleteToCart(true, { quantity: quantity, item });
                }}
                className="action-btn"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ItemPage;
