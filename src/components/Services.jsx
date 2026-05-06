import React, { useEffect } from 'react';
import './Services.css';
import { FaPenNib, FaCube, FaVideo, FaCheck } from "react-icons/fa";

const Services = () => {

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = document.querySelectorAll('.service-card');
        revealElements.forEach(el => observer.observe(el));

        return () => revealElements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="services-area tmp-section-gap" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-head text-center mb-5">
                            <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">What I Do</span>
                            <h2 className="title text-white split-collab reveal-text" style={{ transitionDelay: '0.1s' }}>My Services</h2>
                        </div>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {/* Service Card 1: UI/UX Design */}
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="service-card reveal-text"
                            style={{ transitionDelay: '0.2s' }}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                card.style.setProperty('--x', `${x}px`);
                                card.style.setProperty('--y', `${y}px`);
                            }}
                        >
                            <div className="card-content">
                                <div className="service-icon">
                                    <FaPenNib />
                                </div>
                                <h4 className="service-title">UI/UX Design</h4>
                                <p className="service-description">
                                    Creating intuitive and visually appealing interfaces for web and mobile applications. Specializing in user research, wireframing, and interactive prototyping.
                                </p>
                                <ul className="service-list">
                                    <li><FaCheck /> App & Web Design</li>
                                    <li><FaCheck /> Wireframing (Figma/XD)</li>
                                    <li><FaCheck /> User Research</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 2: 3D Modeling */}
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="service-card reveal-text"
                            style={{ transitionDelay: '0.4s' }}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                card.style.setProperty('--x', `${x}px`);
                                card.style.setProperty('--y', `${y}px`);
                            }}
                        >
                            <div className="card-content">
                                <div className="service-icon">
                                    <FaCube />
                                </div>
                                <h4 className="service-title">3D Modeling & Visuals</h4>
                                <p className="service-description">
                                    Designing high-quality 3D assets and product visualizations using Blender. Bringing concepts to life with realistic rendering and creative modeling.
                                </p>
                                <ul className="service-list">
                                    <li><FaCheck /> Product Modeling</li>
                                    <li><FaCheck /> Low/High Poly Assets</li>
                                    <li><FaCheck /> Blender Expertise</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 3: Video & Motion */}
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="service-card reveal-text"
                            style={{ transitionDelay: '0.6s' }}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                card.style.setProperty('--x', `${x}px`);
                                card.style.setProperty('--y', `${y}px`);
                            }}
                        >
                            <div className="card-content">
                                <div className="service-icon">
                                    <FaVideo />
                                </div>
                                <h4 className="service-title">Video Editing & Motion</h4>
                                <p className="service-description">
                                    Professional video editing and motion graphics for promotional content, digital marketing, and brand storytelling.
                                </p>
                                <ul className="service-list">
                                    <li><FaCheck /> Promotional Videos</li>
                                    <li><FaCheck /> Premiere Pro / After Effects</li>
                                    <li><FaCheck /> Social Media Content</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;
