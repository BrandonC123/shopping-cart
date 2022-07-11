import { useState } from "react";
import Header from "./Header";
import ViewItems from "./ViewItems";

const Shop = () => {
    const [itemCount, setItemCount] = useState(0);
    const [userItemList, setUserItemList] = useState([
        { quantity: "", title: "", imgSrc: "", price: "" },
    ]);
    function changeItemCount(add) {}
    return (
        <div>
            <Header itemCount={itemCount} />
            <ViewItems
                changeItemCount={changeItemCount}
                setItemCount={setItemCount}
            />
        </div>
    );
};

export default Shop;
