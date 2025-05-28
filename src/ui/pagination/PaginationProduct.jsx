import React from "react";
import { Pagination } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

const PaginationProduct = () => {
  const { setPage, count } = useProduct();
  const handlePage = (prev, next) => setPage(next);
  return (
    <div>
      <Pagination onChange={handlePage} count={count} color="secondary" />
    </div>
  );
};

export default PaginationProduct;
