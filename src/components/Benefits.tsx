import { motion } from "framer-motion";
import { 
  TrendingDown, 
  Clock, 
  Shield, 
  Globe2,
  Leaf,
  Award
} from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reducción de Costos",
    stat: "-60%",
    description: "Menos costos de transacción y búsqueda de información",
  },
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    stat: "85%",
    description: "Reducción en tiempos de evaluación y toma de decisiones",
  },
  {
    icon: Shield,
    title: "Información Validada",
    stat: "100%",
    description: "Datos técnicos verificados por el CIP Lima",
  },
  {
    icon: Globe2,
    title: "Alcance Internacional",
    stat: "+50",
    description: "Países con acceso a oportunidades en la ZEE",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    stat: "ESG",
    description: "Criterios ambientales y sociales integrados",
  },
  {
    icon: Award,
    title: "Cumplimiento Legal",
    stat: "Ley 32449",
    description: "Alineado con el marco normativo vigente",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-prosperity/10 text-prosperity text-sm font-medium mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Impacto real para{" "}
            <span className="text-prosperity">todos los actores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra plataforma genera valor medible para propietarios, empresas, 
            inversionistas y proveedores de la ZEE Chancay.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-prosperity/30 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-prosperity/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Icon and stat */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-prosperity/10 flex items-center justify-center text-prosperity group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-prosperity">
                        {benefit.stat}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
