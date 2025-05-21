import { useEffect, useState } from "react";
import PageBanner from "../section/banner/PageBanner";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const pageContent = {
    title: "Welcome to Our Store",
    description:
      "Discover the latest in electronics with our curated selection of top-rated products From cutting-edge gadgets to essential accessories find everything you need to stay connected and entertained Explore our collection and elevate your tech game!",
  };
  return (
    <>
      <PageBanner pageContent={pageContent} />
      <div className="productPage py-20">
        <div className="container mx-auto">
          <div className="text-center pb-6">
            <h2 className="text-white text-3xl font-bold pb-3">Products</h2>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Discover the latest in electronics with our curated selection of
              top-rated products. From cutting-edge gadgets to essential
              accessories, find everything you need to stay connected and
              entertained. Explore our collection and elevate your tech game!
            </p>
          </div>
          <div>
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="p-4 rounded-2xl shadow hover:shadow-lg transition bg-gray-900/20 backdrop-blur-2xl"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-40 object-contain mb-4 rounded"
                    />
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-white/75 py-2 text-sm">
                      {product.description}
                    </p>
                    <p className="text-white font-bold">${product.price}</p>
                    <button className="bg-blue-950 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
