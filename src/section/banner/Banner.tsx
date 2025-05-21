import { Link } from "react-router-dom";
import BannerThumb from "../../assets/heat-phone.png";
const Banner = () => {
  return (
    <section className="banner_area">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex justify-between items-center py-6 gap-10">
          <div className="text-white p-4">
            <h1 className="text-6xl font-bold">
              Louder & <br /> More Clearly
            </h1>
            <p className="mt-6 text-2xl pb-10">
              With the latest technology that <br /> produces clearer sound and
              louder bass.
            </p>
            <Link
              to="/products"
              className="bg-white rounded-lg py-3 px-8 text-blue-950 font-bold inline-block"
            >
              See Details
            </Link>
          </div>
          <div className="banner_thumb">
            <img src={BannerThumb} alt="thumb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
