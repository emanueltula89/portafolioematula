// src/components/Skills.tsx
import { skillsData } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Habilidades Tecnológicas</h2>
        <div className="row justify-content-center">
          {skillsData.map((category, catIndex) => (
            <div key={catIndex} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3 border-bottom pb-2 text-title">{category.category}</h5>
                  <ul className="list-unstyled">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-2 d-flex align-items-start">
                        <span className="text-primary me-2">•</span>
                        <div>
                          <span className="fw-medium">
                            {typeof item === 'string' ? item : item.name}
                          </span>
                          {typeof item !== 'string' && item.description && (
                            <small className="d-block text-muted">
                              {item.description}
                            </small>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
