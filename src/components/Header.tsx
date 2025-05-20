import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
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
                <Link to="/" className="block text-base font-medium py-2 px-6">
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
            <button type="button" className="btn_cart">
              <RiShoppingCartLine className="text-2xl text-white" />
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
  );
};

export default Header;
