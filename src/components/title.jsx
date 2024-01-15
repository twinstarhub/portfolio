import React, { memo } from "react";

import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Chris Yule</h1>
        <div className="line"></div>
        <h1>Sr AI Engineer | Sr Software Engineer</h1>
        <h2>Say<span>❤️</span>dev </h2>
        <h4>
          "Client happiness is the unmistakable outcome of my impactful endeavors, a testament to the positive impact I consistently deliver."<br/><br/> 
          Senior AI Engineer and Senior Software Engineer, boasting a professional journey spanning more than 5 years.<br/>
          In personal life, maintain a calm and unassuming demeanor.
          However, in professional pursuits, known for the confidence and adaptability.<br/>
          And actively contribute the technical skills to diverse projects, striving to offer innovative solutions and demonstrate my proficiency.
        </h4>
      </div>
    </section>
  );
});

export default Title;
