import { ThumbsUp, DollarSign, Shield, Clock } from "lucide-react";
import aboutCoupleImage from "@/assets/about-couple-car.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: ThumbsUp,
      title: "Conforto & Performance",
      description: "Veículos modernos e bem mantidos para garantir sua operação.",
    },
    {
      icon: DollarSign,
      title: "Planos Flexíveis",
      description: "Contratos adaptados à sua realidade, sem surpresas.",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seguro incluso em todos os veículos para sua tranquilidade.",
    },
    {
      icon: Clock,
      title: "Suporte 24h",
      description: "Assistência disponível a qualquer momento que precisar.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-8 right-8 text-[80px] lg:text-[120px] font-black text-white/5 leading-none tracking-tighter pointer-events-none">
        SOBRE NÓS
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutCoupleImage}
                alt="Funcionário Carflex apresentando veículo"
                className="w-full h-[400px] object-cover object-top"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 right-8 bg-accent text-secondary px-6 py-4 rounded-lg shadow-xl">
              <div className="text-center">
                <span className="text-4xl font-black block">10+</span>
                <span className="text-xs font-semibold">Anos de<br />Experiência</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                Mantendo você em movimento com{" "}
                <span className="text-accent italic">locação confiável</span>
              </h2>
              <p className="text-white/60">
                A Carflex é uma locadora de veículos criada com foco em operação.
                Nascemos para atender empresas que dependem de frota no dia a dia
                e não podem lidar com imprevistos, veículos parados ou contratos
                engessados.
              </p>
            </div>

            {/* Feature cards - 2 columns */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-white/50 pl-[52px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
