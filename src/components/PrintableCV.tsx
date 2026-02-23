// src/components/PrintableCV.tsx
import React from 'react';
import Hero from './Hero';
import Experience from './Experience';
import Education from './Education';
import Academic from './Academic';
import Cursos from './Cursos';
import Pasantias from './Pasantias';
import Projects from './Projects';
import Investigacion from './Investigacion';
import Publicaciones from './Publicaciones';
import Congresos from './Congresos';
import Skills from './Skills';

const PrintableCV = () => {
    return (
        <div id="printable-cv" className="printable-cv bg-dark text-white p-4">
            {/* Secciones expandidas secuencialmente */}
            <Hero isPrintable={true} />

            <div className="mt-5">
                <h2 className="text-center mb-4 text-title border-bottom pb-2">Experiencia Profesional</h2>
                <Experience />
            </div>

            <div className="mt-5">
                <h2 className="text-center mb-4 text-title border-bottom pb-2">Formación</h2>
                <Education />
                <Academic />
                <Cursos />
                <Pasantias />
            </div>

            <div className="mt-5 page-break">
                <h2 className="text-center mb-4 text-title border-bottom pb-2">Proyectos e Investigación</h2>
                <Projects />
                <Investigacion />
                <Publicaciones />
                <Congresos />
            </div>

            <div className="mt-5">
                <h2 className="text-center mb-4 text-title border-bottom pb-2">Habilidades Tecnológicas</h2>
                <Skills />
            </div>

            <div className="text-center mt-5 pt-4 border-top text-body">
                <small>CV Generado automáticamente desde Portfolio Web</small>
            </div>
        </div>
    );
};

export default PrintableCV;
