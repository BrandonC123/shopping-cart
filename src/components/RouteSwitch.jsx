import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import ItemPage from "./ItemPage";
import ShoppingCart from "./ShoppingCart";

const RouteSwitch = ({
    userItemList,
    addOrDeleteToCart,
    changeItemQuantity,
}) => {
    return (
        <Routes>
            <Route path="/shopping-cart/" element={<Home />} />
            <Route
                path="/shopping-cart/shop/*"
                element={<Shop addOrDeleteToCart={addOrDeleteToCart} />}
            />
            <Route
                path="/shopping-cart/shop/:item"
                element={<ItemPage addOrDeleteToCart={addOrDeleteToCart} />}
            />
            <Route
                path="/shopping-cart/home/shopping-cart"
                element={
                    <ShoppingCart
                        userItemList={userItemList}
                        addOrDeleteToCart={addOrDeleteToCart}
                        changeItemQuantity={changeItemQuantity}
                    />
                }
            />
        </Routes>
    );
};

export default RouteSwitch;
