"use client";

import { useState } from 'react';
import TabsContainer from '@/components/TabsContainer';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import PrintableCV from '@/components/PrintableCV';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (password: string) => {
    if (password === '123') {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return <Login onAuthenticate={handleAuthentication} />;
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <TabsContainer />
      <Footer />

      {/* Componente oculto para impresión - Mantenido fuera de elementos ocultos */}
      <div className="printable-cv-wrapper">
        <PrintableCV />
      </div>
    </main>
  );
}
