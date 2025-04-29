import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
