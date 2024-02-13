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
import AI_Social_Good from "../images/AI_Social_Good.gif";
import Plant_AI from "../images/Plant_AI.gif";
import Face_Recognition from "../images/Face_Recognition.jpeg";
import Pytorch_CNN_Visualizations from "../images/Pytorch_CNN_Visualizations.png";

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
              <img src={AI_Social_Good} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">AI Social Good<br/>Suicidal Ideation Detection In Online Social Content</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> The rise of social media and online communities creates safe and anonymous spaces for individuals to share their thoughts about their mental health and express their feelings and sufferings in online communities. To prevent suicide, it is necessary to detect suicide-related posts and user's suicide ideation in cyberspace by natural language processing methods.
              <br />
              <br />
              <b>Tech stacks :</b> GPT4, Tensorflow, Flask, Python, Numpy <br />
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
              <img src={Plant_AI} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Plant AI<br/>[Recognition of Plant Diseases by Leaf Image Classification]</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> This project is an approach to the development of plant disease recognition model, based on leaf image classification, by the use of deep convolutional networks. The developed model is able to recognize 38 different types of plant diseases out of of 14 different plants with the ability to distinguish plant leaves from their surroundings.
              <br />
              <br />
              <b>Tech stacks :</b> CNN, Tensorflow, Flask, Python <br />
            </div>
            <a
              className="button"
              href="https://github.com/twinstarhub/Plant_AI"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={Face_Recognition} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Facial Recognition and Emotion Detection</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Humans are used to non verbal communication. The emotions expressed increases the clarity of any thoughts and ideas. It becoms quite interesting when a computer can capture this complex feature of humans, ie emotions. This topic talks about building a model which can detect an emotion from an image. 
              <br />
              <br />
              <b>Tech stacks :</b> Data gathering and augmentation, Model building, Training, Testing <br />
            </div>
            <a
              className="button"
              href="https://github.com/twinstarhub/Face_Emotion_Detection"
            >
              publish link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={Pytorch_CNN_Visualizations} alt="Sorry, failed to load an image." />
            </div>
            <div className="title">Pytorch CNN Visualizations</div>
            <div className="contents">
              <br />
              <b>Descriptoin:</b> Depending on the technique, the code uses pretrained AlexNet or VGG from the model zoo. Some of the code also assumes that the layers in the model are separated into two sections; features, which contains the convolutional layers and classifier, that contains the fully connected layer (after flatting out convolutions). If you want to port this code to use it on your model that does not have such separation, you just need to do some editing on parts where it calls model.features and model.classifier.
              <br />
              <br />
              <b>Tech stacks :</b> Gradient Visualization, Hierarchical Gradient Visualization, Grad Times Image, Smooth Grad, CNN Filter Visualization, Inverted Image Representations, Deep Dream, Class Specific Image Generation<br />
            </div>
            <a
              className="button"
              href="https://github.com/twinstarhub/Pytorch_CNN_Visualizations"
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
