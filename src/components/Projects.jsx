import React, { useEffect } from 'react';
import './Projects.css';
import { FaArrowRight } from "react-icons/fa";
import project1Img from '../assets/images/Project-1.jpeg';
import project2Img from '../assets/images/Project-2.jpeg';
import project3Img from '../assets/images/Project-3.jpeg';
import project4Img from '../assets/images/Project-4.jpeg';
import project5Img from '../assets/images/Project-5.jpeg';
import project6Img from '../assets/images/Project-6.jpeg';
import project7Img from '../assets/images/Project-7.jpeg';

const Projects = () => {

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(el => observer.observe(el));

        return () => revealElements.forEach(el => observer.unobserve(el));
    }, []);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <div className="projects-area tmp-section-gap" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-head text-center mb-5">
                            <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">My Work</span>
                            <h2 className="title text-white split-collab reveal-text" style={{ transitionDelay: '0.1s' }}>Featured Projects</h2>
                        </div>
                    </div>
                </div>

                <div className="projects-grid">

                    {/* Project 1 */}
                    {/* Project 1 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project1Img} alt="Vhilv Technology" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Plowx – Green Themed Plant Website (Figma)</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                A green-themed plant website UI focused on natural aesthetics, smooth navigation, and clear product presentation.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">Figma UI/UX</span>
                                <span className="project-tag">Plant Website</span>
                                <span className="project-tag">UI Design</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://www.figma.com/proto/PZ7oFIpPvSDHwZTTP3pqg9/Plowx?node-id=1-17&p=f&t=MvEqbNNQpnYidir0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A17" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project2Img} alt="Fleet Manager" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Red-Themed Fashion Website Design</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                A stylish fashion website UI designed with a bold red theme, focusing on modern hierarchy and intuitive shopping experience.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">Figma UI/UX</span>
                                <span className="project-tag">Fashion Design</span>
                                <span className="project-tag">Ecommerce UI</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://www.figma.com/proto/vUs7cHqCtdxGF3NLXomphK/Untitled?node-id=35-15&p=f&t=bmIzfUoqRBR3uU5K-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=35%3A15" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project3Img} alt="Creative Suite" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Machaura Datalogic – Black & White Corporate Website (Figma)</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                A minimalist black and white corporate UI for Machaura Datalogic, focusing on professional brand presentation.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">Figma UI/UX</span>
                                <span className="project-tag">Corporate Design</span>
                                <span className="project-tag">Minimalist UI</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://www.figma.com/proto/YF6FeTJTa85ZHqanO7NdB5/Untitled?node-id=7-2242&starting-point-node-id=7%3A2242&scaling=scale-down-width&content-scaling=fixed&t=81wKDXlyjIWhOKHK-1" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project4Img} alt="Project 4" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Vhilv Technology Private Limited – Website Redesign</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                A complete redesign using Figma for UI/UX and Blender for 3D Earth hero animations, enhancing brand identity.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">Figma UI/UX</span>
                                <span className="project-tag">Blender 3D</span>
                                <span className="project-tag">Prototyping</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://www.figma.com/proto/lHLV671cDgJUTAm6xdBBZa/Untitled?node-id=1-1226&p=f&t=f84CyFnC0ca70BUn-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project5Img} alt="CLIQ Photography" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">CLIQ Photography Portfolio Website</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                A cinematic wedding photography portfolio designed with a luxury dark theme, showcasing films, moments, and a seamless booking experience. Built with a focus on storytelling, smooth interactions, and a premium user experience.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">Cinematic UI</span>
                                <span className="project-tag">Responsive Design</span>
                                <span className="project-tag">Interaction Design</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://www.figma.com/proto/hyB7VuUiOpWSRFUjyu98OP/Untitled?node-id=1-2&p=f&t=C7KbkWcLvKND6BYM-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 6 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project6Img} alt="Hexa Core Gym" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Hexa Core Gym Membership Website</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                A high-conversion gym website with a bold black and orange theme, featuring structured pricing plans and a seamless membership flow.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">Conversion Focused</span>
                                <span className="project-tag">Membership UX</span>
                                <span className="project-tag">Pricing Strategy</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://www.figma.com/proto/6yEfgIMxVIdup07Ukpv5lT/Untitled?node-id=1-588&starting-point-node-id=1%3A588&t=xAbk6TaK8QbSN42w-1" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 7 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project7Img} alt="BK Packers & Movers" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">BK Packers & Movers – Branding & UI/UX</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                A modern branding and UI/UX design for a logistics brand, featuring a responsive website, logo, and marketing creatives focused on a premium user experience.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">High-impact</span>
                                <span className="project-tag">Conversion-focused</span>
                                <span className="project-tag">Scalable</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://www.figma.com/proto/XMfNUwvtBNFqAARz38OhO9/Untitled?node-id=1-193&starting-point-node-id=1%3A193&t=4t1KfF0coCTPblcY-1" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;
