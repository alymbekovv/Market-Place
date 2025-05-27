import scss from "./main.module.scss";
import shoes from "../../../assets/9568bda9e11a07c9ccf48ff24a6157a9c3042fbc.png";

const Main = () => {
  return (
    <div className={scss.mainContainer}>
      <div className="container">
        <div className={scss.mainContent}>
          <div className={scss.mainText}>
            <h1>Fantastic Features That Makes You Look Cool</h1>
            <p>
              Phasellus risus turpis, pretium sit amet magna non, molestie
              ultricies enim. Nullam pulvinar felis at metus.
            </p>
            <button>View All Items</button>
          </div>
          <div className={scss.mainImg}>
            <img src={shoes} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
