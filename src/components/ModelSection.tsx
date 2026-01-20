import { Car, Wrench, Shield, FileText } from "lucide-react";

const ModelSection = () => {
  const pillars = [
    {
      icon: Car,
      title: "Veículos adequados à operação do cliente",
      description: "Frota personalizada conforme a necessidade real da sua empresa.",
    },
    {
      icon: Wrench,
      title: "Manutenção preventiva e corretiva inclusa",
      description: "Cuidamos de toda manutenção, você foca no seu negócio.",
    },
    {
      icon: Shield,
      title: "Seguro incluso, sem surpresas",
      description: "Proteção completa para sua tranquilidade operacional.",
    },
    {
      icon: FileText,
      title: "Contratos flexíveis, ajustáveis à realidade",
      description: "Adaptamos às necessidades específicas da sua empresa.",
    },
  ];

  return (
    <section id="modelo" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.05) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Como Trabalhamos
          </span>
          <h2 className="text-4xl lg:text-5xl font-black">
            O MODELO <span className="text-accent">CARFLEX</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um modelo pensado para que sua empresa tenha mobilidade sem complicações
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card with octagonal shape effect */}
              <div className="relative p-8 rounded-3xl carflex-card h-full flex flex-col items-center text-center space-y-4 hover:border-accent/50 transition-all duration-300 group-hover:-translate-y-2">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent/30 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/30 rounded-br-2xl" />

                <div className="p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <pillar.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-lg font-bold leading-tight">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className="mt-20 space-y-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-center">
            Como funciona <span className="text-accent">na prática</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Entendemos a operação",
                description: "Analisamos a necessidade da sua empresa e identificamos os modelos mais adequados.",
              },
              {
                step: "02",
                title: "Indicamos as condições",
                description: "Apresentamos os veículos e condições ideais para sua operação.",
              },
              {
                step: "03",
                title: "Iniciamos a operação",
                description: "Estruturamos a frota e iniciamos o suporte contínuo.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/30 group-hover:bg-accent/20 transition-colors">
                  <span className="text-2xl font-black text-accent">{item.step}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground max-w-lg mx-auto">
            <span className="text-foreground font-semibold">Sem burocracia excessiva.</span>{" "}
            <span className="text-foreground font-semibold">Sem soluções improvisadas.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
