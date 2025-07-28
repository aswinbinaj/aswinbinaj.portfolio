import React from "react";
import "../../components/home/MyJourney.css"
import { FaCode, FaLaptopCode, FaReact, FaRocket } from "react-icons/fa";

const journeyData = [
  {
    year: "2021",
    title: "Started Learning",
    description: "HTML, CSS, JavaScript basics.",
    icon: <FaCode />,
  },
  {
    year: "2022",
    title: "Built First Website",
    description: "Blog using Bootstrap and JS.",
    icon: <FaLaptopCode />,
  },
  {
    year: "2023",
    title: "Learned React & Backend",
    description: "Created full-stack apps.",
    icon: <FaReact />,
  },
  {
    year: "2024",
    title: "Working on Real Projects",
    description: "Freelancing and open-source.",
    icon: <FaRocket />,
  },
];

const MyJourney = () => {
  return (
    <section className="journey-map-section">
      <h2 className="journey-map-heading">My Journey</h2>
      <div className="journey-map">
        {journeyData.map((item, index) => (
          <div className="journey-step" key={index}>
            <div className="journey-icon">{item.icon}</div>
            <div className="journey-info">
              <h4>{item.year}</h4>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {index !== journeyData.length - 1 && <div className="arrow">➡</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyJourney;
