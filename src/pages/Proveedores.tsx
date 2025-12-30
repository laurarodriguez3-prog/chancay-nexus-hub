import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Search, Star, MapPin, CheckCircle, Filter } from "lucide-react";
import { useState } from "react";
import { Chatbot } from "@/components/Chatbot";

const categorias = ["Todos", "Ingeniería", "Construcción", "Logística", "Energía", "Ambiente", "TIC"];

const proveedores = [
  {
    id: 1,
    nombre: "IngeStruct Perú",
    categoria: "Ingeniería",
    especialidad: "Diseño estructural y estudios geotécnicos",
    ubicacion: "Lima",
    rating: 4.8,
    proyectos: 45,
    certificado: true
  },
  {
    id: 2,
    nombre: "BuildMaster SAC",
    categoria: "Construcción",
    especialidad: "Construcción industrial y obras civiles",
    ubicacion: "Lima",
    rating: 4.6,
    proyectos: 32,
    certificado: true
  },
  {
    id: 3,
    nombre: "LogiTrans Norte",
    categoria: "Logística",
    especialidad: "Transporte de carga y almacenamiento",
    ubicacion: "Chancay",
    rating: 4.5,
    proyectos: 28,
    certificado: true
  },
  {
    id: 4,
    nombre: "EcoSolar Energy",
    categoria: "Energía",
    especialidad: "Energía solar y eficiencia energética",
    ubicacion: "Lima",
    rating: 4.9,
    proyectos: 18,
    certificado: true
  },
  {
    id: 5,
    nombre: "AmbientPro",
    categoria: "Ambiente",
    especialidad: "Estudios de impacto ambiental",
    ubicacion: "Lima",
    rating: 4.7,
    proyectos: 52,
    certificado: true
  },
  {
    id: 6,
    nombre: "TechConnect Perú",
    categoria: "TIC",
    especialidad: "Infraestructura tecnológica y redes",
    ubicacion: "Lima",
    rating: 4.4,
    proyectos: 15,
    certificado: false
  }
];

const Proveedores = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const proveedoresFiltrados = proveedores.filter(p => {
    const matchCategoria = categoriaActiva === "Todos" || p.categoria === categoriaActiva;
    const matchBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          p.especialidad.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

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
                Proveedores <span className="text-prosperity">Certificados</span>
              </h1>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Conecta con proveedores de servicios especializados validados por el CIP Lima.
              </p>
            </motion.div>

            {/* Buscador */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar proveedores..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Filtros */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {categorias.map((cat) => (
                <Button
                  key={cat}
                  variant={categoriaActiva === cat ? "hero" : "outline"}
                  size="sm"
                  onClick={() => setCategoriaActiva(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Grid de proveedores */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proveedoresFiltrados.map((proveedor, index) => (
                <motion.div
                  key={proveedor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Users className="w-7 h-7 text-accent" />
                    </div>
                    {proveedor.certificado && (
                      <div className="flex items-center gap-1 text-prosperity text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Certificado
                      </div>
                    )}
                  </div>

                  <h3 className="font-semibold text-lg mb-1">{proveedor.nombre}</h3>
                  <span className="inline-block px-2 py-1 rounded-full bg-accent/20 text-accent text-xs mb-3">
                    {proveedor.categoria}
                  </span>
                  <p className="text-muted-foreground text-sm mb-4">{proveedor.especialidad}</p>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {proveedor.ubicacion}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-prosperity fill-prosperity" />
                      <span className="font-medium">{proveedor.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {proveedor.proyectos} proyectos
                    </span>
                    <Button variant="outline" size="sm">
                      Contactar
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {proveedoresFiltrados.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No se encontraron proveedores con esos criterios.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Proveedores;
