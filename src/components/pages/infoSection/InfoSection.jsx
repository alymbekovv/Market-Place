import { useEffect, useRef } from "react";
import scss from "./InfoSection.module.scss";
import avatar from "../../../assets/avatar.svg";
import discountImage from "../../../assets/shoes.svg";

const InfoSection = () => {
  const textBoxRef = useRef(null);
  const discountBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(scss.visible);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (textBoxRef.current) observer.observe(textBoxRef.current);
    if (discountBoxRef.current) observer.observe(discountBoxRef.current);

    return () => {
      if (textBoxRef.current) observer.unobserve(textBoxRef.current);
      if (discountBoxRef.current) observer.unobserve(discountBoxRef.current);
    };
  }, []);

  return (
    <div className={scss.infoContainer}>
      <div className="container">
        <div className={scss.infoContent}>
          <div ref={textBoxRef} className={scss.textBox}>
            <div className={scss.profile}>
              <img src={avatar} alt="Dorothy Holland" className={scss.avatar} />
              <div className={scss.ava}>
                <h4 className={scss.name}>Dorothy Holland</h4>
                <p className={scss.role}>Chief Marketing Officer</p>
              </div>
            </div>
            <h2 className={scss.title}>Aliquam Faucibus Odionecom.</h2>
            <p className={scss.description}>
              Duis vestibulum elit vel neque pharetra vulputate. Quisque
              scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin
              molestie accumsan nulla sit.
            </p>
            <p className={scss.description}>
              Namaki duis vestibulum elit vel neque pharetra vulputate. Quisque
              scelerisque nisi urna.
            </p>
          </div>

          <div ref={discountBoxRef} className={scss.discountBox}>
            <img
              src={discountImage}
              alt="Discount Shoes"
              className={scss.backgroundImage}
            />
            <div className={scss.overlay}>
              <h3 className={scss.discountText}>25% Discount</h3>
              <p className={scss.discountDesc}>
                Curabitur vulputate arcu odio, facilisis diam accumsan ut. Ut
                imperdiet et leo in vulputate.
              </p>
              <button className={scss.discountButton}>Get Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
