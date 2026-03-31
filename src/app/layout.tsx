import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import BootstrapClient from "@/components/BootstrapClient";

const techMono = Share_Tech_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Ema Tula - OSINT",
  description: "Portafolio profesional y currículum dinámico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={techMono.className}>
        <div className="scanlines"></div>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
