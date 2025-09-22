import React, { useState } from 'react';
import data from "../../data/index.json";

export default function MyPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('web app');

  const filteredProjects = data?.portfolio.filter(project => project.category === selectedCategory);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="myPort">My Portfolio</h2>
        </div>
        
      </div>
      <div className="portfolio--section--filter-buttons">
        <button className={selectedCategory === 'web app' ? 'active' : ''} onClick={() => setSelectedCategory('web app')}>Web App</button>
        <button className={selectedCategory === 'android app' ? 'active' : ''} onClick={() => setSelectedCategory('android app')}>Android App</button>
        <button className={selectedCategory === 'machine learning' ? 'active' : ''} onClick={() => setSelectedCategory('machine learning')}>Machine Learning</button>
      </div>
      <div className="portfolio--section--container">
        {filteredProjects.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}