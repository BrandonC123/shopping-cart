import "./App.css";
import { useState } from "react";
import RouteSwitch from "./components/RouteSwitch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
    const [userItemList, setUserItemList] = useState([
        {
            quantity: 1,
            item: {
                description: `Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Rerum reiciendis fugiat quisquam possimus 
                recusandae similique daliquam voluptatibus eaque! Qui, dicta?`,
                imgSrc: "/img/sunglass-1.png",
                price: "119.99",
                title: "Sunglass 1",
            },
        },
    ]);
    const [itemCount, setItemCount] = useState(0);
    function addOrDeleteToCart(add, item) {
        const index = userItemList
            .map((itemData) => {
                return itemData.item.title;
            })
            .indexOf(item.item.title);
        if (add) {
            const quantity = JSON.parse(item.quantity);
            // Index = -1 means the same item is not already in the cart otherwise
            // quantity is just changed in else statement
            if (index === -1) {
                setUserItemList([...userItemList, item]);
                setItemCount(itemCount + JSON.parse(item.quantity));
                console.log(userItemList);
            } else {
                let tempArray = Array.from(userItemList);
                tempArray[index].quantity += quantity;
                setUserItemList(tempArray);
                console.log(index);
            }
            setItemCount(itemCount + JSON.parse(quantity));
        } else {
            let tempArray = Array.from(userItemList);
            tempArray.splice(index, 1);
            setUserItemList(tempArray);
        }
    }
    function changeItemQuantity(add, item) {
        const quantity = item.quantity;
        const index = userItemList
            .map((itemData) => {
                return itemData.item.title;
            })
            .indexOf(item.item.title);
        let tempArray = Array.from(userItemList);
        if (add) {
            tempArray[index] = { quantity: quantity + 1, item: item.item };
        } else {
            // If quantity is 0 after subtracting, delete from cart
            if (tempArray[index].quantity - 1 === 0) {
                addOrDeleteToCart(false, item);
                return;
            }
            tempArray[index].quantity = quantity - 1;
        }
        setUserItemList(tempArray);
    }
    return (
        <Router>
            <Header itemCount={itemCount} />
            <Routes>
                <Route
                    path="*"
                    element={
                        <RouteSwitch
                            userItemList={userItemList}
                            addOrDeleteToCart={addOrDeleteToCart}
                            changeItemQuantity={changeItemQuantity}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
