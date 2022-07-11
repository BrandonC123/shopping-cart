import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import ItemPage from "./ItemPage";

const RouteSwitch = ({ itemCount, changeItemCount, setUserItemList }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/shop"
                element={
                    <Shop
                        changeItemCount={changeItemCount}
                        setUserItemList={setUserItemList}
                    />
                }
            />
            <Route path="/shop/:item" element={<ItemPage />} />
        </Routes>
    );
};

export default RouteSwitch;
