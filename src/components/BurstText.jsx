import React from 'react';
import './BurstText.css';

const BurstText = ({ text, className = '', style = {} }) => {
    const characters = text.split('');

    return (
        <span className={`burst-text ${className}`} style={style}>
            {characters.map((char, index) => (
                <span
                    key={index}
                    className="burst-char"
                    style={{
                        animationDelay: `${index * 0.05}s`
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
};

export default BurstText;
