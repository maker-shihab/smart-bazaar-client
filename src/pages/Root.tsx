import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen main_area">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
