import React, { memo } from "react";

import "../styles/portfolio.scss";
import laravel_ecommerce from "../images/laravel-ecommerce.png";
import ecommerce_codeigniter from "../images/ecommerce-codeigniter.png";
import ecommerce_flutter from "../images/ecommerce_flutter.jpeg";
import cipia from "../images/cipia.jpg";
import eurocupid from "../images/eurocupid.png";
import berlitz from "../images/berlitz.png";
import zetaShop from "../images/zetaShop.png";
import bayzat from "../images/bayzat.png";
import Troyz from "../images/Troyz.png";

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">RECENT PROJECTS</div>
      <div className="portfolio-content">
      <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={Troyz} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Troyz</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> App where Machine Learning System is introduced for analyzing and extracting, reviewing the translation of financial documents.
              <br />
              <br />
              <b>Stack: </b> ElectronJS, Tailwind CSS, Flask, Swagger, NLP, LLM, Hugging Face <br />
            </div>
            <a
              className="button"
              href="https://github.com/twinstarhub/Troyz_frontend_Desktop"
            >
              publish link
            </a>
          </div>
        </div>
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
            <div className="title">Berlitz</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Language Learning Software.<br/>We are more than just a language school: With Berlitz, you can train your intercultural competence, discover the digital world by training new IT skills.
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
              <img src={laravel_ecommerce} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Laravel Ecommerce</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> The Laravel Ecommerce Project with Complete Source Code is a PHP-based web application. <br/>Features: 
                <br/>User Dashboard, Admin Dashboard, Mobile-Friendly Website, 3 Step Booking Process, Order Tracking, Email Notifications, Subscriber Form, A product search form, Payment Gateway(PayU) Integrated, Shopping Cart in a Responsive Layout, Pre-Defined Content with High-Resolution Photos
                Search engine optimization (SEO) for Products, Recommendations and related products in our categories.
              <br />
              <br />
              <b>Tech stacks :</b> Php, Vue, Sql, Bootstrap <br />
            </div>
            <a
              className="button"
              href="https://github.com/twinstarhub/laravel-ecommerce-project"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={ecommerce_codeigniter} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Ecommerce Codeigniter</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> This repo contains in-development code for future releases. To download the latest stable release please visit the 'CodeIgniter Downloads https://codeigniter.com/download'_ page.
              <br />
              <br />
              <b>Tech stacks :</b> Php, Sql <br />
            </div>
            <a
              className="button"
              href="https://github.com/twinstarhub/Ecommerce-Codeigniter-Template?tab=readme-ov-file"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={ecommerce_flutter} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Ecommerce Flutter</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Zeplin is the best way for designers & developers to work together · Share designs and styleguides publicly.
              <br />
              <br />
              <b>Tech stacks :</b> Html, Ruby on Rails, Swift <br />
            </div>
            <a
              className="button"
              href="https://zpl.io/bJL5Xp6"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={zetaShop} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">zetaShop</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> E-commerce project using GraphQL with stack: NestJS - ReactJS(NextJS) - MongoDB.
              <br />
              <br />
              <b>Tech stacks :</b> TypeScript, GraphQL, ReactJS, SCSS, MongoDB,Jest <br />
            </div>
            <a
              className="button"
              href="https://github.com/twinstarhub/ecommerce"
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
