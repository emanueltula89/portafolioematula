import Link from 'next/link';
import { personalData } from '@/data/personal';

const Navbar = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link href="#hero" className="navbar-brand text-title">
          {personalData.name}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <a href="#contact" className="btn btn-primary btn-sm text-white px-4 rounded-pill">Contacto</a>
            </li>
            <li className="nav-item">
              <button onClick={handlePrint} className="btn btn-outline-light btn-sm px-4 rounded-pill">
                <i className="bi bi-file-earmark-pdf me-2"></i>Descargar CV
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
