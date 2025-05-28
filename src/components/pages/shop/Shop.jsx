import React, { useEffect } from "react";
import scss from "./Shop.module.scss";
import { CiSearch } from "react-icons/ci";
import barImg1 from "../../../assets/sideBarimg.png";
import barImg2 from "../../../assets/barimg2.png";
import barImg3 from "../../../assets/barimg3.png";
import barImg4 from "../../../assets/barimg4.png";
import barImg5 from "../../../assets/barimg5.png";
import barImg6 from "../../../assets/barimg6.png";
import barImg7 from "../../../assets/barimg7.png";
import barImg8 from "../../../assets/barimg8.png";
import barImg9 from "../../../assets/barimg9.png";
import barImg10 from "../../../assets/barimg10.png";
import rating from "../../../assets/rationg.svg";
import { useProduct } from "../../../context/ProductContext";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Shop = () => {
  const { getProduct, deleteProduct, handlePageChange } = useProduct();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={scss.shopContainer}>
      <div className="container">
        <div className={scss.shopTop}>
          <select>
            <option value="">Defaul Sorting</option>
            <option value="">sport</option>
            <option value="">sport</option>
            <option value="">Fashoin</option>
          </select>
          <CiSearch className={scss.search} />
          <input type="text" placeholder="Search Models" />
        </div>
        <div className={scss.shopContent}>
          <div className={scss.list}>
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

          <div className={scss.sideBar}>
            <div className={scss.sideBarTittle}>
              <h4>Top Best Models</h4>
            </div>
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg1} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>{" "}
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg2} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>{" "}
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg3} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>{" "}
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg4} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>{" "}
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg5} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>
            <div className={scss.sideBarTittle}>
              <h4>You May Like</h4>
            </div>
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg6} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg7} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg8} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg9} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>
            <div className={scss.sideBarCard}>
              <img className={scss.first} src={barImg10} alt="" />
              <div className={scss.sideBarText}>
                <p>
                  Primis in faucibus aenean <br /> laoreet rhoncus ipsum
                </p>
                <img src={rating} alt="" />
                <h6>$15</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
