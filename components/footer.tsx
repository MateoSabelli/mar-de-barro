import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Mar de Barro</h4>
            <p className="text-blue-200">
              Cerámica artesanal hecha a mano con amor y dedicación.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="mailto:info@mardebarro.com"
                className="hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white text-blue-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="hover:text-white text-blue-200"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/proceso"
                  className="hover:text-white text-blue-200"
                >
                  Proceso
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-white text-blue-200"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-white text-blue-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/envios" className="hover:text-white text-blue-200">
                  Envíos
                </Link>
              </li>
              <li>
                <Link
                  href="/devoluciones"
                  className="hover:text-white text-blue-200"
                >
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="hover:text-white text-blue-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/cuidados"
                  className="hover:text-white text-blue-200"
                >
                  Cuidado de Productos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Email: info@mardebarro.com</li>
              <li>Teléfono: +54 9 11 1234-5678</li>
              <li>Dirección: Calle Falsa 123, Buenos Aires</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} Mar de Barro. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
