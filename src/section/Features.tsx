import { FaBolt, FaShieldAlt, FaThumbsUp } from "react-icons/fa";
const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl text-gray-600 font-bold mb-4">
          Our Key Features
        </h2>
        <p className="text-gray-600 mb-12">
          We provide powerful solutions to boost your productivity and user
          experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaBolt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              Our app is optimized for speed to keep your workflow smooth and
              efficient.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">
              Your data is protected with top-level security measures and
              encryption.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaThumbsUp className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
            <p className="text-gray-600">
              Intuitive and responsive design ensures a seamless user
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
