import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProductContext from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <Layout>
        <App />
      </Layout>
    </ProductContext>
  </BrowserRouter>
);
