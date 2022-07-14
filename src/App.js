import "./App.css";
import { useEffect, useState } from "react";
import RouteSwitch from "./components/RouteSwitch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
    const [userItemList, setUserItemList] = useState([
        // Hardcoded test Item
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
    function addOrDeleteToCart(add, itemData) {
        const index = userItemList
            .map((itemData) => {
                return itemData.item.title;
            })
            .indexOf(itemData.item.title);
        if (add) {
            const quantity = JSON.parse(itemData.quantity);
            // Index = -1 means the same item is not already in the cart otherwise
            // quantity is just changed in else statement
            if (index === -1) {
                setUserItemList([...userItemList, itemData]);
            } else {
                let tempArray = Array.from(userItemList);
                tempArray[index].quantity += quantity;
                setUserItemList(tempArray);
            }
        } else {
            let tempArray = Array.from(userItemList);
            tempArray.splice(index, 1);
            setUserItemList(tempArray);
        }
    }
    function changeItemQuantity(add, itemData) {
        const quantity = itemData.quantity;
        const index = userItemList
            .map((itemData) => {
                return itemData.item.title;
            })
            .indexOf(itemData.item.title);
        let tempArray = Array.from(userItemList);
        if (add) {
            tempArray[index] = { quantity: quantity + 1, item: itemData.item };
        } else {
            // If quantity is 0 after subtracting, delete from cart
            if (tempArray[index].quantity - 1 === 0) {
                addOrDeleteToCart(false, itemData);
                return;
            }
            tempArray[index].quantity = quantity - 1;
        }
        setUserItemList(tempArray);
    }
    function updateCounter() {
        let total = 0;
        userItemList.forEach((itemData) => {
            total += JSON.parse(itemData.quantity);
        });
        setItemCount(total);
    }
    useEffect(() => {
        updateCounter();
    }, [userItemList]);
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
