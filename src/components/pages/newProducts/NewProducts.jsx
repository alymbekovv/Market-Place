import React, { useEffect } from "react";
import scss from "./newProducts.module.scss";
import { useProduct } from "../../../context/ProductContext";
import { MdDeleteOutline } from "react-icons/md";

const NewProducts = () => {
  const { product, getProduct, deleteProduct } = useProduct();

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
          {product.map((item, index) => (
            <div key={index} className={scss.card}>
              <div className={scss.imageWrapper}>
                <span className={scss.saleBadge}>SALE</span>
                <MdDeleteOutline
                  onClick={() => deleteProduct(item._id)}
                  className={scss.deleteIcon}
                />
                <img
                  src={item.image}
                  alt="Продукт"
                  className={scss.productImage}
                />
              </div>
              <h3 className={scss.productTitle}>{item.title}</h3>
              <p className={scss.productPrice}>${item.price}</p>
              <button className={scss.viewButton}>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
