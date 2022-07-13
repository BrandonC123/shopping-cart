const ShoppingCartItem = ({
    itemData,
    userItemList,
    addOrDeleteToCart,
    changeItemQuantity,
}) => {
    console.log(itemData);
    let quantity = itemData.quantity;
    const item = itemData.item;

    return (
        <div className="shopping-cart-item">
            <img src={item.imgSrc} alt={item.title} />
            <div className="shopping-cart-item-content">
                <div className="item-quantity-container row">
                    <button onClick={() => changeItemQuantity(false, itemData)}>
                        -
                    </button>
                    <p id={item.title.toLowerCase().trim()}>{quantity}</p>
                    <button onClick={() => changeItemQuantity(true, itemData)}>
                        +
                    </button>
                </div>
                <button
                    onClick={() => {
                        addOrDeleteToCart(false, itemData);
                    }}
                >
                    delete
                </button>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        </div>
    );
};

export default ShoppingCartItem;
