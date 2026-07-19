import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AllProducts from "./components/AllProducts.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import MyBids from "./components/MyBids.jsx";
import MyProducts from "./components/MyProducts.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Register from "./components/Register.jsx";
import "./index.css";
import RootLayout from "./layout/RootLayout.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "all-products", Component: AllProducts },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      { path: "my-products", Component: MyProducts },
      { path: "my-bids", Component: MyBids },
      {
        path: "product-details/:id",
        Component: ProductDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
