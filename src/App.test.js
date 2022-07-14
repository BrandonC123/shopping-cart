import { render, screen } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
import ItemPage from "./components/ItemPage";
import Shop from "./components/Shop";
import { useState } from "react";
import { act } from "react-dom/test-utils";

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
});
