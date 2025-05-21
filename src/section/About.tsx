import { Link } from "react-router-dom";
import AboutThumb from "../assets/about-thumb.svg";
const About = () => {
  return (
    <section className="py-16 bg-[#2f356d]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          About Smart Bazaar
        </h2>
        <div className="mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={AboutThumb}
              alt="About illustration"
              className="w-full rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl  font-bold mb-4">
              Welcome to Smart Bazaar
            </h2>
            <p className=" mb-6">
              Smart Bazaar is your trusted destination for smart shopping. We
              bring you a wide range of quality products at unbeatable prices —
              all in one place. Whether you're looking for the latest gadgets,
              daily essentials, or trendy fashion, Smart Bazaar is here to make
              your shopping experience smoother, faster, and smarter.
            </p>
            <Link
              to="/products"
              className="bg-white rounded-lg py-2 px-6 text-blue-950 font-bold"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
