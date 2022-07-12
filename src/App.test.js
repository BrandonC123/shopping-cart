import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import Shop from "./components/Shop";

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
        render(<Shop />, { wrapper: MemoryRouter });
        const itemLink = screen.getByText("Sunglass 1");
        userEvent.click(itemLink);
        expect(screen.getByText("Sunglass 1").textContent).toMatch(
            "Sunglass 1"
        );
    });
});
