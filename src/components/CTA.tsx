import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Users, ArrowRight } from "lucide-react";

const userTypes = [
  {
    icon: MapPin,
    title: "Propietarios",
    description: "Registra tu terreno y conecta con inversionistas calificados",
    cta: "Registrar Predio",
  },
  {
    icon: Building2,
    title: "Empresas",
    description: "Explora oportunidades y postula proyectos en la ZEE",
    cta: "Explorar Oportunidades",
  },
  {
    icon: Users,
    title: "Proveedores",
    description: "Certifícate y ofrece servicios especializados",
    cta: "Certificarse",
  },
];

export const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/5 via-prosperity/5 to-transparent blur-3xl" />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comienza hoy con{" "}
            <span className="text-gradient-ocean">CHANCAY LINK</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Únete al ecosistema de desarrollo más importante del Perú. 
            Elige tu perfil y empieza a conectar.
          </p>
        </motion.div>

        {/* User Type Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {userTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full p-8 rounded-3xl bg-gradient-hero text-primary-foreground relative overflow-hidden group"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <type.icon className="w-8 h-8 text-prosperity" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                  <p className="text-primary-foreground/70 mb-8">{type.description}</p>

                  {/* CTA */}
                  <Button variant="hero" className="w-full group/btn">
                    {type.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            ¿Tienes preguntas? Contáctanos
          </p>
          <Button variant="outline" size="lg">
            Hablar con un especialista
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
