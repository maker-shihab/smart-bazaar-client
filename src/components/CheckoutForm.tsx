import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useCart } from "../hooks/useCart";

const CheckoutForm = () => {
  const { cartItems, getTotal, clearCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    // NOTE: This does not create a real payment; test mode only
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: error.message || "Something went wrong!",
      });
    } else {
      clearCart();
      Swal.fire({
        icon: "success",
        title: "Payment Successful!",
        html: `
          <p>Your PaymentMethod ID:</p>
          <code>${paymentMethod.id}</code>
        `,
        confirmButtonText: "Go to Home",
      }).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 shadow-md rounded bg-white mt-24">
      <h1 className="text-2xl font-bold mb-4 text-blue-950">Checkout</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-2 text-blue-950">
          <span>
            {item.name} × {item.quantity}
          </span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}

      <div className="font-bold mt-4 border-t pt-2 text-right text-blue-950">
        Total: ${getTotal()}
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <CardElement className="p-3 border rounded mb-4 text-blue-950" />
        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Pay Now (Test)
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
