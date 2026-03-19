// src/components/Academic.tsx
import { academicData } from "@/data/academic";

const Academic = () => {
  return (
    <section id="academic" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Antecedentes Académicos</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              {academicData.map((item, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <p className="mb-2 fw-medium text-white">{item.description}</p>
                      <small className="text-secondary d-block">
                        {item.institution}
                      </small>
                      {item.year && <small className="text-white-50 fw-bold mt-1 d-block">{item.year}</small>}
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

export default Academic;
