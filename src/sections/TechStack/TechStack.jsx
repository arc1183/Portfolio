
import './TechStack.css'; 

import { FaReact, FaNodeJs, FaJava, FaAws, FaDocker, FaPython, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiTensorflow, SiPytorch, SiMongodb,
     SiMysql, SiExpress, SiGnubash, SiJupyter, SiScikitlearn,
      SiGithubactions, SiGooglecloud } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { VscTerminalBash } from 'react-icons/vsc';

const techCategories = [
  {
    title: "Core Languages & Frontend",
    description: "Foundational and application-layer programming.",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript (ES6+)", icon: IoLogoJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ]
  },
  {
    title: "Backend & Frameworks",
    description: "Building scalable APIs and server-side logic.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#F3F4F6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "REST APIs", icon: VscTerminalBash, color: "#A8A8A8" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
    ]
  },
  {
    title: "Cloud, MLOps & DevOps",
    description: "Automation, deployment, and infrastructure.",
    skills: [
      { name: "AWS (EC2, S3)", icon: FaAws, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" }, 
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "GitHub Actions (CI/CD)", icon: SiGithubactions, color: "#2088FF" },
      { name: "CI/CD Pipelines", icon: FaDocker, color: "#2496ED" },
    ]
  },
  {
    title: "Machine Learning & Data",
    description: "Specialization in models and data manipulation.",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "OpenCV", icon: FaPython, color: "#5C3EE8" }, 
        { name: "Pandas/NumPy", icon: SiJupyter, color: "#6366F1" },
    ]
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-section">
      <div className="tech-container">
        <h2 className="tech-title">
          Technical Stack 
        </h2>
        
        <div className="tech-grid">
          {techCategories.map((category) => (
            <div key={category.title} className="tech-category-card">
              <h3 className="category-heading">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              
              <div className="skills-icon-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
             
                    <skill.icon size={30} style={{ color: skill.color }} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TechStack;