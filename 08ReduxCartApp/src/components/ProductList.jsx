import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import ProductCard from "./ProductCard";
import { ThemeContext } from "../context/ThemeContext";

const ProductList = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading)
    return (
      <h2
        className={`text-2xl font-semibold text-center mt-10 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Loading Products...
      </h2>
    );

  if (error)
    return (
      <h2 className="text-red-500 text-center mt-10">
        Error: {error}
      </h2>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
      {products.map((product) => (
        <div key={product.id} className="h-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;