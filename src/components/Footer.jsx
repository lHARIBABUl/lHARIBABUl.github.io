import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <p className="copyright-text">
                        &copy; {currentYear} Haribabu. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
