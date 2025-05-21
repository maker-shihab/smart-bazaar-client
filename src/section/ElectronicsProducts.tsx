import { useEffect, useState } from "react";
import { Product } from "../types/pagecontent";

const ElectronicsProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch watch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  return (
    <section className="elProduct bg-white py-20">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl text-blue-950 font-bold text-center mb-3">
            Top Electronics
          </h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover the latest in electronics with our curated selection of
            top-rated products. From cutting-edge gadgets to essential
            accessories, find everything you need to stay connected and
            entertained. Explore our collection and elevate your tech game!
          </p>
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4 rounded"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-blue-800 font-bold">${product.price}</p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {product.description}
                </p>
                <button className="mt-4 bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ElectronicsProducts;
