import { Link } from "react-router-dom";

const Header = ({ itemCount }) => {
    return (
        <header className="header">
            <nav className="header-nav container">
                <Link to={"/shopping-cart/"}>
                    <li>Home</li>
                </Link>
                <Link to={"/shopping-cart/shop/"} className={"shop-link"}>
                    <li>Shop</li>
                </Link>
                <Link to={"/shopping-cart/home/shopping-cart"}>
                    <li
                        className="shopping-cart-icon-container"
                        data-testid="shopping-cart"
                    >
                        <img
                            src="/img/shopping-cart-icon.svg"
                            alt="Shopping cart icon"
                        />
                        {itemCount} Shopping Cart
                    </li>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
