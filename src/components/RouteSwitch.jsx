import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "./Header";
import Shop from "./Shop";

const RouteSwitch = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </Router>
    );
};

export default RouteSwitch;
