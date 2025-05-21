import { useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import Drawer from "./Drawer";
const Header = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    if (totalQuantity > 0) {
      setOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = scrollY > 0 ? "bg-[#181c3d]" : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4 py-6">
            <div className="logo">
              <Link to="/" className="block">
                SmartBazar
              </Link>
            </div>
            <nav>
              <ul className="flex items-center justify-center gap-4">
                <li>
                  <Link
                    to="/"
                    className="block text-base font-medium py-2 px-6"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-base font-medium py-2 px-6"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-base font-medium py-2 px-6"
                    to="/voucher"
                  >
                    Voucher
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-8">
              <button
                type="button"
                className="btn_cart relative"
                onClick={handleCartClick}
              >
                <RiShoppingCartLine className="text-2xl text-white" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </button>
              <button
                type="button"
                className="bg-white rounded-lg py-1 px-6 text-blue-950 font-bold"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
