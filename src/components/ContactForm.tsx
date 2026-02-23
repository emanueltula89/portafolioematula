"use client";

import { useState } from 'react';
import { sendEmail } from '@/app/actions';

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(formData: FormData) {
        setStatus('sending');
        const result = await sendEmail(formData);
        if (result.success) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    }

    return (
        <div className="card shadow-sm border-0 p-4">
            <h3 className="mb-4 text-center text-title">Envíame un mensaje</h3>
            {status === 'success' ? (
                <div className="alert alert-success text-center">
                    ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
                </div>
            ) : (
                <form action={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-subtitle">Nombre y Apellido</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control bg-dark text-white border-secondary"
                            placeholder="Tu nombre completo"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label text-subtitle">Mensaje</label>
                        <textarea
                            name="message"
                            id="message"
                            className="form-control bg-dark text-white border-secondary"
                            rows={5}
                            placeholder="¿En qué puedo ayudarte?"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 py-2 fw-bold"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                    {status === 'error' && (
                        <div className="alert alert-danger mt-3">
                            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                        </div>
                    )}
                </form>
            )}

            <div className="mt-5 text-center">
                <h4 className="mb-3 text-title">Contacto Directo</h4>
                <div className="d-flex justify-content-center gap-4 align-items-center">
                    <a
                        href="https://wa.me/5492944249272"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success d-flex align-items-center gap-2 px-4 rounded-pill"
                    >
                        <i className="bi bi-whatsapp fs-4"></i>
                        <span>WhatsApp</span>
                    </a>
                    <a href="mailto:emanueltula89@gmail.com" className="text-subtitle text-decoration-none d-flex align-items-center gap-2">
                        <i className="bi bi-envelope fs-5"></i>
                        <span>emanueltula89@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
