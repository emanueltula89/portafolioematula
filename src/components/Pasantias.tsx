// src/components/Pasantias.tsx
import { pasantiasData } from "@/data/pasantias";

const Pasantias = () => {
  return (
    <section id="pasantias" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Pasantías</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              {pasantiasData.map((item, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <p className="mb-2 fw-medium text-title">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <small className="text-muted">{item.institution}</small>
                        <span className="badge bg-primary rounded-pill">{item.year}</span>
                      </div>
                    </div>
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

export default Pasantias;
