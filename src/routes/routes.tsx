import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Products from "../pages/Products";
import Root from "../pages/Root";
import TermsConditions from "../pages/TermsConditions";
import Voucher from "../pages/Voucher";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "voucher", Component: Voucher },
      { path: "policy", Component: PrivacyPolicy },
      { path: "terms", Component: TermsConditions },
    ],
  },
]);

export default router;
