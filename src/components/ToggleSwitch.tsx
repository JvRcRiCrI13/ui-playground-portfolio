import React from 'react';
import { motion } from 'framer-motion';

interface ToggleSwitchProps {
    isOn: boolean;
    setIsOn: (isOn: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, setIsOn }) => {
    return (
        <div
            className={`w-16 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-blue-500' : 'bg-gray-600'
                }`}
            onClick={() => setIsOn(!isOn)}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className="bg-white w-8 h-8 rounded-full shadow-md"
                animate={{ x: isOn ? 24 : 0 }}
            />
        </div>
    );
};
