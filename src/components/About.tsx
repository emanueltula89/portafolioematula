// src/components/About.tsx
import { aboutData } from "@/data/about";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="mb-4">Sobre Mí</h2>
            <p className="text-secondary fs-5 lh-lg">
              {aboutData.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
