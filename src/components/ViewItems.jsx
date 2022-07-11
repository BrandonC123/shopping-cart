import { useState } from "react";
import ItemCard from "./ItemCard";

const ViewItems = () => {
    const [itemArray, setItemArray] = useState([
        {
            title: "Sunglass 1",
            imgSrc: "./img/sunglass-1.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 2",
            imgSrc: "./img/sunglass-1.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 2",
            imgSrc: "./img/sunglass-1.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
    ]);
    function displayItems() {
        return itemArray.map((item) => {
            return <ItemCard item={item} />;
        });
    }
    return <div className="item-card-container">{displayItems()}</div>;
};

export default ViewItems;
