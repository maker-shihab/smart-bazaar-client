import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import PageBanner from "../section/banner/PageBanner";
import { stripePromise } from "../services/key";

const Checkout = () => {
  const pageContent = {
    title: "Checkout",
    description:
      "Complete your purchase and enjoy the latest in electronics with our curated selection of top-rated products. From cutting-edge gadgets to essential accessories, find everything you need to stay connected and entertained. Explore our collection and elevate your tech game!",
  };
  return (
    <>
      <PageBanner pageContent={pageContent} />
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};

export default Checkout;
