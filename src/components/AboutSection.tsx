import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Veículos adequados à operação",
    "Manutenção inclusa",
    "Contratos claros e flexíveis",
    "Suporte direto quando preciso",
  ];

  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Decorative card */}
          <div className="relative">
            <div className="carflex-card p-8 lg:p-12 space-y-6">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 50 40" className="w-8 h-6 text-foreground">
                  <path
                    fill="currentColor"
                    d="M10 5 C15 5, 20 8, 22 15 C24 22, 20 30, 12 32 C8 33, 5 31, 3 28 C1 25, 2 20, 5 17 C8 14, 12 15, 14 18 C16 21, 14 25, 11 26 C9 27, 7 25, 8 23"
                  />
                  <path
                    fill="currentColor"
                    d="M25 8 L25 32 L32 32 L32 22 L45 22 L45 16 L32 16 L32 14 L48 14 L48 8 Z"
                  />
                </svg>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black">Sobre nós</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Carflex é uma locadora de veículos criada com foco em operação, não em discurso. 
                  Nascemos para atender empresas que dependem de frota no dia a dia e não podem 
                  lidar com imprevistos, veículos parados ou contratos engessados.
                </p>
                <p>
                  Atuamos como parceiros operacionais, assumindo a gestão da frota para que nossos 
                  clientes tenham previsibilidade, continuidade e menos carga administrativa.
                </p>
                <p className="text-foreground font-medium">
                  Mais do que fornecer carros, a Carflex estrutura a mobilidade da empresa 
                  para que o negócio siga funcionando.
                </p>
              </div>
            </div>

            {/* Diagonal accent */}
            <div 
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/10 -z-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            />
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Nosso Modelo
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold">
                Simples, direto e
                <span className="text-accent"> sem surpresas</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/50 transition-colors group"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium group-hover:text-accent transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Challenge section */}
            <div className="p-6 rounded-2xl carflex-card space-y-4">
              <h4 className="text-xl font-bold text-accent">
                Toda empresa que depende de veículos tem o mesmo desafio
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Veículo parado gera atraso.</li>
                <li>• Atraso gera retrabalho.</li>
                <li>• Retrabalho gera custo invisível.</li>
              </ul>
              <p className="text-sm text-foreground">
                Gerir frota internamente ou com parceiros pouco estruturados transforma 
                um ativo produtivo em um centro constante de problemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
