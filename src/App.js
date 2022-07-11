import "./App.css";
import { useState } from "react";
import RouteSwitch from "./components/RouteSwitch";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
    const [itemCount, setItemCount] = useState(0);
    const [userItemList, setUserItemList] = useState([
        { quantity: "", title: "", imgSrc: "", price: "" },
    ]);
    function changeItemCount(add) {}

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
                            setUserItemList={setUserItemList}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
