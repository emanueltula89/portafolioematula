// src/components/Projects.tsx
import { projectsData } from "@/data/projects";

const Projects = () => {
  if (projectsData.length === 0) return null;

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="row">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm transition-hover">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{project.name}</h5>
                  <p className="card-text flex-grow-1 text-white">{project.description}</p>
                  <div className="d-flex gap-2 mt-3">
                    {project.link && (
                      <button
                        className="btn btn-primary btn-sm rounded-pill px-4"
                        onClick={(e) => {
                          if (project.link?.startsWith('#')) {
                            const tabName = project.link.replace('#', '');
                            // Si el link es un ancla, disparamos evento para el TabsContainer
                            window.dispatchEvent(new CustomEvent('switchTab', { detail: 'contact' }));
                          } else {
                            window.open(project.link, '_blank');
                          }
                        }}
                      >
                        {project.buttonText || 'Ver Proyecto'}
                      </button>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-pill px-4">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
