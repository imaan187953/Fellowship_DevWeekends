import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const { theme } = useContext(ThemeContext);

  const [showCart, setShowCart] = useState(false);

  return (
    <div
      className={
        theme === "dark"
          ? "min-h-screen bg-gray-900 text-white transition-colors duration-300"
          : "min-h-screen bg-gray-100 text-black transition-colors duration-300"
      }
    >
      <Navbar
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <div className="max-w-7xl mx-auto p-6">
        <ProductList />
      </div>
    </div>
  );
}

export default App;