import React, { useEffect } from 'react';
import './Experience.css';
import { FaLaptopCode, FaBriefcase, FaCalendarAlt, FaCheck, FaPaintBrush, FaChartLine } from "react-icons/fa";

const Experience = () => {

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = document.querySelectorAll('.experience-item, .reveal-text');
        revealElements.forEach(el => observer.observe(el));

        return () => revealElements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="experience-area tmp-section-gap" id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-head text-center mb-5">
                            <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">My Journey</span>
                            <h2 className="title text-white split-collab reveal-text" style={{ transitionDelay: '0.1s' }}>My Experience</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="experience-timeline">

                            {/* Experience Item 1: Vhilv Technology */}
                            <div
                                className="experience-item text-start"
                                style={{ transitionDelay: '0.2s', opacity: 1, transform: 'none' }}
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
                                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="exp-icon-box">
                                                <FaBriefcase />
                                            </div>
                                            <div>
                                                <h4 className="exp-company">Vhilv Technology</h4>
                                                <span className="exp-role"><FaLaptopCode className="me-2" /> UI/UX Internship</span>
                                            </div>
                                        </div>
                                        <span className="exp-date"><FaCalendarAlt className="me-2" /> 6 Months</span>
                                    </div>

                                    <p className="exp-description">
                                        Worked on real-time UI/UX projects including wireframing and prototyping, collaborated with developers, and contributed to posters, digital creatives, and video editing for branding and marketing support.
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="exp-tags">
                                        <span className="exp-tag">User Research</span>
                                        <span className="exp-tag">Wireframing</span>
                                        <span className="exp-tag">Prototyping</span>
                                        <span className="exp-tag">Visual Design</span>
                                        <span className="exp-tag">Team Collaboration</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
