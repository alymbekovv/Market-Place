import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../components/contstants/api";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  product: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST":
      return { ...state, product: [...state.product, action.payload] };
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "DELETE":
      return {
        ...state,
        product: state.product.filter(
          (item, idx) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function addProduct(newData) {
    try {
      const { data } = await axios.post(API, newData);
      console.log("Продукт кошулду:", data);
      getProduct();
    } catch (error) {
      console.log("Ката кетти:", error.response?.data || error.message);
    }
  }

  async function getProduct() {
    try {
      const response = await axios.get(API);

      const products = response.data.data;

      dispatch({ type: "GET_PRODUCT", payload: products });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      dispatch({ type: "DELETE", payload: id });
      getProduct();
    } catch (error) {
      console.log(error.message);
    }
  }

  const values = {
    addProduct,
    getProduct,
    product: state.product,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
