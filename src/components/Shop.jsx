import SaleBanner from "./SaleBanner";
import ItemCard from "./ItemCard";
import sunglass1 from "../img/sunglass-1.png";
import sunglass2 from "../img/sunglass-2.png";
import sunglass3 from "../img/sunglass-3.png";
import sunglass4 from "../img/sunglass-4.png";
import sunglass5 from "../img/sunglass-5.png";
import sunglass6 from "../img/sunglass-6.png";
import sunglass7 from "../img/sunglass-7.png";
import sunglass8 from "../img/sunglass-8.png";
import sunglass9 from "../img/sunglass-9.png";
import sunglass10 from "../img/sunglass-10.png";
import sunglass11 from "../img/sunglass-11.png";
import sunglass12 from "../img/sunglass-12.png";

const Shop = () => {
    const itemArray = [
        {
            title: "Sunglass 1",
            imgSrc: sunglass1,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 2",
            imgSrc: sunglass2,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 3",
            imgSrc: sunglass3,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 4",
            imgSrc: sunglass4,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 5",
            imgSrc: sunglass5,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 6",
            imgSrc: sunglass6,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 7",
            imgSrc: sunglass7,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 8",
            imgSrc: sunglass8,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 9",
            imgSrc: sunglass9,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 10",
            imgSrc: sunglass10,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 11",
            imgSrc: sunglass11,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
        {
            title: "Sunglass 12",
            imgSrc: sunglass12,
            price: "119.99",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum reiciendis fugiat quisquam possimus recusandae 
            similique daliquam voluptatibus eaque! Qui, dicta?`,
        },
    ];
    function displayItems() {
        return itemArray.map((item) => {
            return (
                <ItemCard
                    key={item.title.trim().toLowerCase().replace(/\s+/g, "-")}
                    item={item}
                />
            );
        });
    }
    return (
        <>
            <SaleBanner />
            <div className="item-card-container">{displayItems()}</div>
        </>
    );
};

export default Shop;
