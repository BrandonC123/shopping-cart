import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = ({
    userItemList,
    addOrDeleteToCart,
    changeItemQuantity,
}) => {
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
