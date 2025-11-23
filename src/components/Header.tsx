import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Header: React.FC = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-xl font-bold text-white">UI Playground</div>
            <nav className="flex gap-6">
                {['Inicio', 'Componentes', 'Acerca', 'Contacto'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-300 hover:text-white transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
            </nav>
        </motion.header>
    );
};
