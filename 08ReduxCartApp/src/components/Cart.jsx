import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Cart = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`rounded-xl p-4 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold border-b pb-3 mb-4">
        🛒 Shopping Cart
      </h2>

      {items.length === 0 ? (
        <p className="text-center py-6 text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <>
          {/* Scrollable Cart */}
          <div className="max-h-80 overflow-y-auto space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg border p-3 ${
                  theme === "dark"
                    ? "border-gray-700"
                    : "border-gray-200"
                }`}
              >
                <h3 className="font-semibold text-sm line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-purple-600 font-bold mt-2">
                  ${item.price}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      className="w-8 h-8 rounded bg-gray-300 text-black hover:bg-gray-400"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                      className="w-8 h-8 rounded bg-gray-300 text-black hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div
            className={`border-t mt-5 pt-4 ${
              theme === "dark"
                ? "border-gray-700"
                : "border-gray-300"
            }`}
          >
            <h3 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;