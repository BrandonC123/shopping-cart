import { useState } from "react";
import ItemCard from "./ItemCard";

const Shop = () => {
    const [itemArray, setItemArray] = useState([
        {
            title: "Sunglass 1",
            imgSrc: "/img/sunglass-1.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 2",
            imgSrc: "/img/sunglass-2.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 3",
            imgSrc: "/img/sunglass-3.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 4",
            imgSrc: "/img/sunglass-4.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 5",
            imgSrc: "/img/sunglass-5.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 6",
            imgSrc: "/img/sunglass-6.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 7",
            imgSrc: "/img/sunglass-7.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 8",
            imgSrc: "/img/sunglass-8.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 9",
            imgSrc: "/img/sunglass-9.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 10",
            imgSrc: "/img/sunglass-10.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 11",
            imgSrc: "/img/sunglass-11.png",
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 12",
            imgSrc: "/img/sunglass-12.png",
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
    return (
        <div className="item-card-container">
            {displayItems()}
        </div>
    );
};

export default Shop;
