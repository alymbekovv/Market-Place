import React, { useState } from "react";
import imageMyAcc from "../../../assets/hero.png";
import { IoMdEye } from "react-icons/io";
import scss from "./MyAccont.module.scss";
import Button from "../../../ui/button/Button";

const MyAccount = () => {
  const [see, setSee] = useState(true);

  return (
    <div className={scss.myAcc}>
      <img src={imageMyAcc} alt="" />
      <div className="container">
        <div className={scss.myAccInputs}>
          <div className={scss.inputs}>
            <p>
              Email address or username <span>*</span>
            </p>
            <input type="email" />
            <div className={scss.inputs}>
              <p>
                Password <span>*</span>
              </p>
              <input type={see ? "password" : "text"} />
              <IoMdEye className={scss.eye} onClick={() => setSee(!see)} />
            </div>
          </div>
          <Button text="LOG IN" size="variant1" />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
