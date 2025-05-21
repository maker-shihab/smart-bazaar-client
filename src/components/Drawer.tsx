import { FaMinusSquare } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";
import { CartItem } from "../types/cartType";
import { Props } from "../types/drawer";

const Drawer = ({ open, setOpen }: Props) => {
  const { cartItems, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 bg-opacity-50 z-50"
      onClick={() => setOpen(false)}
    >
      <div
        className="absolute right-0 top-0 h-full w-[320px] bg-[#181c3d] p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Your Products</h2>

        {cartItems.length === 0 ? (
          <p>No products in cart</p>
        ) : (
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] relative z-50">
            {cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="border p-3 rounded flex justify-between items-center"
              >
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-gray-100">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="text-white px-2 rounded"
                    onClick={() => decreaseQty(item.id)}
                  >
                    <FaMinusSquare />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="text-white px-2 rounded"
                    onClick={() => increaseQty(item.id)}
                  >
                    <FaSquarePlus />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          className="mt-6 w-full bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          onClick={() => {
            setOpen(false);
            navigate("/checkout");
          }}
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Drawer;
