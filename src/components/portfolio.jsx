import React, { memo } from "react";

import "../styles/portfolio.scss";
import shredded from "../images/Shredded.png";
import wooshi from "../images/wooshi.png";
import moduluc from "../images/moduluc.png";
import cipia from "../images/cipia.jpg";
import eurocupid from "../images/eurocupid.png";
import berlitz from "../images/berlitz.png";
import bayzat from "../images/bayzat.png";

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PROJECTS</div>
      <div className="portfolio-content">
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={cipia} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Cipia</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> driver monitoring by computer vision ai.
              <br />
              <br />
              <b>Tech stacks :</b> Image recognition, Image processing, Deep learning, Pytorch, Wordpress, MySql <br />
            </div>
            <a
              className="button"
              href="https://cipia.com"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={eurocupid} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Eurocupid</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Meet European singles on EuroCupid.com, the most trusted European dating site with over 2 million members. Join now and start making meaningful connections!
              <br />
              <br />
              <b>Tech stacks :</b> Deep learning, Pytorch <br />
            </div>
            <a
              className="button"
              href="https://www.eurocupid.com/"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={berlitz} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Eurocupid</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Language Learning Software.
              <br />
              <br />
              <b>Tech stacks :</b> Natural Language Processing, Tensorflow, Django, Python <br />
            </div>
            <a
              className="button"
              href="https://www.berlitz.com/"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={shredded} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Shredded Apes</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Product market. As the head developer of webshop, I made ecommerce with Web3.js with Next.js. There is token transaction validation. Users can purchase products with SPL tokens ($WHEY, $DUSTY) and regular payments(Credit card, Paypal, and so on).
              <br />
              <br />
              <b>Tech stacks :</b> Rust, Web3, Firebase, Next.js <br />
            </div>
            <a
              className="button"
              href="https://www.shreddedapes.shop/"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={wooshi} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Wooshi World</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Modified some components of this site. This project was coded by Shopify. I worked on the internet to add Web3 functions in this code and fixed 12 bugs.
              <br />
              <br />
              <b>Tech stacks :</b> Web3, Shopify <br />
            </div>
            <a
              className="button"
              href="https://wooshi.world/"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={moduluc} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Moduluc</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Built a pixel-perfect Next.js+TS frontend from Figma design. Component design was innovative in order to follow a special design that is not a grid type and a design that changes every day.
              <br />
              <br />
              <b>Tech stacks :</b> Next.js, Web3.js <br />
            </div>
            <a
              className="button"
              href="https://moduluc.com/"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={bayzat} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">BAYZAT</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> All in one HR & Employee benefits platform
              <br />
              <br />
              <b>Role :</b> UI/UX building for landing page CSS Styling <br />
            </div>
            <a
              className="button"
              href="https://bayzat.com/"
            >
              publish link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
