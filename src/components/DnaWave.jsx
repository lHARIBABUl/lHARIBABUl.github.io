import React, { useEffect, useRef } from 'react';

const DnaWave = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let t = 0;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            const points = 70; // More points for smoother curve
            const baseY = H * 0.5; // Centered vertically
            const baseAmp = 65; // Increased wave height (amplitude)
            const helixAmp = 35; // Increased DNA width (strand separation)

            // The SVG path was roughly: M0,160 ... C288,224 ... 576,165 ... 864,128 ... 1152,197 ... 1440,192
            // We can approximate this organic wave with a combination of sines
            const getBasePath = (xNorm) => {
                // xNorm is 0 to 1
                // This function returns the Y offset from baseY for the main path
                return Math.sin(xNorm * Math.PI * 2.5) * baseAmp + Math.sin(xNorm * Math.PI * 1.5) * (baseAmp * 0.5);
            };

            // Draw connecting rungs first (behind strands)
            for (let i = 0; i < points; i++) {
                const xNorm = i / (points - 1);
                const x = xNorm * W;
                const pathY = baseY + getBasePath(xNorm);

                // DNA rotation
                const angle = xNorm * Math.PI * 12 + t;
                const yOffset = Math.sin(angle) * helixAmp;

                // Perpendicular ish offset for thickness logic
                // Simplified: just vertical offset relative to path
                const y1 = pathY + yOffset;
                const y2 = pathY - yOffset;

                // Rung
                const alpha = (Math.sin(angle) + 1) / 2 * 0.6 + 0.2; // Opacity based on depth
                ctx.beginPath();
                ctx.moveTo(x, y1);
                ctx.lineTo(x, y2);
                ctx.strokeStyle = `rgba(163, 86, 247, ${alpha * 0.5})`; // Purple rungs
                ctx.lineWidth = 2; // Thicker rungs
                ctx.stroke();

                // Dots at ends
                [y1, y2].forEach((y, idx) => {
                    const color = idx === 0 ? '#5227FF' : '#a356f7'; // Blue / Purple
                    const size = (Math.sin(angle + (idx * Math.PI)) + 1) * 2 + 2; // Larger dots
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    ctx.globalAlpha = alpha;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                });
            }

            // Draw Strand 1
            ctx.beginPath();
            for (let i = 0; i <= points; i++) {
                const xNorm = i / points;
                const x = xNorm * W;
                const pathY = baseY + getBasePath(xNorm);
                const angle = xNorm * Math.PI * 12 + t;
                const y = pathY + Math.sin(angle) * helixAmp;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = '#5227FF'; // Primary Blue
            ctx.lineWidth = 3; // Thicker line
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#5227FF';
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Draw Strand 2
            ctx.beginPath();
            for (let i = 0; i <= points; i++) {
                const xNorm = i / points;
                const x = xNorm * W;
                const pathY = baseY + getBasePath(xNorm);
                const angle = xNorm * Math.PI * 12 + t + Math.PI; // Opposite phase
                const y = pathY + Math.sin(angle) * helixAmp;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = '#a356f7'; // Secondary Purple
            ctx.lineWidth = 3; // Thicker line
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#a356f7';
            ctx.stroke();
            ctx.shadowBlur = 0;

            t -= 0.02; // Rotate animation speed
            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                display: 'block',
                width: '100%',
                height: '100%',
            }}
        />
    );
};

export default DnaWave;
