import React, { memo } from "react";

import "../styles/skills.scss";

import {
  ReactJs,
  Redux,
  Reduxsaga,
  Sass,
  Javascript,
  Html5,
  CssThree,
  Nodedotjs,
  Express,
  Mysql,
  R,
  Mongodb,
  Pytorch,
  Tensorflow,
  Scikitlearn,
  Keras,
  Scipy,
  Laravel,
  Django,
  Fastapi,
  Flask,
  Java,
  Ruby,
  Nestjs,
  Springboot,
  Oracle,
  Sqlite,
  Postgresql,
  AmazonsThree,
  Redis,
  Elasticsearch,
  Angular,
  Vuedotjs,
  Flutter,
  Threedotjs,
  Tailwindcss,
  Graphql
} from "@icons-pack/react-simple-icons";

const Skills = memo(({ refs }) => {
  return (
    <section ref={refs} className="skills-section">
      <div className="section-title">SKILLS</div>
      <div className="skills-content">
      <h3 className="skill-title">AI</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Pytorch color="#E34F26" size={50} />
            </div>
            <p className="skill-info">Pytorch</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Tensorflow color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">Tensorflow</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Scikitlearn color="#000000" size={50} />
            </div>
            <p className="skill-info">Scikitlearn</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Keras color="#FF0000" size={50} />
            </div>
            <p className="skill-info">Keras</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Scipy color="#0000FF" size={50} />
            </div>
            <p className="skill-info">Scipy</p>
          </div>
        </div>
        <h3 className="skill-title">backend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Nodedotjs color="#339933" size={50} />
            </div>
            <p className="skill-info">Node.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Express color="#000000" size={50} />
            </div>
            <p className="skill-info">Express</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Laravel color="#0FF000" size={50} />
            </div>
            <p className="skill-info">Laravel</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Django color="#000FF0" size={50} />
            </div>
            <p className="skill-info">Django</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Fastapi color="#000000" size={50} />
            </div>
            <p className="skill-info">Fastapi</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Flask color="#000FFF" size={50} />
            </div>
            <p className="skill-info">Flask</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Java color="#0FFF00" size={50} />
            </div>
            <p className="skill-info">Java</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Ruby color="#DDD000" size={50} />
            </div>
            <p className="skill-info">Ruby</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Nestjs color="#00DDDD" size={50} />
            </div>
            <p className="skill-info">Nestjs</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Springboot color="#0DAADD" size={50} />
            </div>
            <p className="skill-info">Springboot</p>
          </div>
        </div>
        <h3 className="skill-title">database</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <R color="#276DC3" size={50} />
            </div>
            <p className="skill-info">R</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mysql color="#4479A1" size={50} />
            </div>
            <p className="skill-info">My-SQL</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mongodb color="#47A248" size={50} />
            </div>
            <p className="skill-info">MongoDB</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Oracle color="#47ADD8" size={50} />
            </div>
            <p className="skill-info">Oracle</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Sqlite color="#47A2DD" size={50} />
            </div>
            <p className="skill-info">Sqlite</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Postgresql color="#4DD248" size={50} />
            </div>
            <p className="skill-info">Postgresql</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <AmazonsThree color="#4EEE48" size={50} />
            </div>
            <p className="skill-info">AmazonsThree</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Redis color="#47AEEE" size={50} />
            </div>
            <p className="skill-info">Redis</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Elasticsearch color="#EEE248" size={50} />
            </div>
            <p className="skill-info">Elasticsearch</p>
          </div>
        </div>
        <h3 className="skill-title">frontend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Html5 color="#E34F26" size={50} />
            </div>
            <p className="skill-info">HTML</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <CssThree color="#1572B6" size={50} />
            </div>
            <p className="skill-info">CSS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Javascript color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">JS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <ReactJs color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">React.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Angular color="#61ADBF" size={50} />
            </div>
            <p className="skill-info">Angular</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Vuedotjs color="#00FFAA" size={50} />
            </div>
            <p className="skill-info">Vuedotjs</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Flutter color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">Flutter</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Threedotjs color="#AEFF33" size={50} />
            </div>
            <p className="skill-info">Threedotjs</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Tailwindcss color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">Tailwindcss</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Graphql color="#61ADFB" size={50} />
            </div>
            <p className="skill-info">Graphql</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Redux color="#764ABC" size={50} />
            </div>
            <p className="skill-info">Redux</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Ruby color="#DDAAFF" size={50} />
            </div>
            <p className="skill-info">Ruby</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Sass color="#CC6699" size={50} />
            </div>
            <p className="skill-info">SASS</p>
          </div>
        </div>
      </div>
    </section>
  );
});
export default Skills;
