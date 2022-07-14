import { useState } from "react";
import { useLocation } from "react-router-dom";

const ItemPage = ({ addOrDeleteToCart }) => {
    const location = useLocation();
    const item = location.state.item;
    const [quantity, setQuantity] = useState(1);
    return (
        <section className="item-page-container container row">
            <img
                className="item-page-img"
                src={process.env.PUBLIC_URL + item.imgSrc}
                alt={item.title}
            />
            <div className="item-page-content">
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
                    min={1}
                    id="item-quantity"
                />
                <button
                    onClick={() => {
                        addOrDeleteToCart(true, { quantity: quantity, item });
                    }}
                    className="action-btn btn"
                >
                    Add to Cart
                </button>
            </div>
        </section>
    );
};

export default ItemPage;
