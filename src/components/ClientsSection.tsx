import vmcLogo from "@/assets/clients/vmc-logo.png";
import tutoriLogo from "@/assets/clients/tutori-logo.png";
import nexusLogo from "@/assets/clients/nexus-logo.png";
import agileLogo from "@/assets/clients/agile-logo.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    { name: "VMC Tanatopraxia", logo: vmcLogo },
    { name: "Tutori Segurança Armada", logo: tutoriLogo },
    { name: "Nexus Vigilância", logo: nexusLogo },
    { name: "Agile", logo: agileLogo },
  ];

  const stats = [
    { value: "+500", label: "Empresas Atendidas" },
    { value: "98%", label: "Satisfação" },
    { value: "15+", label: "Anos de Mercado" },
  ];

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-primary-foreground">
      <div className="container mx-auto px-6 md:px-[100px] my-[20px] py-[20px]">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-20"
        >
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-24 bg-accent rounded-full mt-1 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-accent italic">Resultados que</span><br />
              <span className="text-secondary">geram confiança.</span>
            </h2>
          </div>

          <p className="max-w-sm lg:text-center text-secondary text-lg">
            Confira quem impulsiona sua operação com a eficiência da Carflex.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-sm font-semibold tracking-wide w-fit transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
              CONHEÇA NOSSOS CASES
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-16 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <span className="text-5xl md:text-6xl font-bold text-accent">{stat.value}</span>
              <p className="text-secondary mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24 items-center justify-items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.1, transition: { duration: 0.3 } }}
                className="group cursor-pointer flex items-center justify-center w-full"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-20 md:h-24 lg:h-28 w-auto max-w-[180px] object-contain transition-all duration-500" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Decorations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center items-center gap-4 mt-16"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="w-3 h-3 bg-accent/40 rotate-45 animate-pulse" />
          <div className="w-32 h-px bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
          <div className="w-3 h-3 bg-accent/40 rotate-45 animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;