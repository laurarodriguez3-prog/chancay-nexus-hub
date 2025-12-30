import { motion } from "framer-motion";
import { 
  MapPin, 
  Building2, 
  Users, 
  FileText, 
  Brain, 
  BarChart3,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MapPin,
    title: "Mapa Interactivo ZEE",
    description: "Explora terrenos disponibles con información técnica, zonificación, uso permitido y viabilidad en tiempo real.",
    highlights: ["Datos georreferenciados", "Filtros avanzados", "Información técnica validada"],
    color: "accent"
  },
  {
    icon: Building2,
    title: "Postulación de Proyectos",
    description: "Evalúa la compatibilidad técnica, normativa y ambiental de tu proyecto empresarial con cada predio disponible.",
    highlights: ["Evaluación automática", "Cumplimiento Ley N.° 32449", "Análisis ambiental"],
    color: "prosperity"
  },
  {
    icon: Users,
    title: "Red de Proveedores",
    description: "Conecta con proveedores de servicios certificados en ingeniería, construcción, energía, logística y más.",
    highlights: ["Proveedores verificados", "Múltiples categorías", "Ratings y reviews"],
    color: "accent"
  },
  {
    icon: FileText,
    title: "Beneficios Tributarios",
    description: "Visualiza los incentivos fiscales, requisitos legales y beneficios aplicables a la ZEE de forma clara.",
    highlights: ["Incentivos actualizados", "Requisitos claros", "Guía paso a paso"],
    color: "prosperity"
  },
  {
    icon: Brain,
    title: "Match Inteligente",
    description: "Nuestro motor de IA conecta propietarios, empresas y proveedores según criterios técnicos y de sostenibilidad.",
    highlights: ["Algoritmo avanzado", "Recomendaciones personalizadas", "Optimización automática"],
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "Panel Informativo",
    description: "Accede a datos actualizados de la ZEE para la toma de decisiones estratégicas e informadas.",
    highlights: ["KPIs en tiempo real", "Reportes descargables", "Análisis predictivo"],
    color: "prosperity"
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-prosperity/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Todo lo que necesitas en{" "}
            <span className="text-gradient-ocean">un solo lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CHANCAY LINK centraliza información clave y ordena la oferta y demanda 
            dentro de la ZEE, reduciendo riesgos y acelerando la toma de decisiones.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                  feature.color === 'accent' 
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-prosperity/10 text-prosperity'
                }`}>
                  <feature.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-5">
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                        feature.color === 'accent' ? 'text-accent' : 'text-prosperity'
                      }`} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Hover action */}
                <div className="mt-6 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-accent hover:text-accent">
                    Saber más
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
