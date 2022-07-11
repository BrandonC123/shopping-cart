const ItemCard = ({ imgTitle, imgSrc, imgDescription }) => {
    return (
        <div className="item-card-container">
            <img src={imgSrc} alt={imgTitle} />
        </div>
    );
};

export default ItemCard;
