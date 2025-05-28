import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API } from "../components/contstants/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();

  async function addProduct(newData) {
    try {
      const { data } = await axios.post(API, newData);
      navigate("/");
      toast.success("✅ Новый товар теперь в списке!");

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

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API}/${id}`);
      return data;
    } catch (error) {
      console.log("Ошибка при получении продукта:", error.message);
      return null;
    }
  }

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const count = Math.ceil(state.product.length / itemsPerPage);

  const handlePageChange = () => {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    return state.product.slice(start, end);
  };

  const values = {
    addProduct,
    getProduct,
    product: state.product,
    deleteProduct,
    setPage,
    count,
    handlePageChange,
    getOneProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
