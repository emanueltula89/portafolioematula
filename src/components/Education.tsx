// src/components/Education.tsx
import { educationData } from "@/data/education";

const Education = () => {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Educación</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {educationData.map((edu, index) => (
              <div key={index} className="d-flex flex-column flex-md-row justify-content-between align-items-center border-bottom py-4">
                <div className="text-center text-md-start mb-2 mb-md-0">
                  <h4 className="h5 fw-bold mb-1 text-title">{edu.institution}</h4>
                  <p className="fw-bold mb-0">{edu.degree}</p>
                </div>
                <span className="badge bg-dark text-white rounded-pill px-3 py-2 border border-secondary">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
