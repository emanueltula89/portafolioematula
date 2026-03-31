// src/components/Hero.tsx
import { personalData } from "@/data/personal";

interface HeroProps {
  isPrintable?: boolean;
}

const Hero = ({ isPrintable = false }: HeroProps) => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center text-center position-relative" style={{ minHeight: isPrintable ? 'auto' : '40vh', paddingTop: isPrintable ? '0' : '40px' }}>
      <div className="container z-1">
        <h1 className="display-4 fw-bold mb-3 text-title" style={{ textShadow: "0 0 10px var(--primary-color)" }}>
          &gt; {personalData.name.toUpperCase()} <span className="cursor-blink">_</span>
        </h1>
        <p className="lead fs-4 mb-2 text-subtitle" style={{ letterSpacing: "2px" }}>
          [ ROLE: {personalData.title.toUpperCase()} ]
        </p>
        <p className="fs-5 text-primary mt-3">
          <span className="badge border border-primary text-primary rounded-0 me-2" style={{ backgroundColor: 'transparent' }}>STATUS: ONLINE</span>
          <span className="badge border border-primary text-primary rounded-0" style={{ backgroundColor: 'transparent' }}>CLEARANCE: LEVEL 5</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
