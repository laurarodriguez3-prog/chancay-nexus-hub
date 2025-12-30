import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Mapa Interactivo", href: "#" },
    { label: "Postular Proyecto", href: "#" },
    { label: "Proveedores", href: "#" },
    { label: "Beneficios ZEE", href: "#" },
  ],
  resources: [
    { label: "Ley N.° 32449", href: "#" },
    { label: "Guía del Usuario", href: "#" },
    { label: "Preguntas Frecuentes", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Términos de Uso", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Aviso Legal", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-prosperity flex items-center justify-center">
                <span className="text-prosperity-foreground font-bold text-xl">CL</span>
              </div>
              <div>
                <span className="text-xl font-bold">CHANCAY LINK</span>
                <p className="text-xs text-primary-foreground/60">Hub Inteligente ZEE</p>
              </div>
            </motion.div>
            
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Plataforma de articulación inteligente para la Zona Económica Especial de Chancay, 
              validada por el CIP Lima.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Lima, Perú - ZEE Chancay</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>contacto@chancaylink.pe</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>+51 1 XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-prosperity transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-prosperity transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-prosperity transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 CHANCAY LINK. Todos los derechos reservados.
          </p>
          
          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-prosperity hover:text-prosperity-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
