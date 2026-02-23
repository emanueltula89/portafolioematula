// src/components/TabsContainer.tsx
"use client";

import { useState, useEffect } from 'react';
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
import ContactForm from './ContactForm';

const TabsContainer = () => {
    const [activeTab, setActiveTab] = useState('experience');

    useEffect(() => {
        const handleSwitchTab = (e: any) => {
            if (e.detail) {
                setActiveTab(e.detail);
                // Opcional: Scrollear a la sección de pestañas
                document.getElementById('tabs-section')?.scrollIntoView({ behavior: 'smooth' });
            }
        };
        window.addEventListener('switchTab', handleSwitchTab);
        return () => window.removeEventListener('switchTab', handleSwitchTab);
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'experience':
                return <Experience />;
            case 'education':
                return (
                    <>
                        <Education />
                        <Academic />
                        <Cursos />
                        <Pasantias />
                    </>
                );
            case 'projects':
                return (
                    <>
                        <Projects />
                        <Investigacion />
                        <Publicaciones />
                        <Congresos />
                    </>
                );
            case 'skills':
                return <Skills />;
            case 'contact':
                return <ContactForm />;
            default:
                return <Experience />;
        }
    };

    return (
        <section id="tabs-section" className="py-4" style={{ minHeight: '600px' }}>
            <div className="container">
                <ul className="nav nav-pills nav-fill mb-4 p-2">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'experience' ? 'fw-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('experience')}
                            style={activeTab === 'experience' ? { color: '#f8fafc', borderBottom: '3px solid var(--primary-color)', borderRadius: '0', backgroundColor: 'transparent' } : {}}
                        >
                            Experiencia
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'education' ? 'fw-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('education')}
                            style={activeTab === 'education' ? { color: '#f8fafc', borderBottom: '3px solid var(--primary-color)', borderRadius: '0', backgroundColor: 'transparent' } : {}}
                        >
                            Formación y Antecedentes
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'projects' ? 'fw-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('projects')}
                            style={activeTab === 'projects' ? { color: '#f8fafc', borderBottom: '3px solid var(--primary-color)', borderRadius: '0', backgroundColor: 'transparent' } : {}}
                        >
                            Proyectos
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'skills' ? 'fw-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('skills')}
                            style={activeTab === 'skills' ? { color: '#f8fafc', borderBottom: '3px solid var(--primary-color)', borderRadius: '0', backgroundColor: 'transparent' } : {}}
                        >
                            Habilidades Tecnológicas
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'contact' ? 'fw-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('contact')}
                            style={activeTab === 'contact' ? { color: '#f8fafc', borderBottom: '3px solid var(--primary-color)', borderRadius: '0', backgroundColor: 'transparent' } : {}}
                        >
                            Contacto
                        </button>
                    </li>
                </ul>

                <div className="tab-content p-4">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default TabsContainer;
