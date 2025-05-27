import React from "react";
import scss from "./models.module.scss";
import shoes1 from "../../../assets/modelsImg1.svg";
import shoes2 from "../../../assets/modelsImg2.svg";
import shoes3 from "../../../assets/modelsImg.svg";
import shoes4 from "../../../assets/modelsimg4.svg";

const Models = () => {
  return (
    <div className={scss.modelsContainer}>
      <div className="container">
        <div className={scss.modelsTitle}>
          <h1>Sneakers Models</h1>
          <p>Duis vestibulum elit vel neque pharetra</p>
        </div>
        <div className={scss.modelsContent}>
          {[
            { img: shoes1, title: "Duis vestibulum elit vel neque.", text: "Duis vestibulum <br /> vel neque pharetra vulputate. Quisque scelerisque nisi." },
            { img: shoes2, title: "Neque vestibulum elit nequvel.", text: "Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi." },
            { img: shoes3, title: "Elituis stibulum elit velneque.", text: "Duis vestibulum <br /> vel neque pharetra vulputate. Quisque scelerisque nisi." },
            { img: shoes4, title: "Duis vestibulum elit vel neque.", text: "Duis vestibulum <br /> vel neque pharetra vulputate. Quisque scelerisque nisi." }
          ].map((item, index) => (
            <div key={index} className={scss.sneakers}>
              <img src={item.img} alt={`Sneaker model ${index + 1}`} />
              <div className={scss.overlay}>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;