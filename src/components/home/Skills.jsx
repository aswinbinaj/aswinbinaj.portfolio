import React from 'react';
import "../home/Skills.css";

const skills = [
  { name: 'React', img: '/react.png' },
  { name: 'WordPress', img: '/wordpress.png' },
  { name: 'Shopify', img: '/shopify.png' },
  { name: 'JavaScript', img: '/javascript.png' },
  { name: 'PHP', img: '/php.png' },
  { name: 'Laravel', img: '/laravel.png' },
  { name: 'GitHub', img: '/github.png' },
  { name: 'Tailwind CSS', img: '/tailwind.png' },
  { name: 'HTML', img: '/html.png' },
  { name: 'CSS', img: '/css.png' },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <p className="skills-subheading">Technologies I Work With</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
