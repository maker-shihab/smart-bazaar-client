import { createBrowserRouter } from "react-router";

import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Root from "../pages/Root";
import Voucher from "../pages/Voucher";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "voucher", Component: Voucher },
      { path: "blogs", Component: Blogs },
    ],
  },
]);

export default router;
