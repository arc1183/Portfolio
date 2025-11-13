
import './ProjectCard.css'; 
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
    
    <div className="project-tech-icons">
      {project.technologies.map((tech, index) => (
        <div key={index} className="tech-tag">
 
          {tech.icon && <tech.icon className="tech-icon" style={{ color: tech.color || 'hsl(220, 60%, 50%)' }} />}
          <span>{tech.name}</span>
        </div>
      ))}
    </div>

    <div className="project-links">
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="link-button">
        <FaGithub /> Repository
      </a>

      {project.liveLink && project.liveLink !== '#' && (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-button live">
          <FaLink /> Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;