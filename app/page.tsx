import Link from "next/link"
import { Phone, Mail, Clock, Shield, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Cdib Lab</h1>
            <p className="text-sm text-gray-600">Servicios Profesionales de Laboratorio</p>
          </div>
          <nav className="flex gap-4 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
              Inicio
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados Precisos, Atención Confiable</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Laboratorio líder en análisis clínicos que ofrece servicios de diagnóstico integral con tecnología de
            vanguardia y profesionales certificados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Agendar Examen
            </Link>
            <Link
              href="#services"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Certificada</h3>
              <p className="text-gray-600">
                Laboratorio certificado ISO con estrictos estándares de control de calidad
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados Rápidos</h3>
              <p className="text-gray-600">Tiempos de entrega rápidos sin comprometer la precisión</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipo Experto</h3>
              <p className="text-gray-600">Profesionales experimentados y técnicos certificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Servicios integrales de análisis de laboratorio para proveedores de salud y pacientes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Análisis de Sangre</h3>
              <p className="text-gray-600 text-sm">
                Hemograma completo, paneles de química y exámenes especializados de sangre
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Microbiología</h3>
              <p className="text-gray-600 text-sm">
                Cultivos bacterianos, pruebas de sensibilidad y diagnóstico de infecciones
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Inmunología</h3>
              <p className="text-gray-600 text-sm">
                Pruebas de alergia, marcadores autoinmunes y evaluación del sistema inmune
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Análisis Molecular</h3>
              <p className="text-gray-600 text-sm">Pruebas PCR, análisis genético y diagnósticos moleculares</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Patología</h3>
              <p className="text-gray-600 text-sm">Análisis de tejidos, citología y examen histopatológico</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Toxicología</h3>
              <p className="text-gray-600 text-sm">Detección de drogas, monitoreo terapéutico y detección de toxinas</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Acerca de Cdib Lab</h2>
              <p className="text-gray-600 mb-4">
                Con más de 15 años de experiencia en diagnósticos clínicos, Cdib Lab ha estado sirviendo a proveedores
                de salud y pacientes con resultados de laboratorio precisos y confiables.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestras instalaciones de última generación están equipadas con la tecnología más avanzada y cuentan con
                profesionales de laboratorio certificados comprometidos con la excelencia en el cuidado del paciente.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Laboratorio Certificado ISO 15189</span>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Instalación Acreditada CLIA</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">¿Por Qué Elegirnos?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Análisis de emergencia disponible 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Entrega electrónica de resultados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Seguros médicos aceptados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Múltiples sitios de recolección</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Agendar tu Examen?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contáctanos hoy para programar tus análisis de laboratorio o conocer más sobre nuestros servicios.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-block"
          >
            Comenzar
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cdib Lab</h3>
              <p className="text-gray-400 mb-4">
                Servicios profesionales de laboratorio en los que puedes confiar para obtener resultados diagnósticos
                precisos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Servicios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Información de Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@cdiblab.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cdib Lab. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
