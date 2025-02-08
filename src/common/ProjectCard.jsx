/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;