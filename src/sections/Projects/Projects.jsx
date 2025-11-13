
import './Projects.css';

import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'; 

import { FaAws, FaPython, FaDocker, FaGithub, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiTailwindcss,SiMongodb, SiNumpy, SiPandas} from 'react-icons/si';


const projectsData = [
  {
    title: "Named Entity Recognition for Technical Terms",
    technologies: [
      { name: "Python", icon: FaPython },
      
      { name: "spaCy", icon: FaPython },
    ],
    description: "Built a sophisticated NER pipeline using spaCy and fine-tuned BERT/ROBERTa models to extract domain-specific technical entities from forums, achieving 20% higher accuracy than baseline models. Engineered metadata-based features for post engagement prediction (0.82 F1-score).",
    repoLink: "#", 
    liveLink: "" 
  },
  {
    title: "Verite - Cybersecurity Symposium Platform",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ],
    description: "Designed and styled interactive web pages for a cybersecurity symposium platform using React and CSS. Developed a unique login system that challenged users to uncover a hidden code via browser developer tools to test basic hacking knowledge.",
    repoLink: "https://github.com/Fractal393/Verite", 
    liveLink: "" 
  },
  {
    title: "Real-Time COVID-19 Face Mask Detection (CNN)",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow/Keras", icon: SiTensorflow },
      { name: "OpenCV", icon: FaPython },
    ],
    description: "Developed a 95% accurate, real-time face mask detection model using Convolutional Neural Networks (CNNs) and OpenCV to monitor public health compliance. Demonstrated proficiency in model training, optimization, and deployment readiness.",
    repoLink: "#", 
    liveLink: ""  
  },
  {
    title: "MLOps Anomaly Detection Pipeline (Research)",
    technologies: [
      { name: "AWS (EC2, S3)", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "CI/CD", icon: FaGithub },
    ],
    description: "Engineered and deployed an MLOps infrastructure on AWS EC2, automating model retraining and deployment via GitHub Actions. Focus was on real-time network intrusion detection using unsupervised ML, reducing manual inspection time by 30%.",
    repoLink: "#", 
    liveLink: ""  
  },
  {
    title: "ML Models from Scratch",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "GitHub", icon: FaGithub },
    ],
    description: "Engineered and deployed an MLOps infrastructure on AWS EC2, automating model retraining and deployment via GitHub Actions. Focus was on real-time network intrusion detection using unsupervised ML, reducing manual inspection time by 30%.",
    repoLink: "https://github.com/arc1183/ML-Models-from-Scratch", 
    liveLink: ""  
  }
  ,
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Key Projects
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;