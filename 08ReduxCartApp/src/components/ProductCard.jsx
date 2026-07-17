import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-xl shadow-md p-4 hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Product Image */}
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="w-full h-52 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="flex flex-col grow mt-3">
        <h3 className="font-semibold text-lg line-clamp-2 min-h-14">
          {product.title}
        </h3>

        <p className="text-purple-700 font-bold text-xl mt-2">
          ${product.price}
        </p>

        {/* Button always stays at bottom */}
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full mt-auto bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg transition"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;