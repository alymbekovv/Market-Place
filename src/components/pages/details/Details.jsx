import React from "react";
import scss from "./details.module.scss";
import firstImg from "../../../assets/firstimg.svg";
import img1 from "../../../assets/detailsImg2.png";
import img2 from "../../../assets/detailsimg3.png";
import img3 from "../../../assets/detailsimg4.png";
import img4 from "../../../assets/detailsimg5.png";
import star from "../../../assets/rationg.svg";
import creditCard from "../../../assets/visa-pay-logo.png";
import creditCard2 from "../../../assets/american-express-logo.png";
import creditCard3 from "../../../assets/master-card-logo.png";
import creditCard4 from "../../../assets/paypal-logo.png";
import shoes1 from "../../../assets/new1.svg";

const Details = () => {
  return (
    <div className={scss.detailsContainer}>
      <div className="container">
        <div className={scss.detailsContent}>
          <div className={scss.images}>
            <img className={scss.firstImg} src={firstImg} alt="" />
            <div className={scss.imagesBottom}>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
          <div className={scss.detailsText}>
            <h2>Nike Superrep Go Pro 3 Fly Nit Next Nature</h2>
            <div className={scss.stats}>
              <img src={star} alt="" />
              <p>(1 Clients Review) </p>
            </div>
            <h6>$20</h6>
            <p>
              The new Nike SuperRep Go 3 Fly nit is a radical design story
              rooted in innovation. Made with at least 20% recycled content by
              weight, the zoned Fly nit construction wraps your foot in 360
            </p>
            <p>
              A finely ground, reclaimed foam midsole gives you responsive
              cushioning for high-impact training. The lightweight, packable
              design lets you keep them close, no matter where your next workout
            </p>
            <div className={scss.category}>
              <h4>Size</h4>
              <select>
                <option value="">Choose option</option>
              </select>
            </div>{" "}
            <div className={scss.category}>
              <h4>Color</h4>
              <select>
                <option value="">Choose option</option>
              </select>
            </div>{" "}
            <div className={scss.category}>
              <h4>Category</h4>
              <select>
                <option value="">Choose option</option>
              </select>
            </div>
            <div className={scss.addCart}>
              <div className={scss.count}>
                <p>-</p>
                <h3>1</h3>
                <p>+</p>
              </div>
              <button>Add To Cart</button>
            </div>
            <div className={scss.Payment}>
              <h4>Payment:</h4>
              <img src={creditCard} alt="" />
              <img src={creditCard2} alt="" />
              <img src={creditCard3} alt="" />
              <img src={creditCard4} alt="" />
            </div>
          </div>
        </div>

        <div className={scss.productDetails}>
          <h4>DETAILS</h4>
        </div>
        <div className={scss.productDescr}>
          <p>
            Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh
            mollis. Nulla porta risus id neque tempor, in efficitur justo
            imperdiet. Etiam a ex at ante tincidunt imperdiet. Nunc congue ex
            vel nisl viverra, sit amet aliquet lectus ullamcorper. Praesent
            luctus lacus non lorem elementum, eu tristique sapien suscipit. Sed
            bibendum, ipsum nec viverra malesuada, erat nisi sodales purus, eget
            hendrerit dui ligula eu enim. Ut non est nisi. Pellentesque{" "}
            tristique pretium dolor eu commodo. Proin iaculis nibh vitae lectus
            mollis bibendum. Quisque varius eget urna sit amet luctus.
            Suspendisse potenti. Curabitur ac placerat est, sit amet sodales
            risus. Pellentesque viverra dui auctor, ullamcorper turpis pharetra,
            facilisis quam.
          </p>
          <p>
            Proin iaculis nibh vitae lectus mollis bibendum. Quisque varius eget
            urna sit amet luctus. Suspendisse potenti. Curabitur ac placerat
            est, sit amet sodales risus. Pellentesque viverra dui auctor,
            ullamcorper turpis pharetra, facilisis quam. Proin iaculis nibh
            vitae lectus mollis bibendum.{" "}
          </p>
          <p>
            Quisque varius eget urna sit amet luctus. Suspendisse potenti.
            Curabitur ac placerat est, sit amet sodales risus. Pellentesque
            viverra dui auctor, ullamcorper turpis pharetra, facilisis quam.{" "}
          </p>
        </div>
        <div className={scss.productTop}>
          <h1>You May Also Like</h1>
        </div>
        <div className={scss.list}>
          <div className={scss.card}>
            <div className={scss.imageWrapper}>
              <span className={scss.saleBadge}>SALE</span>
              <img src={shoes1} alt="Продукт" className={scss.productImage} />
            </div>
            <h3 className={scss.productTitle}>
              Vel vestibulum elit tuvel euqen.
            </h3>
            <p className={scss.productPrice}>$15</p>
            <button className={scss.viewButton}>Add To Cart</button>
          </div>
          <div className={scss.card}>
            <div className={scss.imageWrapper}>
              <span className={scss.saleBadge}>SALE</span>
              <img src={shoes1} alt="Продукт" className={scss.productImage} />
            </div>
            <h3 className={scss.productTitle}>
              Vel vestibulum elit tuvel euqen.
            </h3>
            <p className={scss.productPrice}>$15</p>
            <button className={scss.viewButton}>Add To Cart</button>
          </div>{" "}
          <div className={scss.card}>
            <div className={scss.imageWrapper}>
              <span className={scss.saleBadge}>SALE</span>
              <img src={shoes1} alt="Продукт" className={scss.productImage} />
            </div>
            <h3 className={scss.productTitle}>
              Vel vestibulum elit tuvel euqen.
            </h3>
            <p className={scss.productPrice}>$15</p>
            <button className={scss.viewButton}>Add To Cart</button>
          </div>{" "}
          <div className={scss.card}>
            <div className={scss.imageWrapper}>
              <span className={scss.saleBadge}>SALE</span>
              <img src={shoes1} alt="Продукт" className={scss.productImage} />
            </div>
            <h3 className={scss.productTitle}>
              Vel vestibulum elit tuvel euqen.
            </h3>
            <p className={scss.productPrice}>$15</p>
            <button className={scss.viewButton}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
