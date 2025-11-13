import './Contact.css';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const contactDetails = {
    email: "ABHISHEKRAJCHOWDARY14@GMAIL.COM",
    linkedin: "https://linkedin.com/in/ARC1183",
    github: "https://github.com/arc1183", 
    location: "New York, USA",
};

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                
                <h2 className="contact-title">
                    Get In Touch 
                </h2>

                <p className="contact-intro-text">
                    I am actively seeking Software Developer roles, particularly in areas related to MLOps and Scalable Systems. If you have an opportunity or just want to connect, my inbox is always open!
                </p>
                <a 
                    href={`mailto:${contactDetails.email}`}
                    className="email-button"
                >
                    <FaEnvelope /> Say Hello
                </a>
                <div className="contact-details-grid">
                    <div className="social-links">
                        <a 
                            href={contactDetails.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon linkedin"
                        >
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a 
                            href={contactDetails.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon github"
                        >
                            <FaGithub /> GitHub
                        </a>
                    </div>
                    <div className="info-box">
                        <p>
                            <strong>Location:</strong> {contactDetails.location}
                        </p>
                        <p>
                            <strong>Direct Email:</strong> {contactDetails.email}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;