import { Car, RefreshCw, Droplets, Headphones, Wifi, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const DifferentialsSection = () => {
  const differentials = [
    { icon: Car, title: "Veículos adaptados", description: "Frota personalizada para sua operação" },
    { icon: RefreshCw, title: "Veículo reserva ilimitado", description: "Nunca fique sem mobilidade" },
    { icon: Droplets, title: "Não cobramos lavagem simples", description: "Economia nos detalhes" },
    { icon: Headphones, title: "Atendimento personalizado", description: "Suporte dedicado à sua empresa" },
    { icon: Wifi, title: "Não cobramos condutor adicional", description: "Flexibilidade para sua equipe" },
    { icon: MapPin, title: "Entregamos e recolhemos", description: "Sem nenhum custo na região" },
  ];

  const steps = [
    { number: "01", title: "Empresas", desc: "Com equipe externa ou logística que precisam de mobilidade" },
    { number: "02", title: "Negócios", desc: "Que não podem ficar sem veículo em nenhum momento" },
    { number: "03", title: "Operações", desc: "Que buscam previsibilidade e controle de custos" },
    { number: "04", title: "Gestores", desc: "Que querem reduzir a carga administrativa da frota" },
  ];

  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-secondary">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Por que escolher a Carflex
          </span>
          <h2 className="text-4xl lg:text-5xl font-black">DIFERENCIAIS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl carflex-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works - Clean Circle Design */}
        <div className="mt-24 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold">
              Para quem <span className="text-accent">faz sentido?</span>
            </h3>
          </motion.div>

          {/* Steps with circles */}
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-300 border-primary-foreground bg-secondary"
                >
                  <span className="text-xl lg:text-2xl font-bold text-primary-foreground">{item.number}</span>
                </motion.div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-background/50">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Sem burocracia.</span>{" "}
                <span className="text-muted-foreground">Sem soluções improvisadas.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;