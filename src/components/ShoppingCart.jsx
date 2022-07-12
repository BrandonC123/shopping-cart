import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = ({ userItemList }) => {
    function displayCartItems() {
        return userItemList.map((itemData) => {
            return <ShoppingCartItem itemData={itemData} />;
        });
    }
    return (
        <div className="shopping-cart-container row">
            <div className="shopping-cart-item-container">
                {displayCartItems()}
            </div>
            <div className="shopping-cart-text">
                <p>Total:</p>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
