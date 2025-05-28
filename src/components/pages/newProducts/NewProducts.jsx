import React, { useEffect } from "react";
import scss from "./newProducts.module.scss";
import { useProduct } from "../../../context/ProductContext";
import { MdDeleteOutline } from "react-icons/md";
import PaginationProduct from "../../../ui/pagination/PaginationProduct";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const { getProduct, deleteProduct, handlePageChange } = useProduct();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={scss.newProductsContainer}>
      <div className="container">
        <div className={scss.productTop}>
          <h1>Selected Products</h1>
          <p>Duis vestibulum elit vel neque pharetra</p>
        </div>
        <div className={scss.newProductsContent}>
          {handlePageChange().map((item, index) => (
            <div key={index} className={scss.card}>
              <div className={scss.imageWrapper}>
                <span className={scss.saleBadge}>SALE</span>
                <MdDeleteOutline
                  onClick={() => deleteProduct(item._id)}
                  className={scss.deleteIcon}
                />
                <Link to={`/product/:${item._id}`}>
                  <img
                    src={item.image}
                    alt="Продукт"
                    className={scss.productImage}
                  />
                </Link>
              </div>
              <h3 className={scss.productTitle}>{item.title}</h3>
              <p className={scss.productPrice}>${item.price}</p>
              <button className={scss.viewButton}>Add To Cart</button>
            </div>
          ))}
        </div>
        <div className={scss.pagination}>
          <PaginationProduct />
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
