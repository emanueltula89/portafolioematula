// src/components/Congresos.tsx
import { congresosData } from "@/data/congresos";

const Congresos = () => {
  return (
    <section id="congresos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Congresos y Ponencias</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="list-group list-group-flush">
              {congresosData.map((item, index) => (
                <div key={index} className="list-group-item d-flex justify-content-between align-items-center p-4 border-bottom">
                  <div className="me-auto">
                    <div className="fw-medium mb-1 text-white">{item.description}</div>
                    <small className="text-secondary">
                      {item.institution} {item.year && <span className="text-white-50 fw-bold">• {item.year}</span>}
                    </small>
                  </div>
                  <span className={`badge rounded-pill ${item.type === 'Expositor' ? 'bg-primary text-white' : 'bg-secondary text-white'} ms-3 px-3 py-2 border`}>
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Congresos;
