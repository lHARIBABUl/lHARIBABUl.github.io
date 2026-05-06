import React from 'react';
import heroImage from '../assets/images/Haribabu.png';
import './HeroAnimations.css';

const Hero = () => {
    return (
        <div className="rpp-banner-five-area" id="home">
            <div className="container">
                <div className="banner-five-main-wrapper">
                    <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
                        <div className="col-lg-6 order-lg-2 position-relative">
                            <div className="bg-benner-img-five text-center position-relative hero-img-wrapper">
                                <img
                                    className="img-fluid hero-image"
                                    src={heroImage}
                                    alt="Hero Image"
                                />
                            </div>
                            {/* Slogan Overlay - Moved outside image wrapper for better mobile separation */}
                            <div className="hero-slogan position-absolute start-50 translate-middle-x hero-slogan-wrapper">
                                <h2 className="hero-subtitle" style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: '800',
                                    fontSize: 'clamp(32px, 5vw, 60px)',
                                    lineHeight: '1.2',
                                    color: '#ffffff',
                                    textShadow: '0 4px 20px rgba(82, 39, 255, 0.5), 0 0 40px rgba(0, 0, 0, 0.8)',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase'
                                }}>
                                    Design <span style={{ color: '#5227FF' }}>Excellence</span>
                                    <br />
                                    <span style={{ fontSize: '0.5em', fontWeight: '500', letterSpacing: '4px', opacity: 0.9 }}>
                                        Crafting Digital Experiences
                                    </span>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 order-lg-1">
                            <div className="inner text-start mb-5 hero-title-wrapper">
                                <h1 className="title" style={{ fontFamily: 'var(--font-primary)', fontWeight: 'bold', fontSize: '45px', lineHeight: '1.2' }}>
                                    <span className="hero-title" style={{ fontSize: '20px', fontWeight: '500', display: 'block', marginBottom: '8px', color: '#fff' }}>
                                        Hi, I am <span className="hero-name-premium">Haribabu</span>
                                    </span>
                                    <span className="hero-subtitle" style={{ display: 'block' }}>UI/UX Designer</span>
                                </h1>
                            </div>
                            <div className="banner-left-content hero-counters-wrapper">
                                <div className="banner-counter">
                                    <ul className="list-unstyled">
                                        <li className="mb-4 hero-counter-item">
                                            <div className="banner-counter-card">
                                                <h4 className="counter title display-4 fw-bold">10K</h4>
                                                <p className="para" style={{ color: '#d0d0d0', opacity: 0.7 }}>Winning award</p>
                                            </div>
                                        </li>
                                        <li className="mb-4 hero-counter-item">
                                            <div className="banner-counter-card">
                                                <h4 className="counter title display-4 fw-bold">7</h4>
                                                <p className="para" style={{ color: '#d0d0d0', opacity: 0.7 }}>Complete project</p>
                                            </div>
                                        </li>
                                        <li className="hero-counter-item">
                                            <div className="banner-counter-card">
                                                <h4 className="counter title display-4 fw-bold">10+</h4>
                                                <p className="para" style={{ color: '#d0d0d0', opacity: 0.7 }}>Client Feedback</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 order-lg-3">
                            <div className="banner-right-content text-end hero-bio-wrapper">
                                <div className="banner-contact-info">
                                    <div className="contact-info mb-4 hero-bio">
                                        <h4 className="title h5" style={{ color: '#ffffff' }}>Biography :</h4>
                                        <p className="para" style={{ color: '#d0d0d0', opacity: 0.7 }}>To build a strong career as a UI/UX Designer creating user-centered, impactful digital experiences.</p>
                                    </div>
                                    <div className="contact-info hero-contact">
                                        <h4 className="title h5" style={{ color: '#ffffff' }}>Contact :</h4>
                                        <p className="para mb-1"><a href="#">Nagapattinam, India</a></p>
                                        <p className="para mb-1"><a href="mailto:haribabupers@gmail.com">haribabupers@gmail.com</a></p>
                                        <p className="para"><a href="tel:+916383595441" className="phone-link">Call Now</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-img-bg position-absolute start-0 w-100 h-100 hero-bg-responsive">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-100 h-100" preserveAspectRatio="none">
                    {/* Base Lines */}
                    <path className="wave-path-base" fill="none" stroke="#5227FF" strokeWidth="2" strokeOpacity="0.5" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192" />
                    <path className="wave-path-base" fill="none" stroke="#a356f7" strokeWidth="2" strokeOpacity="0.3" d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160" />

                    {/* Running Light Lines */}
                    <path className="wave-path-light" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192" />
                    <path className="wave-path-light" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160" />
                </svg>
            </div>
        </div>

    );
};

export default Hero;
