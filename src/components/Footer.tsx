// src/components/Footer.tsx
import { personalData } from "@/data/personal";

const Footer = () => {
  return (
    <footer id="contact" className="py-5 border-top">
      <div className="container text-center">
        <h4 className="mb-4">Contacto</h4>
        <p className="text-secondary mb-3">
          ¿Interesado en trabajar juntos? Envíame un correo.
        </p>
        <a href={`mailto:${personalData.email}`} className="btn btn-primary mb-4 px-4 py-2">
          {personalData.email}
        </a>
        <div className="d-flex justify-content-center gap-4 mb-4">

          {personalData.linkedin &&
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary fs-5 hover-primary">
              LinkedIn
            </a>
          }
        </div>
        <small className="text-muted d-block">&copy; {new Date().getFullYear()} {personalData.name}. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
