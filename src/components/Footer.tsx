import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  return (
    <footer className="py-10 bg-gray-600/10">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-between">
          <p className="text-sm">
            ©{getYear} Smart Bazaar. All rights reserved. Made by Shihab.
          </p>
          <ul className="flex justify-end gap-4 text-sm">
            <li>
              <Link
                to="/terms"
                className="text-white/70 hover:text-white hover:underline"
              >
                📄 Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/policy"
                className="text-white/70 hover:text-white hover:underline"
              >
                🔐 Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
