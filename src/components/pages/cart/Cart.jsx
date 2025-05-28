import React, { useState } from "react";
import scss from "./cart.module.scss";
import cartImage from "../../../assets/cartimg.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import imggg from "../../../assets/cartShues.png";

const Cart = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const price = 23.99;

  return (
    <div className={scss.cart}>
      <img src={cartImage} alt="Cart banner" className={scss.cartBanner} />
      <div className={scss.container}>
        <div className={scss.cartTable}>
          <div className={scss.mobileCart}>
            <div className={scss.mobileCartItem}>
              <img className={scss.imageProduct} src={imggg} alt="Product" />
              <div className={scss.mobileCartDetails}>
                <h3>Sneakers</h3>
                <p>${price.toFixed(2)}</p>
                <div className={scss.quantity}>
                  <button
                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    onClick={() => setCount(count + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p>Total: ${(price * count).toFixed(2)}</p>
                <button className={scss.deleteButton}>
                  <RiDeleteBin6Line className={scss.deleteIcon} />
                </button>
              </div>
            </div>
          </div>

          <table className={scss.desktopTable}>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    className={scss.imageProduct}
                    src={imggg}
                    alt="Product"
                  />
                </td>
                <td>Sneakers</td>
                <td>${price.toFixed(2)}</td>
                <td>
                  <div className={scss.quantity}>
                    <button
                      onClick={() => setCount(count > 1 ? count - 1 : 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <p>{count}</p>
                    <button
                      onClick={() => setCount(count + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${(price * count).toFixed(2)}</td>
                <td>
                  <button className={scss.deleteButton}>
                    <RiDeleteBin6Line className={scss.deleteIcon} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={scss.cartBottom}>
          <div className={scss.btns}>
            <Button
              onClick={() => navigate("/")}
              text="CONTINUE SHOPPING"
              size="variant1"
            />
            <Button text="CLEAR SHOPPING CART" size="variant1" />
          </div>

          <div className={scss.cartSummary}>
            <div className={scss.summaryBox}>
              <div className={scss.summaryRow}>
                <span>Sub Total</span>
                <span>${(price * count).toFixed(2)}</span>
              </div>
              <Button text="CHECKOUT" size="variant1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
