import { motion } from "framer-motion";
import { 
  UserPlus, 
  Search, 
  Handshake, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Registro y Validación",
    description: "Propietarios registran predios, empresas crean perfiles y proveedores se certifican. El CIP Lima valida la información técnica.",
    users: ["Propietarios", "Empresas", "Proveedores"],
  },
  {
    icon: Search,
    title: "Exploración Inteligente",
    description: "Explora el mapa interactivo, revisa beneficios tributarios, requisitos legales y postula proyectos empresariales.",
    users: ["Inversionistas", "Empresas"],
  },
  {
    icon: Sparkles,
    title: "Match Automático",
    description: "Nuestro motor de IA sugiere coincidencias óptimas entre terreno, proyecto y servicios según criterios técnicos.",
    users: ["Todos los usuarios"],
  },
  {
    icon: Handshake,
    title: "Articulación y Negociación",
    description: "Accede a información clara y confiable antes de iniciar cualquier negociación comercial o legal.",
    users: ["Todas las partes"],
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(210 40% 98% / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-4">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            ¿Cómo funciona{" "}
            <span className="text-prosperity">CHANCAY LINK</span>?
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Un proceso simple y transparente que reduce la incertidumbre y acelera 
            los procesos de articulación en la ZEE.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step number */}
                <div className="relative z-10 mb-6 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-2xl bg-card shadow-xl flex items-center justify-center relative"
                  >
                    <step.icon className="w-9 h-9 text-accent" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-prosperity text-prosperity-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 mb-4 text-sm">
                    {step.description}
                  </p>
                  
                  {/* User tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {step.users.map((user) => (
                      <span
                        key={user}
                        className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium"
                      >
                        {user}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 z-20">
                    <ArrowRight className="w-6 h-6 text-accent/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="w-10 h-10 rounded-full bg-prosperity/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-prosperity" />
            </div>
            <p className="text-primary-foreground/80 text-sm text-left max-w-lg">
              <span className="font-semibold">CHANCAY LINK</span> no reemplaza decisiones legales o comerciales, 
              sino que reduce la incertidumbre previa, ordena el ecosistema y acelera los procesos de articulación.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
