import { useNavigate } from "react-router";
import PageBanner from "../section/banner/PageBanner";

const Voucher = () => {
  const navigate = useNavigate();
  const pageContent = {
    title: "Voucher",
    description:
      "Discover the latest in electronics with our curated selection of top-rated products. From cutting-edge gadgets to essential accessories, find everything you need to stay connected and entertained. Explore our collection and elevate your tech game!",
  };
  return (
    <>
      <PageBanner pageContent={pageContent} />
      <div className="flex flex-col items-center justify-center pt-30">
        <h4 className="text-3xl font-black pb-3 text-center">
          🎟️ Voucher Page Coming Soon!
        </h4>
        <p className="text-center text-gray-300 max-w-2xl pb-6">
          We're working on something exciting. Soon you'll be able to apply
          discount vouchers and enjoy special deals on your favorite products!
        </p>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
          className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-900 transition"
        >
          Go To Home
        </button>
      </div>
    </>
  );
};

export default Voucher;
