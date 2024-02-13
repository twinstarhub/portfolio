import React, { memo } from "react";

import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Henry James</h1>
        <div className="line"></div>
        <h1>Fullstack & AI Developer</h1>
        <h3>
          "My clients’ happiness is the real provement of my efforts, and it is a motivation to boost myself."<br/><br/> 
          Fullstack & AI Developer, boasting a professional journey with more than 7 years.<br/>
          In personal life, I am maintaining a calm and kind manner.<br/>
          However, in professional business, I have been known for the confidence and adaptability.<br/>
          And I actively contribute the technical skills to various projects, striving to offer innovative solutions and demonstrate my proficiency.
        </h3>
      </div>
    </section>
  );
});

export default Title;
