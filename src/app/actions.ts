"use server";

import { Resend } from 'resend';

const resend = new Resend('re_W6oG34u9_6DFqtQyRL1AtGbDXinWcMsmz');

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <trafulnet@geoarg.com>',
            to: 'emanueltula89@gmail.com',
            subject: `Nuevo mensaje de ${name} desde tu Portfolio`,
            text: `Nombre: ${name}\n\nMensaje:\n${message}`,
        });

        if (error) {
            console.error('Error de Resend:', error);
            return { success: false, error: error.message };
        }

        console.log('Email enviado correctamente:', data);
        return { success: true, data };
    } catch (error: any) {
        console.error('Error inesperado:', error);
        return { success: false, error: error.message || 'Error desconocido' };
    }
}
