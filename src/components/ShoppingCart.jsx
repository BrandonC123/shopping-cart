import { useEffect, useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = ({
    userItemList,
    addOrDeleteToCart,
    changeItemQuantity,
}) => {
    const [totalPrice, setTotalPrice] = useState([]);
    function displayCartItems() {
        return userItemList.map((itemData) => {
            return (
                <ShoppingCartItem
                    itemData={itemData}
                    userItemList={userItemList}
                    addOrDeleteToCart={addOrDeleteToCart}
                    changeItemQuantity={changeItemQuantity}
                />
            );
        });
    }
    function calculateTotal() {
        let total = 0;
        userItemList.forEach((itemData) => {
            total += itemData.item.price * itemData.quantity;
        });
        setTotalPrice(Math.round(total * 100) / 100);
    }
    useEffect(() => {
        calculateTotal();
    }, [userItemList]);
    return (
        <div className="shopping-cart-container row">
            <div className="shopping-cart-item-container">
                {displayCartItems()}
            </div>
            <div className="shopping-cart-text">
                <p>Total: ${totalPrice}</p>
                <button className="danger-btn btn">Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
