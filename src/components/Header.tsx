import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Users, FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Mapa ZEE", icon: MapPin, href: "/mapa-zee" },
  { label: "Proyectos", icon: Building2, href: "/proyectos" },
  { label: "Proveedores", icon: Users, href: "/proveedores" },
  { label: "Beneficios", icon: FileText, href: "/beneficios" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-hero"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-prosperity flex items-center justify-center">
                <span className="text-prosperity-foreground font-bold text-lg">CN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary-foreground font-bold text-lg leading-tight">CHANCAY</span>
                <span className="text-accent text-xs font-medium tracking-wider">NEXUS</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link to={item.href}>
                  <Button 
                    variant="nav" 
                    size="sm" 
                    className={`gap-2 ${location.pathname === item.href ? "bg-primary-foreground/20" : ""}`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="heroOutline" size="sm">
              Iniciar Sesión
            </Button>
            <Button variant="hero" size="sm">
              Registrarse
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="nav"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="nav" 
                    className={`w-full justify-start gap-3 ${location.pathname === item.href ? "bg-primary-foreground/20" : ""}`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="flex gap-2 mt-4">
                <Button variant="heroOutline" size="sm" className="flex-1">
                  Iniciar Sesión
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  Registrarse
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
