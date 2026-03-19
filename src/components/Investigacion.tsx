// src/components/Investigacion.tsx
import { investigacionData } from "@/data/investigacion";

const Investigacion = () => {
  return (
    <section id="investigacion" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Investigación y Extensión</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="list-group list-group-flush">
              {investigacionData.map((item, index) => (
                <div key={index} className="list-group-item p-4 border-bottom">
                  <p className="mb-1 fw-medium lead text-white" style={{ fontSize: '1.1rem' }}>{item.description}</p>
                  <small className="fw-bold text-secondary">
                    {item.institution} {item.year && <span className="text-white-50 fw-bold">• {item.year}</span>}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investigacion;
