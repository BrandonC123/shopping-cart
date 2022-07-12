import "./App.css";
import { useState } from "react";
import RouteSwitch from "./components/RouteSwitch";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
    const [itemCount, setItemCount] = useState(0);
    const [userItemList, setUserItemList] = useState([]);
    function changeItemCount(add) {}
    function addOrDeleteToCart(add, item) {
        if (add) {
            setUserItemList([...userItemList, item]);
            setItemCount(itemCount + JSON.parse(item.quantity));
            console.log(userItemList);
        }
    }

    return (
        <Router>
            <Header itemCount={itemCount} />
            <Routes>
                <Route
                    path="*"
                    element={
                        <RouteSwitch
                            changeItemCount={changeItemCount}
                            userItemList={userItemList}
                            addOrDeleteToCart={addOrDeleteToCart}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
