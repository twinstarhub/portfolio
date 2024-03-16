import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/henryjames.png";

import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
  IoCalendarClearOutline,
} from "react-icons/io5";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img}
          alt="Faild to load an image"
        ></img>
        <div className="about-info">
          <b className="info-title"></b>
          <div className="info">
            <br />
            
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" /> Henry James(亨利·詹姆斯)
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" /> Ehime, Japan
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" /> misssilverbeauty0927@gmail.com
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoCalendarClearOutline className="icon" /> 1996.09.27
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
