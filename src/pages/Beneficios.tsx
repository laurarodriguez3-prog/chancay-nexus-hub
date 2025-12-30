import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Percent, Clock, Shield, Building, Truck, Zap, CheckCircle } from "lucide-react";
import { Chatbot } from "@/components/Chatbot";

const beneficiosTributarios = [
  {
    titulo: "Exoneración del Impuesto a la Renta",
    descripcion: "Exoneración del IR por 15 años para nuevas inversiones dentro de la ZEE.",
    porcentaje: "0%",
    icono: Percent
  },
  {
    titulo: "Suspensión del IGV",
    descripcion: "Suspensión del IGV en importaciones de bienes de capital y materias primas.",
    porcentaje: "0%",
    icono: FileText
  },
  {
    titulo: "Depreciación Acelerada",
    descripcion: "Régimen especial de depreciación para activos fijos.",
    porcentaje: "20%",
    icono: Clock
  },
  {
    titulo: "Aranceles Reducidos",
    descripcion: "Reducción significativa en aranceles de importación.",
    porcentaje: "0%",
    icono: Truck
  }
];

const requisitos = [
  "Inversión mínima de US$ 5 millones en activos fijos",
  "Generación de empleo local (mínimo 20% de trabajadores locales)",
  "Cumplimiento de normativas ambientales",
  "Proyecto compatible con el Plan de Desarrollo de la ZEE",
  "Presentación de Estudio de Impacto Ambiental aprobado",
  "Inscripción en el Registro de Operadores de la ZEE"
];

const ventajas = [
  {
    titulo: "Ubicación Estratégica",
    descripcion: "Acceso directo al megapuerto de Chancay y conexión con Asia-Pacífico.",
    icono: Building
  },
  {
    titulo: "Infraestructura Moderna",
    descripcion: "Servicios básicos garantizados: agua, energía, telecomunicaciones.",
    icono: Zap
  },
  {
    titulo: "Seguridad Jurídica",
    descripcion: "Marco legal estable bajo la Ley N.° 32449.",
    icono: Shield
  }
];

const BeneficiosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Beneficios <span className="text-prosperity">ZEE Chancay</span>
              </h1>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
                Conoce los incentivos tributarios, requisitos legales y ventajas competitivas 
                que ofrece la Zona Económica Especial de Chancay.
              </p>
              <Button variant="hero" size="lg">
                <FileText className="w-5 h-5" />
                Descargar Guía Completa
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Beneficios Tributarios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Incentivos Tributarios</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Beneficios fiscales diseñados para impulsar la inversión y el desarrollo económico.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficiosTributarios.map((beneficio, index) => (
                <motion.div
                  key={beneficio.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-prosperity/50 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-prosperity/20 flex items-center justify-center mb-4">
                    <beneficio.icono className="w-8 h-8 text-prosperity" />
                  </div>
                  <div className="text-3xl font-bold text-prosperity mb-2">{beneficio.porcentaje}</div>
                  <h3 className="font-semibold mb-2">{beneficio.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{beneficio.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Requisitos para Operar</h2>
                <p className="text-muted-foreground mb-8">
                  Para acceder a los beneficios de la ZEE Chancay, las empresas deben cumplir 
                  con los siguientes requisitos establecidos en la Ley N.° 32449.
                </p>
                
                <ul className="space-y-4">
                  {requisitos.map((requisito, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-prosperity flex-shrink-0 mt-0.5" />
                      <span>{requisito}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-6">¿Necesitas asesoría?</h3>
                <p className="text-muted-foreground mb-6">
                  Nuestro equipo técnico validado por el CIP Lima puede ayudarte a evaluar 
                  si tu proyecto cumple con los requisitos de la ZEE.
                </p>
                <Button variant="hero" className="w-full">
                  Solicitar Asesoría Gratuita
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ventajas Competitivas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ventajas Competitivas</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Más allá de los beneficios fiscales, la ZEE Chancay ofrece ventajas únicas.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {ventajas.map((ventaja, index) => (
                <motion.div
                  key={ventaja.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                    <ventaja.icono className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{ventaja.titulo}</h3>
                  <p className="text-muted-foreground">{ventaja.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default BeneficiosPage;
