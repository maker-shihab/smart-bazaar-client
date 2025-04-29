import { createBrowserRouter } from "react-router";
import About from "../pages/About";

import Home from "../pages/Home";
import Root from "../pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
]);

export default router;
