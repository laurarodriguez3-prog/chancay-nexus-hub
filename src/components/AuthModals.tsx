import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Lock, Building2, MapPin, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type UserType = "propietario" | "empresa" | "proveedor";

const userTypes = [
  { value: "propietario" as UserType, label: "Propietario de Terreno", icon: MapPin, desc: "Registra tu predio en la ZEE" },
  { value: "empresa" as UserType, label: "Empresa / Inversionista", icon: Building2, desc: "Explora oportunidades de inversión" },
  { value: "proveedor" as UserType, label: "Proveedor de Servicios", icon: Wrench, desc: "Ofrece servicios certificados" },
];

const Overlay = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ type: "spring", damping: 25 }}
      className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10">
        <X className="w-5 h-5" />
      </button>
      {children}
    </motion.div>
  </motion.div>
);

interface AuthModalsProps {
  showLogin: boolean;
  showRegister: boolean;
  onCloseLogin: () => void;
  onCloseRegister: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}

export const AuthModals = ({ showLogin, showRegister, onCloseLogin, onCloseRegister, onSwitchToRegister, onSwitchToLogin }: AuthModalsProps) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regType, setRegType] = useState<UserType | null>(null);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      toast.error("Completa todos los campos");
      return;
    }
    toast.success(`¡Bienvenido de vuelta! Sesión iniciada como ${loginEmail}`);
    setLoginEmail("");
    setLoginPassword("");
    onCloseLogin();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword || !regType) {
      toast.error("Completa todos los campos y selecciona un tipo de usuario");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      toast.success(`¡Registro exitoso! Bienvenido ${regName}`);
      setRegName("");
      setRegEmail("");
      setRegPassword("");
      setRegType(null);
      setSuccess(false);
      onCloseRegister();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {showLogin && (
        <Overlay onClose={onCloseLogin}>
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary mx-auto flex items-center justify-center mb-3">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Iniciar Sesión</h2>
              <p className="text-muted-foreground text-sm mt-1">Accede a CHANCAY NEXUS</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Correo electrónico" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="pl-10" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Contraseña" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="pl-10" />
              </div>
              <Button type="submit" className="w-full" size="lg">Iniciar Sesión</Button>
            </form>
            <p className="text-center text-sm text-muted-foreground mt-4">
              ¿No tienes cuenta?{" "}
              <button onClick={onSwitchToRegister} className="text-primary hover:underline font-medium">Regístrate</button>
            </p>
            <p className="text-center text-xs text-muted-foreground mt-3 opacity-60">🔒 Simulación — sin backend real</p>
          </div>
        </Overlay>
      )}

      {showRegister && (
        <Overlay onClose={onCloseRegister}>
          <div className="p-8 max-h-[90vh] overflow-y-auto">
            {success ? (
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-prosperity mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground">¡Registro Exitoso!</h2>
                <p className="text-muted-foreground mt-2">Redirigiendo...</p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-prosperity mx-auto flex items-center justify-center mb-3">
                    <User className="w-6 h-6 text-prosperity-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Crear Cuenta</h2>
                  <p className="text-muted-foreground text-sm mt-1">Únete al ecosistema CHANCAY NEXUS</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Nombre completo" value={regName} onChange={(e) => setRegName(e.target.value)} className="pl-10" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Correo electrónico" type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} className="pl-10" />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Contraseña" type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} className="pl-10" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Tipo de usuario</p>
                    <div className="space-y-2">
                      {userTypes.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setRegType(t.value)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                            regType === t.value ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <t.icon className={`w-5 h-5 ${regType === t.value ? "text-primary" : "text-muted-foreground"}`} />
                          <div>
                            <p className="text-sm font-medium text-foreground">{t.label}</p>
                            <p className="text-xs text-muted-foreground">{t.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button type="submit" variant="hero" className="w-full" size="lg">Registrarse</Button>
                </form>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  ¿Ya tienes cuenta?{" "}
                  <button onClick={onSwitchToLogin} className="text-primary hover:underline font-medium">Inicia sesión</button>
                </p>
                <p className="text-center text-xs text-muted-foreground mt-3 opacity-60">🔒 Simulación — sin backend real</p>
              </>
            )}
          </div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
