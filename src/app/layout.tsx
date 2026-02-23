import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Ema Tula",
  description: "Portafolio profesional y currículum dinámico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
