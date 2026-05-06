import { useEffect } from 'react';
import './About.css'; // Import the new CSS
import aboutImage from '../assets/images/Haribabu-About.png';
// import {
//     SiFigma,
//     SiAdobexd,
//     SiBlender,
//     SiAdobephotoshop,
//     SiAdobepremierepro,
//     SiAdobeaftereffects,
//     SiCanva
// } from "react-icons/si";
import { FaUserCheck, FaPencilRuler, FaLayerGroup } from "react-icons/fa";

const About = () => {

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

    return (
        <div className="about-area tmp-section-gap" id="about">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <div className="about-thumbnails text-center">
                            <div className="about-image-wrapper">
                                <div className="profile-card-image">
                                    <img src={aboutImage} alt="About Haribabu" className="img-fluid rounded-3" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="floating-badge">
                                    <i className="fa-solid fa-layer-group"></i>
                                    <span>UI/UX Expert</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-inner">
                            <div className="section-head text-start mb-4">
                                <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">About Me</span>
                                <h2 className="title split-collab mb-3 reveal-text" style={{ transitionDelay: '0.2s' }}>
                                    UI/UX Designer <br /> & Developer
                                </h2>
                            </div>
                            <p className="description mb-4 reveal-text" style={{ color: '#d0d0d0', opacity: 0.7, transitionDelay: '0.4s' }}>
                                To build a strong career as a UI/UX Designer creating user-centered, impactful digital experiences. I aim to apply my skills in UI/UX, poster design, video editing, Blender (3D visuals), and digital marketing to contribute to innovative projects, continuously learn, grow as a multi-skilled designer, collaborate with teams, and deliver meaningful design solutions that enhance user experience and business value.
                            </p>

                            <div className="about-skill-wrapper mb-4 reveal-text" style={{ transitionDelay: '0.6s' }}>
                                <h5 className="fw-bold mb-4 text-white">Tools & Expertise</h5>
                                <div className="tech-marquee-container">
                                    <div className="tech-marquee-track">
                                        {/* Set 1 */}
                                        <div className="tech-item" title="Figma"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Figma</span></div>
                                        <div className="tech-item" title="Adobe XD"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg" alt="XD" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Adobe XD</span></div>
                                        <div className="tech-item" title="Blender"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" alt="Blender" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Blender</span></div>
                                        <div className="tech-item" title="Photoshop"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Photoshop</span></div>
                                        <div className="tech-item" title="Premiere Pro"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" alt="Premiere" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Premiere</span></div>
                                        <div className="tech-item" title="After Effects"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" alt="After Effects" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>After Effects</span></div>
                                        <div className="tech-item" title="Canva"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Canva</span></div>

                                        {/* Skills (kept as high-quality icons) */}
                                        <div className="tech-item" title="User Research"><FaUserCheck size={28} color="#2ECC71" /><span>Research</span></div>
                                        <div className="tech-item" title="Wireframing"><FaPencilRuler size={28} color="#F1C40F" /><span>Wireframe</span></div>
                                        <div className="tech-item" title="Prototyping"><FaLayerGroup size={28} color="#E74C3C" /><span>Prototype</span></div>

                                        {/* Set 2 (Duplicate for Infinite Scroll) */}
                                        <div className="tech-item" title="Figma"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Figma</span></div>
                                        <div className="tech-item" title="Adobe XD"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg" alt="XD" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Adobe XD</span></div>
                                        <div className="tech-item" title="Blender"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" alt="Blender" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Blender</span></div>
                                        <div className="tech-item" title="Photoshop"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Photoshop</span></div>
                                        <div className="tech-item" title="Premiere Pro"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" alt="Premiere" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Premiere</span></div>
                                        <div className="tech-item" title="After Effects"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" alt="After Effects" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>After Effects</span></div>
                                        <div className="tech-item" title="Canva"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Canva</span></div>

                                        <div className="tech-item" title="User Research"><FaUserCheck size={28} color="#2ECC71" /><span>Research</span></div>
                                        <div className="tech-item" title="Wireframing"><FaPencilRuler size={28} color="#F1C40F" /><span>Wireframe</span></div>
                                        <div className="tech-item" title="Prototyping"><FaLayerGroup size={28} color="#E74C3C" /><span>Prototype</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .tmp-section-gap { padding: 80px 0; }
                .text-secondary { color: #abb8c3 !important; }
            `}</style>
        </div>
    );
};

export default About;
