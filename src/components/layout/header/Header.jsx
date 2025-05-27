import React from "react";
import scss from "./Header.module.scss";
import img from "../../../assets/facebook.svg";
import twiter from "../../../assets/twitter.svg";
import instogram from "../../../assets/instagram.svg";
import cros from "../../../assets/shoe.svg";
import search from "../../../assets/search.svg";
import user from "../../../assets/user.svg";
import shop from "../../../assets/shopping-cart.svg";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.sho}>
            <img src={img} alt="" />
            <img src={twiter} alt="" />
            <img src={instogram} alt="" />
          </div>
          <div className={scss.shop}>
            <img
              style={{
                background: "red",
                padding: "3px",
                maxWidth: "35px",
                borderRadius: "6px",
              }}
              src={cros}
              alt=""
            />
            <h2 style={{ color: "Red" }}>BEST SHOP</h2>
          </div>
          <div className={scss.shop}>
            <Link to="/details">
              <img src={search} alt="" />
            </Link>
            <Link to="/myaccont">
              <img src={user} alt="" />
            </Link>
            <Link to="/admin">
              <MdOutlineAdminPanelSettings
                style={{ fontSize: "25px", color: "000" }}
              />
            </Link>
            <Link to="/basket">
              <img src={shop} alt="" />
            </Link>
          </div>
        </div>
        <div className={scss.navA}>
          <nav>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/shop">
              <p>Shop</p>
            </Link>
            <Link to="/products">
              <p>Products</p>
            </Link>
            <Link to="/aboutUs">
              <p>About Us</p>
            </Link>
            <Link to="/contactUs">
              <p>Contact Us</p>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
