import React, { useEffect, useRef } from 'react';

const DnaHelix = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let t = 0;

        // Particles
        const particles = Array.from({ length: 80 }, () => ({
            x: Math.random(),
            y: Math.random(),
            r: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.0003 + 0.0001,
            opacity: Math.random() * 0.5 + 0.2,
        }));

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

            const cx = W / 2;
            const amp = Math.min(W * 0.22, 160);
            const RUNGS = 24;
            const speed = 0.008;

            // ── Collect rung data for depth sorting ──
            const rungData = [];
            for (let i = 0; i < RUNGS; i++) {
                const progress = i / (RUNGS - 1);
                const y = progress * H;
                const angle = progress * Math.PI * 4 + t; // 2 full rotations
                const sinA = Math.sin(angle);
                const cosA = Math.cos(angle);

                const x1 = cx + sinA * amp;
                const x2 = cx - sinA * amp;

                // depth: cosA tells us which strand is "in front"
                const depth = (cosA + 1) / 2; // 0 = back, 1 = front

                rungData.push({ y, x1, x2, sinA, cosA, depth, angle });
            }

            // ── Draw back strand first (depth < 0.5) ──
            const drawStrand = (side, color1, color2) => {
                ctx.beginPath();
                for (let i = 0; i < RUNGS; i++) {
                    const { y, x1, x2, sinA } = rungData[i];
                    const x = side === 1 ? x1 : x2;
                    if (i === 0) ctx.moveTo(x, y);
                    else {
                        // smooth bezier through points
                        const prev = rungData[i - 1];
                        const px = side === 1 ? prev.x1 : prev.x2;
                        const py = prev.y;
                        const cpY = (py + y) / 2;
                        ctx.bezierCurveTo(px, cpY, x, cpY, x, y);
                    }
                }
                const grad = ctx.createLinearGradient(cx - amp, 0, cx + amp, H);
                grad.addColorStop(0, color1);
                grad.addColorStop(0.5, color2);
                grad.addColorStop(1, color1);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 5;
                ctx.shadowColor = color2;
                ctx.shadowBlur = 18;
                ctx.stroke();
                ctx.shadowBlur = 0;
            };

            // Back strands (dimmer)
            ctx.globalAlpha = 0.45;
            drawStrand(1, 'rgba(0,180,220,0.6)', 'rgba(0,220,255,0.9)');
            drawStrand(2, 'rgba(0,150,200,0.5)', 'rgba(0,200,240,0.8)');
            ctx.globalAlpha = 1;

            // ── Draw rungs sorted by depth ──
            const sorted = [...rungData].sort((a, b) => a.depth - b.depth);

            sorted.forEach(({ y, x1, x2, depth, cosA }) => {
                const isFront = cosA > 0;
                const alpha = 0.3 + depth * 0.7;
                const nodeR = 4 + depth * 5;

                // Rung tube (gradient line)
                const rGrad = ctx.createLinearGradient(x1, y, x2, y);
                rGrad.addColorStop(0, `rgba(0,200,240,${alpha * 0.9})`);
                rGrad.addColorStop(0.3, `rgba(180,240,255,${alpha * 0.5})`);
                rGrad.addColorStop(0.5, `rgba(220,250,255,${alpha * 0.3})`);
                rGrad.addColorStop(0.7, `rgba(180,240,255,${alpha * 0.5})`);
                rGrad.addColorStop(1, `rgba(0,200,240,${alpha * 0.9})`);

                ctx.beginPath();
                ctx.moveTo(x1, y);
                ctx.lineTo(x2, y);
                ctx.strokeStyle = rGrad;
                ctx.lineWidth = 2 + depth * 2.5;
                ctx.shadowColor = `rgba(0,220,255,${alpha * 0.6})`;
                ctx.shadowBlur = isFront ? 12 : 4;
                ctx.stroke();
                ctx.shadowBlur = 0;

                // Node dots at each end
                [[x1, 'rgba(0,230,255,'], [x2, 'rgba(0,200,240,']].forEach(([nx, baseColor]) => {
                    // Outer glow
                    const glow = ctx.createRadialGradient(nx, y, 0, nx, y, nodeR * 2.5);
                    glow.addColorStop(0, `${baseColor}${alpha * 0.6})`);
                    glow.addColorStop(1, `${baseColor}0)`);
                    ctx.beginPath();
                    ctx.arc(nx, y, nodeR * 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = glow;
                    ctx.fill();

                    // Core dot
                    const core = ctx.createRadialGradient(nx - nodeR * 0.3, y - nodeR * 0.3, 0, nx, y, nodeR);
                    core.addColorStop(0, `rgba(220,250,255,${alpha})`);
                    core.addColorStop(0.4, `${baseColor}${alpha})`);
                    core.addColorStop(1, `${baseColor}${alpha * 0.3})`);
                    ctx.beginPath();
                    ctx.arc(nx, y, nodeR, 0, Math.PI * 2);
                    ctx.fillStyle = core;
                    ctx.shadowColor = 'rgba(0,230,255,0.9)';
                    ctx.shadowBlur = isFront ? 16 : 6;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                });
            });

            // ── Front strands (brighter, on top) ──
            ctx.globalAlpha = 0.9;
            drawStrand(1, 'rgba(0,200,240,0.8)', 'rgba(0,240,255,1)');
            drawStrand(2, 'rgba(0,180,220,0.7)', 'rgba(0,220,255,0.95)');
            ctx.globalAlpha = 1;

            // ── Floating particles ──
            particles.forEach(p => {
                p.y -= p.speed;
                if (p.y < 0) { p.y = 1; p.x = Math.random(); }
                ctx.beginPath();
                ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,220,255,${p.opacity})`;
                ctx.shadowColor = 'rgba(0,220,255,0.8)';
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            t += speed;
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
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default DnaHelix;
