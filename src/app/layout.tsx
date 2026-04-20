import "./globals.css";
import { MainNavbar } from "../components/navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body className="min-h-full flex flex-col">
        <header>
          <MainNavbar />
        </header>
        <main className="flex-grow">{children}</main>
        <SpeedInsights />
        <footer className="min-h-[400px] bg-[#1A1A1A] text-white w-full mt-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Columna 1: Logo o Marca */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-secondary italic">
                ADIPA
              </h2>
              <p className="text-gray-400 text-sm">
                Transformando la educación en salud mental y psicología.
              </p>
            </div>

            {/* Columna 2: Links simulados */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Cursos</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li className="hover:text-white cursor-pointer">Diplomados</li>
                <li className="hover:text-white cursor-pointer">Postítulos</li>
                <li className="hover:text-white cursor-pointer">Seminarios</li>
              </ul>
            </div>

            {/* Columna 3: Más links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Nosotros</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li className="hover:text-white cursor-pointer">
                  Quiénes somos
                </li>
                <li className="hover:text-white cursor-pointer">
                  Preguntas frecuentes
                </li>
                <li className="hover:text-white cursor-pointer">Contacto</li>
              </ul>
            </div>

            {/* Columna 4: Newsletter o Redes */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Síguenos</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">
                  f
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">
                  ig
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">
                  in
                </div>
              </div>
            </div>
          </div>

          {/* Barra inferior de Copyright */}
          <div className="border-t border-white/5 py-8">
            <p className="text-center text-gray-500 text-xs">
              © 2026 Adipa S.A.S. - Hecho con 💜 para el mundo.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
