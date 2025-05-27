import React from "react";
import scss from "./customers.module.scss";
import Nick from "../../../assets/Nick.svg";
import alym from "../../../assets/circular_avatar_2.png";
import berador from "../../../assets/berador.png";

const Customers = () => {
  return (
    <div className={scss.CustomersContainer}>
      <div className={scss.container}>
        <div className={scss.customersTitle}>
          <h1>Our Grateful Customers</h1>
          <p>Duis vestibulum elit vel neque pharetra</p>
        </div>
        <div className={scss.customersContent}>
          <div className={scss.card}>
            <img src={Nick} alt="Nick" loading="lazy" />
            <p>
              Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
              imperdiet et leo in vulputate.
            </p>
            <a href="#nick">Nick Wade, New York</a>
          </div>
          <div className={scss.card}>
            <img src={alym} alt="Alymbek" loading="lazy" />
            <p>
              Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
              imperdiet et leo in vulputate.
            </p>
            <a href="#alym">Alymbek, Bishkek</a>
          </div>
          <div className={scss.card}>
            <img src={berador} alt="Berador" loading="lazy" />
            <p>
              Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
              imperdiet et leo in vulputate.
            </p>
            <a href="#berador">Berador, Los Angeles</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
