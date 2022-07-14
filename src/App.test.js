import { render, screen } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
import ItemPage from "./components/ItemPage";
import Shop from "./components/Shop";
import { useState } from "react";
import { act } from "react-dom/test-utils";
import ShoppingCart from "./components/ShoppingCart";

describe("Shop component", () => {
    it("Properly renders item via ViewItems component", () => {
        render(<Shop />, { wrapper: MemoryRouter });
        expect(
            screen.getByRole("heading", { name: "Sunglass 1" }).textContent
        ).toMatch("Sunglass 1");
    });
    it("Renders all items", () => {
        render(<Shop />, { wrapper: MemoryRouter });
        expect(screen.getAllByRole("img").length).toBe(12);
    });
    it("Item page properly displays", () => {
        render(
            <MemoryRouter initialEntries={["/shop"]}>
                <Routes>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop/:item" element={<ItemPage />} />
                </Routes>
            </MemoryRouter>
        );
        userEvent.click(screen.getByTestId("Sunglass 1"));
        expect(screen.getByText("Sunglass 1").textContent).toMatch(
            "Sunglass 1"
        );
        expect(
            screen.getByRole("button", { name: "Add to Cart" }).textContent
        ).toMatch("Add to Cart");
    });
});

describe("Shopping Cart", () => {
    it("Adds to cart properly", () => {
        let itemCount = 0;
        const { rerender } = render(<Header itemCount={itemCount} />, {
            wrapper: MemoryRouter,
        });
        const addOrDeleteToCart = jest.fn(() => {
            itemCount++;
            rerender(<Header itemCount={itemCount} />);
        });
        render(
            <MemoryRouter initialEntries={["/shop"]}>
                {rerender}
                <Routes>
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/shop/:item"
                        element={
                            <ItemPage addOrDeleteToCart={addOrDeleteToCart} />
                        }
                    />
                </Routes>
            </MemoryRouter>
        );
        userEvent.click(screen.getByTestId("Sunglass 1"));
        userEvent.click(screen.getByText("Add to Cart"));
        expect(screen.getByText("1 Shopping Cart").textContent).toMatch(
            "1 Shopping Cart"
        );
    });
    it("Total price is calculated correctly", () => {
        render(
            <ShoppingCart
                userItemList={[
                    {
                        quantity: 2,
                        item: {
                            description: `Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Rerum reiciendis fugiat quisquam possimus 
                recusandae similique daliquam voluptatibus eaque! Qui, dicta?`,
                            imgSrc: "/img/sunglass-1.png",
                            price: "119.99",
                            title: "Sunglass 1",
                        },
                    },
                ]}
            />
        );
        expect(screen.getByText("Total: $239.98").textContent).toMatch(
            "Total: $239.98"
        );
    });
    it("Deletes item from cart properly", () => {
        const addOrDeleteToCart = jest.fn(() => {
            userItemList = [];
            rerender(
                <ShoppingCart
                    userItemList={userItemList}
                    addOrDeleteToCart={addOrDeleteToCart}
                />
            );
        });
        let userItemList = [
            {
                quantity: 2,
                item: {
                    description: `Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Rerum reiciendis fugiat quisquam possimus 
        recusandae similique daliquam voluptatibus eaque! Qui, dicta?`,
                    imgSrc: "/img/sunglass-1.png",
                    price: "119.99",
                    title: "Sunglass 1",
                },
            },
        ];
        const { Cart, rerender } = render(
            <ShoppingCart
                userItemList={userItemList}
                addOrDeleteToCart={addOrDeleteToCart}
            />
        );
        render(Cart);
        userEvent.click(screen.getByRole("button", { name: "Delete" }));
        expect(screen.getByText("Total: $0").textContent).toMatch("Total: $0");
    });
});
