// src/components/Hero.tsx
import { personalData } from "@/data/personal";

interface HeroProps {
  isPrintable?: boolean;
}

const Hero = ({ isPrintable = false }: HeroProps) => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center text-center" style={{ minHeight: isPrintable ? 'auto' : '60vh', paddingTop: isPrintable ? '0' : '80px' }}>
      <div className="container">
        <h1 className="display-3 fw-bold mb-3 text-title">
          {personalData.name}
        </h1>
        <p className="lead fs-3 mb-2 text-subtitle">
          {personalData.title}
        </p>
        <p className="fs-4 text-subtitle fst-italic">
          "Tecnología de Información"
        </p>
      </div>
    </section>
  );
};

export default Hero;
