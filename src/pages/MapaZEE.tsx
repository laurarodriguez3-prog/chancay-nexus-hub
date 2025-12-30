import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Filter, Layers, ZoomIn, ZoomOut, Compass, Info } from "lucide-react";
import { useState } from "react";
import { Chatbot } from "@/components/Chatbot";

const terrenos = [
  { id: 1, nombre: "Lote A-12", hectareas: 15, zonificacion: "Industrial", estado: "Disponible", top: "25%", left: "35%" },
  { id: 2, nombre: "Lote B-05", hectareas: 22, zonificacion: "Logístico", estado: "Disponible", top: "40%", left: "55%" },
  { id: 3, nombre: "Lote C-08", hectareas: 8, zonificacion: "Comercial", estado: "En negociación", top: "55%", left: "30%" },
  { id: 4, nombre: "Lote D-03", hectareas: 45, zonificacion: "Industrial", estado: "Disponible", top: "35%", left: "70%" },
  { id: 5, nombre: "Lote E-17", hectareas: 12, zonificacion: "Mixto", estado: "Disponible", top: "65%", left: "60%" },
];

const filtros = ["Todos", "Industrial", "Logístico", "Comercial", "Mixto"];

const MapaZEE = () => {
  const [filtroActivo, setFiltroActivo] = useState("Todos");
  const [terrenoSeleccionado, setTerrenoSeleccionado] = useState<typeof terrenos[0] | null>(null);

  const terrenosFiltrados = filtroActivo === "Todos" 
    ? terrenos 
    : terrenos.filter(t => t.zonificacion === filtroActivo);

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
                Mapa Interactivo <span className="text-prosperity">ZEE Chancay</span>
              </h1>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Explora los terrenos disponibles con información técnica validada, zonificación y viabilidad.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Filtros */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              {filtros.map((filtro) => (
                <Button
                  key={filtro}
                  variant={filtroActivo === filtro ? "hero" : "outline"}
                  size="sm"
                  onClick={() => setFiltroActivo(filtro)}
                >
                  {filtro}
                </Button>
              ))}
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Mapa */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative aspect-[16/10] bg-card border border-border rounded-2xl overflow-hidden"
                >
                  {/* Grid del mapa */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                  />

                  {/* Zona ZEE */}
                  <div className="absolute top-[10%] left-[15%] w-[70%] h-[70%] border-2 border-accent/50 rounded-xl bg-accent/10" />

                  {/* Pins de terrenos */}
                  {terrenosFiltrados.map((terreno) => (
                    <motion.div
                      key={terreno.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                      style={{ top: terreno.top, left: terreno.left }}
                      className="absolute cursor-pointer group"
                      onClick={() => setTerrenoSeleccionado(terreno)}
                    >
                      <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative"
                      >
                        <div className={`w-6 h-6 rounded-full shadow-lg flex items-center justify-center ${
                          terreno.estado === "Disponible" ? "bg-prosperity" : "bg-accent"
                        }`}>
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <div className="absolute inset-0 w-6 h-6 rounded-full bg-prosperity animate-ping opacity-30" />
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-card border border-border rounded-lg px-3 py-2 text-sm whitespace-nowrap shadow-xl">
                            <p className="font-semibold">{terreno.nombre}</p>
                            <p className="text-muted-foreground text-xs">{terreno.hectareas} ha</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Controles del mapa */}
                  <div className="absolute right-4 top-4 flex flex-col gap-2">
                    <Button variant="secondary" size="icon" className="shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="shadow-lg">
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="shadow-lg">
                      <Compass className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="shadow-lg">
                      <Layers className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Leyenda */}
                  <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-prosperity" />
                        <span>Disponible</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-accent" />
                        <span>En negociación</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Panel lateral */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4 text-accent" />
                    {terrenoSeleccionado ? "Detalle del Terreno" : "Selecciona un terreno"}
                  </h3>
                  
                  {terrenoSeleccionado ? (
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Nombre</p>
                        <p className="font-semibold">{terrenoSeleccionado.nombre}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Superficie</p>
                        <p className="font-semibold">{terrenoSeleccionado.hectareas} hectáreas</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Zonificación</p>
                        <p className="font-semibold">{terrenoSeleccionado.zonificacion}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Estado</p>
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          terrenoSeleccionado.estado === "Disponible" 
                            ? "bg-prosperity/20 text-prosperity" 
                            : "bg-accent/20 text-accent"
                        }`}>
                          {terrenoSeleccionado.estado}
                        </span>
                      </div>
                      <Button variant="hero" className="w-full mt-4">
                        Solicitar información
                      </Button>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Haz clic en cualquier marcador del mapa para ver los detalles del terreno.
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="bg-card border border-border rounded-xl p-4">
                  <h4 className="font-semibold mb-3">Resumen ZEE</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total terrenos</span>
                      <span className="font-semibold">{terrenos.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Disponibles</span>
                      <span className="font-semibold text-prosperity">
                        {terrenos.filter(t => t.estado === "Disponible").length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hectáreas totales</span>
                      <span className="font-semibold">
                        {terrenos.reduce((acc, t) => acc + t.hectareas, 0)} ha
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default MapaZEE;
