import { Car, Wrench, Shield, FileText } from "lucide-react";
import { motion } from "framer-motion";

const ModelSection = () => {
  const pillars = [
    { icon: Car, title: "Veículos adequados à operação", description: "Frota personalizada conforme sua necessidade." },
    { icon: Wrench, title: "Manutenção inclusa", description: "Preventiva e corretiva, sem preocupações." },
    { icon: Shield, title: "Seguro completo", description: "Proteção total para sua operação." },
    { icon: FileText, title: "Contratos flexíveis", description: "Adaptamos à realidade da sua empresa." },
  ];

  const steps = [
    { step: "01", title: "Entendemos a operação", description: "Analisamos sua necessidade e identificamos os modelos ideais." },
    { step: "02", title: "Indicamos as condições", description: "Apresentamos veículos e condições para sua operação." },
    { step: "03", title: "Iniciamos a operação", description: "Estruturamos a frota e iniciamos o suporte contínuo." },
  ];

  return (
    <section id="modelo" className="py-24 bg-secondary relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-sidebar" style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 60%)'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm">
            <span className="w-6 h-px bg-accent" />
            Como Trabalhamos
            <span className="w-6 h-px bg-accent" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground">
            O MODELO <span className="text-accent">CARFLEX</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            Mobilidade corporativa sem complicações
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative h-full p-6 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-transparent to-transparent backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_30px_-10px_hsl(var(--accent)/0.3)]"
              >
                <div className="absolute inset-0 opacity-[0.05]" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }} />
                
                <div className="absolute top-0 left-0 w-10 h-10">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-transparent" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-accent to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-accent to-transparent" />
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-accent to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30 group-hover:bg-accent/30 transition-colors">
                    <pillar.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-foreground leading-tight">{pillar.title}</h3>
                  <p className="text-sm text-primary-foreground/60">{pillar.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process steps */}
        <div className="mt-24 space-y-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl lg:text-3xl font-bold text-center text-primary-foreground"
          >
            Como funciona <span className="text-accent">na prática</span>
          </motion.h3>

          <div className="relative">
            <div className="hidden lg:block absolute top-28 left-[16.67%] right-[16.67%] h-px">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center group my-0 gap-[10px]"
                >
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      className="w-24 h-24 rounded-full border-2 border-accent/30 flex items-center justify-center group-hover:border-accent/60 transition-colors"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/40 flex items-center justify-center group-hover:from-accent/30 transition-all">
                        <span className="text-2xl font-black text-accent">{item.step}</span>
                      </div>
                    </motion.div>
                    <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="font-bold text-lg text-primary-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-primary-foreground/60 max-w-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center pt-8"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="text-sm text-primary-foreground">
                <span className="font-semibold">Sem burocracia.</span>{" "}
                <span className="text-primary-foreground/60">Sem soluções improvisadas.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;