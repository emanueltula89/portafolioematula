// src/components/Publicaciones.tsx
import { publicacionesData } from "@/data/publicaciones";

const Publicaciones = () => {
  return (
    <section id="publicaciones" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Publicaciones</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="list-group list-group-flush">
              {publicacionesData.map((item, index) => (
                <div key={index} className="list-group-item p-4 border-bottom">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                    <div className="mb-3 mb-md-0 me-md-4">
                      <p className="mb-1 fw-bold text-white">{item.title}</p>
                      <small className="text-secondary">
                        {item.venue} <span className="text-white-50 fw-bold">• {item.year}</span>
                      </small>
                    </div>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary flex-shrink-0">
                        Ver Publicación
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publicaciones;
