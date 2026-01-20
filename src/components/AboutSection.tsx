import { ThumbsUp, DollarSign, Shield, Clock } from "lucide-react";
import aboutCoupleImage from "@/assets/about-couple-car.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: ThumbsUp,
      title: "Conforto & Performance",
    },
    {
      icon: DollarSign,
      title: "Planos Flexíveis",
    },
    {
      icon: Shield,
      title: "Segurança Total",
    },
    {
      icon: Clock,
      title: "Suporte 24h",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutCoupleImage}
                alt="Funcionário Carflex apresentando veículo"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute top-6 right-6 bg-accent text-secondary px-5 py-3 rounded-lg shadow-lg">
              <div className="text-center">
                <span className="text-3xl font-black block">10+</span>
                <span className="text-xs font-semibold">Anos</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                Sobre a Carflex
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-secondary leading-tight">
                Mantendo você em movimento com{" "}
                <span className="text-accent">locação confiável</span>
              </h2>
              <p className="text-secondary/70">
                A Carflex é uma locadora de veículos criada com foco em operação.
                Nascemos para atender empresas que dependem de frota no dia a dia
                e não podem lidar com imprevistos, veículos parados ou contratos
                engessados.
              </p>
            </div>

            {/* Feature icons */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-secondary/5 px-4 py-2 rounded-full"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-secondary">
                    {feature.title}
                  </span>
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