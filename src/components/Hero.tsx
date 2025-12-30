import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full border border-accent/20 opacity-30"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-[5%] w-96 h-96 rounded-full border border-prosperity/20 opacity-20"
        />
        
        {/* Wave pattern at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg
            className="absolute bottom-0 w-[200%] animate-wave"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
              fill="hsl(210 40% 98% / 0.1)"
            />
          </svg>
        </div>
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(210 40% 98% / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(210 40% 98% / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/80 text-sm font-medium">
                Validado por CIP Lima
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Hub Inteligente para la{" "}
              <span className="text-prosperity">ZEE Chancay</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Conectamos propietarios de terrenos, inversionistas y proveedores de servicios 
              con información técnica validada para acelerar el desarrollo de la Zona Económica Especial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <MapPin className="w-5 h-5" />
                Explorar Mapa ZEE
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "2,500+", label: "Hectáreas disponibles" },
                { value: "150+", label: "Proveedores certificados" },
                { value: "85%", label: "Reducción en tiempos" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-prosperity">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/30 to-prosperity/20 blur-3xl animate-pulse-glow" />
              
              {/* Map card */}
              <div className="relative glass-card rounded-3xl p-6 glow-accent">
                {/* Map placeholder with animated points */}
                <div className="aspect-square rounded-2xl bg-primary/30 overflow-hidden relative">
                  {/* Simulated map grid */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(hsl(175 70% 40% / 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(175 70% 40% / 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px'
                    }}
                  />
                  
                  {/* Animated location pins */}
                  {[
                    { top: "20%", left: "30%", delay: 0 },
                    { top: "40%", left: "60%", delay: 0.2 },
                    { top: "60%", left: "25%", delay: 0.4 },
                    { top: "35%", left: "75%", delay: 0.6 },
                    { top: "70%", left: "55%", delay: 0.8 },
                  ].map((pin, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 + pin.delay, duration: 0.5, type: "spring" }}
                      style={{ top: pin.top, left: pin.left }}
                      className="absolute"
                    >
                      <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity, delay: pin.delay }}
                        className="relative"
                      >
                        <div className="w-4 h-4 rounded-full bg-prosperity shadow-lg" />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-prosperity animate-ping opacity-50" />
                      </motion.div>
                    </motion.div>
                  ))}
                  
                  {/* Zone overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute top-[15%] left-[20%] w-[60%] h-[50%] border-2 border-accent/50 rounded-xl bg-accent/10"
                  />
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 right-4 bg-primary/80 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between text-xs text-primary-foreground/80">
                      <span>ZEE Chancay</span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-prosperity" />
                        Terrenos disponibles
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Card footer */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-primary-foreground/70">
                    <span className="text-prosperity font-semibold">12</span> terrenos visibles
                  </div>
                  <Button variant="accent" size="sm">
                    Ver todos
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
