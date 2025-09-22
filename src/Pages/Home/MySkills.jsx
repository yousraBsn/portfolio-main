import React, { useState, useEffect } from 'react';
import data from '../../data/index.json';

export default function MySkills() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCategoryHover = (categoryIndex) => {
    setHoveredCategory(categoryIndex);
  };

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((category, index) => (
          <div
            key={index}
            className="skills--section--card"
            onMouseEnter={() => handleCategoryHover(index)}
          >
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{category.title}</h3>
              {category.skills?.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className={`progress--bar ${mounted && hoveredCategory === index ? 'progress--bar--animate' : ''}`}
                >
                  <img src={skill.logo} alt={skill.title} className="logo" />
                  <div
                    className="progress--bar--fill"
                    style={{ width: `${skill.percentage}%` }} 
                  ></div>
                  <span className="percentage-label">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
