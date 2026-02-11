import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Star, TrendingUp, Building2, ArrowRight, Heart, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const allTerrenos = [
  { id: 1, nombre: "Lote A-12", hectareas: 15, zonificacion: "Industrial", estado: "Disponible", precio: "$180,000", compatibilidad: 95 },
  { id: 2, nombre: "Lote B-05", hectareas: 22, zonificacion: "Logístico", estado: "Disponible", precio: "$320,000", compatibilidad: 88 },
  { id: 3, nombre: "Lote C-08", hectareas: 8, zonificacion: "Comercial", estado: "En negociación", precio: "$95,000", compatibilidad: 72 },
  { id: 4, nombre: "Lote D-03", hectareas: 45, zonificacion: "Industrial", estado: "Disponible", precio: "$540,000", compatibilidad: 91 },
  { id: 5, nombre: "Lote E-17", hectareas: 12, zonificacion: "Mixto", estado: "Disponible", precio: "$150,000", compatibilidad: 84 },
  { id: 6, nombre: "Lote F-21", hectareas: 30, zonificacion: "Industrial", estado: "Disponible", precio: "$390,000", compatibilidad: 78 },
];

const recomendaciones: Record<string, { titulo: string; descripcion: string; icono: typeof Star }[]> = {
  empresa: [
    { titulo: "Lotes industriales de alta capacidad", descripcion: "Basado en tu perfil, te recomendamos terrenos de +20 ha con zonificación industrial.", icono: Building2 },
    { titulo: "Incentivos tributarios activos", descripcion: "Puedes acceder a exoneración de IR por 10 años en la ZEE.", icono: TrendingUp },
    { titulo: "Proveedores certificados disponibles", descripcion: "12 proveedores de construcción industrial verificados cerca de tus lotes.", icono: Star },
  ],
  propietario: [
    { titulo: "Valorización de tu terreno", descripcion: "Tu predio podría aumentar 3x su valor con la zonificación ZEE.", icono: TrendingUp },
    { titulo: "Empresas interesadas en tu zona", descripcion: "5 empresas buscan terrenos similares al tuyo.", icono: Building2 },
    { titulo: "Documentación requerida", descripcion: "Completa tu expediente técnico para mayor visibilidad.", icono: Star },
  ],
  proveedor: [
    { titulo: "Proyectos activos en la ZEE", descripcion: "8 proyectos nuevos buscan servicios en tu categoría.", icono: Building2 },
    { titulo: "Certificación CIP pendiente", descripcion: "Completa tu verificación para aparecer en el directorio oficial.", icono: Star },
    { titulo: "Oportunidades de licitación", descripcion: "3 licitaciones abiertas para proveedores certificados.", icono: TrendingUp },
  ],
};

const Dashboard = () => {
  const { user } = useAuth();
  const [favoritos, setFavoritos] = useState<number[]>([]);

  if (!user) return <Navigate to="/" replace />;

  const terrenosOrdenados = [...allTerrenos].sort((a, b) => b.compatibilidad - a.compatibilidad);
  const topMatches = terrenosOrdenados.slice(0, 3);
  const recs = recomendaciones[user.type] || recomendaciones.empresa;

  const toggleFavorito = (id: number) => {
    setFavoritos(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Welcome */}
        <section className="bg-gradient-hero py-10">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                ¡Bienvenido, <span className="text-prosperity">{user.name}</span>!
              </h1>
              <p className="text-primary-foreground/70">
                Panel de {user.type === "empresa" ? "Empresa / Inversionista" : user.type === "propietario" ? "Propietario" : "Proveedor"} — Tus matches y recomendaciones personalizadas
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Top Matches */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-prosperity" />
                    Top Matches para ti
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {topMatches.map((terreno, i) => (
                      <motion.div
                        key={terreno.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-prosperity/20 text-prosperity">
                            {terreno.compatibilidad}% match
                          </span>
                          <button onClick={() => toggleFavorito(terreno.id)} className="text-muted-foreground hover:text-prosperity transition-colors">
                            <Heart className={`w-4 h-4 ${favoritos.includes(terreno.id) ? "fill-prosperity text-prosperity" : ""}`} />
                          </button>
                        </div>
                        <h3 className="font-semibold text-foreground">{terreno.nombre}</h3>
                        <p className="text-sm text-muted-foreground">{terreno.hectareas} ha — {terreno.zonificacion}</p>
                        <p className="text-sm font-semibold text-prosperity mt-1">{terreno.precio}</p>
                        <span className={`inline-flex mt-2 px-2 py-0.5 rounded-full text-xs ${
                          terreno.estado === "Disponible" ? "bg-prosperity/20 text-prosperity" : "bg-accent/20 text-accent"
                        }`}>
                          {terreno.estado}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Todos los terrenos */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      Todos los terrenos
                    </h2>
                    <Link to="/mapa-zee">
                      <Button variant="outline" size="sm" className="gap-1">
                        Ver en mapa <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {terrenosOrdenados.map((terreno, i) => (
                      <motion.div
                        key={terreno.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:border-accent/30 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{terreno.nombre}</p>
                            <p className="text-sm text-muted-foreground">{terreno.hectareas} ha — {terreno.zonificacion}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-prosperity">{terreno.compatibilidad}%</span>
                          <span className="text-sm font-semibold text-foreground">{terreno.precio}</span>
                          <button onClick={() => toggleFavorito(terreno.id)} className="text-muted-foreground hover:text-prosperity transition-colors">
                            <Heart className={`w-4 h-4 ${favoritos.includes(terreno.id) ? "fill-prosperity text-prosperity" : ""}`} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar: Recomendaciones */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 text-prosperity" />
                  Recomendaciones
                </h2>
                {recs.map((rec, i) => (
                  <motion.div
                    key={rec.titulo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-card border border-border rounded-xl p-4 hover:border-prosperity/30 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-prosperity/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <rec.icono className="w-4 h-4 text-prosperity" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{rec.titulo}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{rec.descripcion}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Favoritos */}
                {favoritos.length > 0 && (
                  <div className="bg-card border border-border rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-prosperity" /> Tus Favoritos
                    </h3>
                    <div className="space-y-2">
                      {allTerrenos.filter(t => favoritos.includes(t.id)).map(t => (
                        <div key={t.id} className="flex items-center justify-between text-sm">
                          <span className="text-foreground">{t.nombre}</span>
                          <span className="text-prosperity font-medium">{t.compatibilidad}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

export default Dashboard;
