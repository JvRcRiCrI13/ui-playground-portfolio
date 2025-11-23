import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GlassCardProps {
    title: string;
    description: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ title, description }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-80 h-96 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex flex-col justify-center items-center p-6 cursor-pointer"
        >
            <div style={{ transform: "translateZ(75px)" }} className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-300">{description}</p>
            </div>
            <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                style={{ transform: "translateZ(50px)" }}
            />
        </motion.div>
    );
};
