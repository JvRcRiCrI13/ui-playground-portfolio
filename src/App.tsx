import { useState } from 'react';
import { Header } from './components/Header';
import { GlassCard } from './components/GlassCard';
import { ToggleSwitch } from './components/ToggleSwitch';
import { FloatingInput } from './components/FloatingInput';
import { Stepper } from './components/Stepper';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-blue-500/30">
      <Header />

      <main className="pt-24 px-8 max-w-7xl mx-auto pb-8">
        <section id="inicio" className="mb-20 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 pb-2">
            UI Playground
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Una colección de componentes interactivos y modernos construidos con React, Tailwind CSS y Framer Motion.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Glass Card Section */}
          <section id="componentes" className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold text-slate-200">Glass Card</h2>
            <GlassCard
              title="Tarjeta de Vidrio"
              description="Pasa el cursor para ver el efecto de inclinación 3D y el brillo dinámico."
            />
          </section>

          {/* Interactive Controls Section */}
          <section className="flex flex-col items-center gap-8">
            <h2 className="text-2xl font-semibold text-slate-200">Controles Interactivos</h2>

            <div className="flex flex-col items-center gap-4 p-8 rounded-xl bg-slate-800/50 border border-slate-700 w-full max-w-xs">
              <span className="text-sm text-slate-400">Toggle Switch</span>
              <ToggleSwitch isOn={isToggled} setIsOn={setIsToggled} />
              <span className="text-xs text-slate-500 mt-2">Estado: {isToggled ? 'Encendido' : 'Apagado'}</span>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 rounded-xl bg-slate-800/50 border border-slate-700 w-full max-w-xs">
              <span className="text-sm text-slate-400">Floating Input</span>
              <FloatingInput label="Nombre de usuario" />
              <FloatingInput label="Correo electrónico" type="email" />
            </div>
          </section>

          {/* Info Section */}
          <section id="acerca" className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold text-slate-200">Acerca del Proyecto</h2>
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 text-slate-300 leading-relaxed">
              <p className="mb-4">
                Este proyecto demuestra la capacidad de crear interfaces fluidas y atractivas.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>React + TypeScript</li>
                <li>Tailwind CSS para estilos</li>
                <li>Framer Motion para animaciones</li>
                <li>Diseño totalmente responsivo</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Stepper Section */}
        <section className="mt-12 w-full flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold text-slate-200">Indicador de Progreso</h2>
          <div className="w-full bg-slate-800/30 border border-slate-700 rounded-xl">
            <Stepper />
          </div>
        </section>
        {/* Footer Credits */}
        <footer className="mt-20 py-6 text-center text-slate-500 text-sm border-t border-slate-800/50">
          <p>
            Desarrollado con metodología <span className="text-blue-400 font-medium">AI-First</span> en Google Antigravity.
          </p>
          <p className="mt-2">
            Diseño y UX por <span className="text-slate-300">Javier Espinoza</span> • Orquestación de Código por <span className="text-purple-400">Gemini 3 Pro</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
