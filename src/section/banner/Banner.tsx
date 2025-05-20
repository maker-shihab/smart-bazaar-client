import { Link } from "react-router-dom";
import BannerThumb from "../../assets/heat-phone.png";
const Banner = () => {
  return (
    <section className="banner_area">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-4 py-6">
          <div className="text-white p-4">
            <h1 className="text-6xl font-bold">
              Louder & <br /> More Clearly
            </h1>
            <p className="mt-6 text-2xl pb-8">
              With the latest technology that <br /> produces clearer sound and
              louder bass.
            </p>
            <Link
              to="/"
              className="bg-white rounded-lg py-3 px-8 text-blue-950 font-bold"
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
