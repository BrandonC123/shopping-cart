const ItemCard = ({ item }) => {
    // console.log(item);
    return (
        <div className="item-card">
            <img src={item.imgSrc} alt={item.title} />
            <h3 className="item-card-title">{item.title}</h3>
            <h4 className="item-card-price">{item.price}</h4>
        </div>
    );
};

export default ItemCard;
