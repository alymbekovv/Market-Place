import React from "react";
import scss from "./Footer.module.scss";
import img from "../../../assets/img.svg";
import tele from "../../../assets/tele.png";
import gm from "../../../assets/icon.png";
import time from "../../../assets/tiem.svg";
const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.texts}>
          <div className={scss.par}>
            <div className={scss.text3big}>
              <div className={scss.h1text}>
                <h1>About Us</h1>
                <div className={scss.textp}>
                  <p>Organisation</p>
                  <p>Partners</p>
                  <p>Clients</p>
                </div>
              </div>
              <div className={scss.h1text}>
                <h1>Interesting Links</h1>
                <div className={scss.textp}>
                  <p>Photo Gallery</p>
                  <p>Our Team</p>
                  <p>Socials</p>
                </div>
              </div>
              <div className={scss.h1text}>
                <h1>Achievements</h1>
                <div className={scss.textp}>
                  <p>Winning Awards</p>
                  <p>Press</p>
                  <p>Our Amazing Clients</p>
                </div>
              </div>
            </div>
            <div className={scss.text}>
              <h2>Shipping Information</h2>
              <p>
                Nulla eleifend pulvinar purus, molestie euismod odio imperdiet
                ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec
                interdum, lectus in convallis pulvinar, enim elit porta sapien,
                vel finibus erat felis sed neque. Etiam aliquet neque sagittis
                erat tincidunt aliquam.
              </p>
            </div>
          </div>
          <div className={scss.contact}>
            <h1>Contact Us</h1>
            <p>
              Bendum dolor eu varius. Morbi fermentum velitsodales egetonec.
              volutpat orci. Sed ipsum felis, tristique egestas et, convallis ac
              velitn consequat nec luctus.
            </p>
            <div className={scss.number}>
              <div className={scss.info}>
                <img src={tele} alt="" />
                <span>Phone: (+63) 236 6322 </span>
              </div>
              <div className={scss.info}>
                <img src={gm} alt="" />
                <span>public@news.com</span>
              </div>
            </div>
            <div className={scss.time}>
              <div className={scss.whenTime}>
                <img src={time} alt="" />
                <div className={scss.timeText}>
                  <span>Mon - Fri: 10am - 6pm</span>
                  <span>Sat - Sun: 10am - 6pm</span>
                </div>
              </div>
              <div className={scss.whenTime}>
                <img src={time} alt="" />
                <div className={scss.timeText}>
                  <span>Mon - Fri: 10am - 6pm</span>
                  <span>Sat - Sun: 10am - 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
