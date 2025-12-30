import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const respuestasBot: Record<string, string> = {
  "hola": "¡Hola! Soy el asistente virtual de CHANCAY NEXUS. ¿En qué puedo ayudarte hoy?",
  "beneficios": "La ZEE Chancay ofrece múltiples beneficios: exoneración del IR por 15 años, suspensión del IGV en importaciones, y depreciación acelerada. ¿Te gustaría más detalles sobre algún beneficio específico?",
  "terrenos": "Contamos con más de 2,500 hectáreas disponibles en diferentes zonificaciones: industrial, logístico, comercial y mixto. Puedes explorar el mapa interactivo para ver las opciones disponibles.",
  "requisitos": "Los principales requisitos son: inversión mínima de US$ 5 millones, generación de empleo local (20%), cumplimiento ambiental y compatibilidad con el Plan de Desarrollo ZEE.",
  "proveedores": "Tenemos más de 150 proveedores certificados en áreas como ingeniería, construcción, logística, energía y ambiente. Todos validados por el CIP Lima.",
  "contacto": "Puedes contactarnos en contacto@chancaynexus.pe o llamar al +51 1 XXX XXXX. También puedes registrarte en la plataforma para acceder a más información.",
  "default": "Gracias por tu consulta. Para información más específica, te recomiendo explorar las secciones de Mapa ZEE, Proyectos, Proveedores o Beneficios. ¿Hay algo más en lo que pueda ayudarte?"
};

const preguntasSugeridas = [
  "¿Cuáles son los beneficios tributarios?",
  "¿Qué terrenos hay disponibles?",
  "¿Cuáles son los requisitos?",
  "¿Cómo contacto con proveedores?"
];

const obtenerRespuesta = (mensaje: string): string => {
  const mensajeLower = mensaje.toLowerCase();
  
  if (mensajeLower.includes("hola") || mensajeLower.includes("buenos") || mensajeLower.includes("saludos")) {
    return respuestasBot.hola;
  }
  if (mensajeLower.includes("beneficio") || mensajeLower.includes("tributar") || mensajeLower.includes("impuesto")) {
    return respuestasBot.beneficios;
  }
  if (mensajeLower.includes("terreno") || mensajeLower.includes("mapa") || mensajeLower.includes("lote") || mensajeLower.includes("disponible")) {
    return respuestasBot.terrenos;
  }
  if (mensajeLower.includes("requisito") || mensajeLower.includes("necesito") || mensajeLower.includes("cumplir")) {
    return respuestasBot.requisitos;
  }
  if (mensajeLower.includes("proveedor") || mensajeLower.includes("servicio") || mensajeLower.includes("empresa")) {
    return respuestasBot.proveedores;
  }
  if (mensajeLower.includes("contacto") || mensajeLower.includes("teléfono") || mensajeLower.includes("email") || mensajeLower.includes("correo")) {
    return respuestasBot.contacto;
  }
  
  return respuestasBot.default;
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el asistente de CHANCAY NEXUS. ¿En qué puedo ayudarte?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: obtenerRespuesta(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestion = (pregunta: string) => {
    setInputValue(pregunta);
  };

  return (
    <>
      {/* Botón flotante */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-accent to-prosperity shadow-lg hover:shadow-xl transition-shadow"
          size="icon"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-hero p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-prosperity flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Asistente NEXUS</h3>
                  <p className="text-xs text-primary-foreground/70">Respuestas instantáneas</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] ${message.isBot ? "" : "flex-row-reverse"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot ? "bg-accent/20" : "bg-prosperity/20"
                    }`}>
                      {message.isBot ? (
                        <Bot className="w-4 h-4 text-accent" />
                      ) : (
                        <User className="w-4 h-4 text-prosperity" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.isBot 
                        ? "bg-muted" 
                        : "bg-gradient-to-r from-accent to-prosperity text-primary-foreground"
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-accent" />
                  </div>
                  <div className="bg-muted rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sugerencias */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Preguntas frecuentes:</p>
                <div className="flex flex-wrap gap-2">
                  {preguntasSugeridas.map((pregunta) => (
                    <button
                      key={pregunta}
                      onClick={() => handleSuggestion(pregunta)}
                      className="text-xs px-3 py-1 rounded-full bg-muted hover:bg-accent/20 transition-colors"
                    >
                      {pregunta}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 px-4 py-2 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent text-sm"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="bg-gradient-to-r from-accent to-prosperity"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
