const ShoppingCartItem = ({ itemData, userItemList, addOrDeleteToCart }) => {
    console.log(itemData);
    let quantity = itemData.quantity;
    const item = itemData.item;
    function changeItemQuantity(add) {
        const index = userItemList
            .map((itemData) => {
                return itemData.item.title;
            })
            .indexOf(item.title);
        let tempArray = Array.from(userItemList);
        if (add) {
            userItemList[index].quantity = quantity + 1;
        } else {
            userItemList[index].quantity = quantity - 1;
        }
    }
    return (
        <div className="shopping-cart-item">
            <img src={item.imgSrc} alt={item.title} />
            <div className="shopping-cart-item-content">
                <div className="item-quantity-container row">
                    <button onClick={() => changeItemQuantity()}>-</button>
                    <p id={item.title.toLowerCase().trim()}>{quantity}</p>
                    <button>+</button>
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
