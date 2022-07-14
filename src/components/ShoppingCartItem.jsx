const ShoppingCartItem = ({
    itemData,
    addOrDeleteToCart,
    changeItemQuantity,
}) => {
    console.log(itemData);
    let quantity = itemData.quantity;
    const item = itemData.item;

    return (
        <div className="shopping-cart-item">
            <img src={item.imgSrc} alt={item.title} />
            <div className="shopping-cart-item-content column">
                <div className="item-quantity-container row">
                    <button
                        onClick={() => changeItemQuantity(false, itemData)}
                        className="item-quantity-btn"
                    >
                        -
                    </button>
                    <div className="item-quantity">{quantity}</div>
                    <button
                        onClick={() => changeItemQuantity(true, itemData)}
                        className="item-quantity-btn"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => {
                        addOrDeleteToCart(false, itemData);
                    }}
                    className="secondary-danger-btn btn"
                >
                    Delete
                </button>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        </div>
    );
};

export default ShoppingCartItem;
