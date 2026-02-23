// src/components/Experience.tsx
import { experienceData } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Experiencia Laboral</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experienceData.map((job, index) => (
              <div key={index} className="experience-item">
                <h4 className="h5 mb-1 text-title">{job.company}</h4>
                <p className="fw-bold mb-1">{job.position}</p>
                <small className="text-muted d-block mb-2">{job.dates}</small>
                <ul className="text-secondary ps-3">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp.description}</li>
                  ))}
                </ul>
                {job.platform && (
                  <a href={job.platform} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary mt-2">
                    Ver Plataforma
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
