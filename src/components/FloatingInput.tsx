import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingInputProps {
    label: string;
    type?: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({ label, type = 'text' }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const isActive = isFocused || value.length > 0;

    return (
        <div className="relative w-full max-w-xs">
            <motion.label
                initial={false}
                animate={{
                    y: isActive ? -24 : 0,
                    scale: isActive ? 0.85 : 1,
                    color: isActive ? '#3b82f6' : '#94a3b8', // blue-500 : slate-400
                }}
                className="absolute left-0 top-2 pointer-events-none origin-left"
            >
                {label}
            </motion.label>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full bg-transparent border-b-2 border-slate-600 focus:border-blue-500 outline-none py-2 text-white transition-colors"
            />
        </div>
    );
};
