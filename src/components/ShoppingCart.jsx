import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = ({ userItemList, addOrDeleteToCart }) => {
    function displayCartItems() {
        return userItemList.map((itemData) => {
            return (
                <ShoppingCartItem
                    itemData={itemData}
                    userItemList={userItemList}
                    addOrDeleteToCart={addOrDeleteToCart}
                />
            );
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
