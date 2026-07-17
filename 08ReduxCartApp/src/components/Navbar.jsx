import { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";

import Cart from "./Cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ showCart, setShowCart }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      } shadow-md px-6 py-4 flex justify-between items-center relative`}
    >
      <h1 className="text-2xl font-bold">
        <FontAwesomeIcon icon={faCartShopping} /> Redux Cart App
      </h1>

      <div className="flex items-center gap-4">
        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg border transition ${
            theme === "dark"
              ? "border-gray-600 hover:bg-gray-700"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          <FontAwesomeIcon
            icon={theme === "light" ? faMoon : faSun}
          />{" "}
          {theme === "light" ? "Dark" : "Light"}
        </button>

        {/* Cart Button + Popup */}
        <div className="relative">
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg transition"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {" "}
            Cart ({totalItems})
          </button>

          {/* Popup */}
          {showCart && (
            <div
              className={`absolute right-0 mt-3 w-95 rounded-xl shadow-2xl z-50 ${
                theme === "dark"
                  ? "bg-gray-800"
                  : "bg-white"
              }`}
            >
              <Cart />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;