import React from 'react';
import '../style.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={`Screenshot of ${project.title}`} />
            </a>
            <h3>{project.title}</h3>
            <p>
                <b>Description:</b> {project.description}<br />
                <b>Technologies used:</b> {project.technologies}
            </p>
        </div>
    );
};

export default ProjectCard;
