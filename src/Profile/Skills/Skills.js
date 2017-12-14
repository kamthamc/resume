import React from 'react';

import './Skill.css';

const renderSkill = ({ name, rating = 0 }) => (
    <div className="skillInfo" key={name}>
        <div className="skill">
            <p className="name">{name}</p>
            <p className="rating">{rating * 10} %</p>
        </div>
        <div className="bar">
            <div style={{ width: `${rating * 10}%` }} />
        </div>
    </div>
);

export const Skills = ({ languageList, frameworkList }) => {
  return (
      <div className="SkillsWrapper">
          <div className="header">
              <h4><span><i className="material-icons">tune</i></span>Skills</h4>
          </div>
          <div className="Skills">
              <div className="Languages">
                  <h6>Languages</h6>
                  {
                      languageList.map(renderSkill)
                  }
              </div>
              <div className="Frameworks">
                  <h6>Frameworks</h6>
                  {
                      frameworkList.map(renderSkill)
                  }
              </div>
          </div>
      </div>
  );
};
