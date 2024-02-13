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
          "Client happiness is the unmistakable outcome of my impactful endeavors, a testament to the positive impact I consistently deliver."<br/><br/> 
          Fullstack & AI Developer, boasting a professional journey spanning more than 7 years.<br/>
          In personal life, maintain a calm and unassuming demeanor.
          However, in professional pursuits, known for the confidence and adaptability.<br/>
          And actively contribute the technical skills to diverse projects, striving to offer innovative solutions and demonstrate my proficiency.
        </h3>
      </div>
    </section>
  );
});

export default Title;
