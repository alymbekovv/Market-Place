import React, { useEffect, useRef } from "react";
import scss from "./offer.module.scss";
import background from "../../../assets/runboy.png";

const Offer = () => {
  const sectionRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (leftTextRef.current) {
              leftTextRef.current.classList.add(scss.animateLeft);
            }
            if (rightTextRef.current) {
              rightTextRef.current.classList.add(scss.animateRight);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className={scss.offerContainer} ref={sectionRef}>
      <div className={scss.container}>
        <div className={scss.offerContent}>
          <div className={scss.background}>
            <img src={background} alt="Running person background" />
            <div className={scss.imageOverlay}></div>
          </div>
          <div ref={leftTextRef} className={scss.offerTextLeft}>
            <h1>90%</h1>
            <p>Curabitur vulputate arcu odio, ac facilisis diam.</p>
          </div>
          <div ref={rightTextRef} className={scss.offerTextRight}>
            <h2>Offer Of The Month</h2>
            <p>
              Curabitur vulputate arcu odio, ac facilisis diam
              <br className={scss.desktopOnly} />
              accumsan ut. Ut imperdiet et leo in vulputate...
            </p>
            <button className={scss.offerButton}>Get Offer Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
