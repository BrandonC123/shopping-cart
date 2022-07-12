const ShoppingCartItem = ({ itemData }) => {
    console.log(itemData);
    const quantity = itemData.quantity;
    const item = itemData.item;
    return (
        <div className="shopping-cart-item">
            <img src={item.imgSrc} alt={item.title} />
            <div className="shopping-cart-item-content">
                <input
                    type={"number"}
                    id={item.title.toLowerCase().trim()}
                    defaultValue={quantity}
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        </div>
    );
};

export default ShoppingCartItem;
