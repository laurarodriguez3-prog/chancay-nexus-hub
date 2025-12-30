import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, FileText, CheckCircle, Clock, ArrowRight, Plus } from "lucide-react";
import { Chatbot } from "@/components/Chatbot";

const proyectos = [
  {
    id: 1,
    nombre: "Centro Logístico Pacífico",
    empresa: "LogiPeru S.A.C.",
    tipo: "Logístico",
    estado: "En evaluación",
    progreso: 65,
    fecha: "15 Dic 2024"
  },
  {
    id: 2,
    nombre: "Planta Industrial Norte",
    empresa: "Industrias Globales",
    tipo: "Industrial",
    estado: "Aprobado",
    progreso: 100,
    fecha: "10 Dic 2024"
  },
  {
    id: 3,
    nombre: "Hub Tecnológico Chancay",
    empresa: "TechZone Perú",
    tipo: "Tecnológico",
    estado: "En revisión",
    progreso: 40,
    fecha: "20 Dic 2024"
  },
  {
    id: 4,
    nombre: "Terminal de Carga Seca",
    empresa: "Cargas del Norte",
    tipo: "Portuario",
    estado: "En evaluación",
    progreso: 55,
    fecha: "18 Dic 2024"
  }
];

const Proyectos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Proyectos <span className="text-prosperity">ZEE Chancay</span>
              </h1>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Postula tu proyecto empresarial y accede a evaluación técnica, normativa y ambiental.
              </p>
            </motion.div>

            <div className="flex justify-center">
              <Button variant="hero" size="lg">
                <Plus className="w-5 h-5" />
                Postular Nuevo Proyecto
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: "Proyectos activos", value: "24", icon: Building2 },
                { label: "En evaluación", value: "12", icon: Clock },
                { label: "Aprobados", value: "8", icon: CheckCircle },
                { label: "Inversión estimada", value: "$45M", icon: FileText },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="text-2xl font-bold text-prosperity">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Lista de proyectos */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Proyectos Recientes</h2>
              
              {proyectos.map((proyecto, index) => (
                <motion.div
                  key={proyecto.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{proyecto.nombre}</h3>
                        <p className="text-muted-foreground text-sm">{proyecto.empresa}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-xs">
                            {proyecto.tipo}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            proyecto.estado === "Aprobado" 
                              ? "bg-prosperity/20 text-prosperity"
                              : proyecto.estado === "En evaluación"
                              ? "bg-accent/20 text-accent"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {proyecto.estado}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end gap-2">
                      <p className="text-sm text-muted-foreground">{proyecto.fecha}</p>
                      
                      {/* Barra de progreso */}
                      <div className="w-full md:w-48">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progreso</span>
                          <span>{proyecto.progreso}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-accent to-prosperity rounded-full transition-all"
                            style={{ width: `${proyecto.progreso}%` }}
                          />
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="mt-2">
                        Ver detalle
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
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

export default Proyectos;
