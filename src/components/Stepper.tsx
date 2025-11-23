import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RotateCcw } from 'lucide-react';

const steps = [
    { id: 1, label: 'Datos' },
    { id: 2, label: 'Envío' },
    { id: 3, label: 'Pago' },
    { id: 4, label: 'Confirmación' },
];

export const Stepper: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const isComplete = currentStep === steps.length + 1;

    const handleNext = () => {
        if (currentStep <= steps.length) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(1);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-8 flex flex-col items-center">
            <div className="relative flex justify-between items-center w-full">
                {/* Background Line */}
                {/* Background Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 z-0" />

                {/* Active Line Animation */}
                <motion.div
                    className="absolute top-1/2 left-0 h-1 bg-blue-500 -translate-y-1/2 z-0"
                    initial={{ width: '0%' }}
                    animate={{
                        width: `${Math.min(100, ((currentStep - 1) / (steps.length - 1)) * 100)}%`
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {steps.map((step) => {
                    const isCompleted = step.id < currentStep;
                    const isActive = step.id === currentStep;

                    return (
                        <div key={step.id} className="relative flex flex-col items-center group z-10">
                            <motion.div
                                className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-colors duration-300 bg-slate-900 ${isActive || isCompleted
                                    ? 'border-blue-500 text-blue-500'
                                    : 'border-slate-600 text-slate-500'
                                    }`}
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    backgroundColor: isCompleted ? '#3b82f6' : '#0f172a',
                                    borderColor: isCompleted ? '#3b82f6' : (isActive ? '#3b82f6' : '#475569'),
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {isCompleted ? (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <Check className="w-6 h-6 text-white" />
                                    </motion.div>
                                ) : (
                                    <span className={`font-bold text-lg ${isCompleted ? 'text-white' : ''}`}>{step.id}</span>
                                )}
                            </motion.div>

                            <div className="absolute top-14 w-32 text-center">
                                <span className={`text-sm font-semibold transition-colors duration-300 ${isActive || isCompleted ? 'text-blue-400' : 'text-slate-500'
                                    }`}>
                                    {step.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="mt-20 flex gap-4">
                <AnimatePresence mode="wait">
                    {isComplete ? (
                        <motion.button
                            key="reset"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            onClick={handleReset}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95"
                        >
                            <RotateCcw className="w-5 h-5" />
                            Reiniciar Proceso
                        </motion.button>
                    ) : (
                        <>
                            <button
                                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                                className={`px-6 py-3 rounded-xl font-medium transition-all ${currentStep === 1
                                    ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                    }`}
                                disabled={currentStep === 1}
                            >
                                Anterior
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
                            >
                                {currentStep === steps.length ? 'Finalizar' : 'Siguiente'}
                            </button>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
