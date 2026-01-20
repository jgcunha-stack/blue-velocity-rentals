import { ThumbsUp, DollarSign, Shield, Clock } from "lucide-react";
import aboutCoupleImage from "@/assets/about-couple-car.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: ThumbsUp,
      title: "Conforto & Performance",
      description: "Veículos modernos e bem mantidos para garantir sua operação sem interrupções.",
    },
    {
      icon: DollarSign,
      title: "Planos Flexíveis",
      description: "Contratos adaptados à sua realidade, sem surpresas ou taxas escondidas.",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seguro incluso em todos os veículos para sua tranquilidade.",
    },
    {
      icon: Clock,
      title: "Suporte 24h",
      description: "Assistência disponível a qualquer momento que você precisar.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-background via-accent/5 to-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-black text-secondary italic leading-tight">
                Por que escolher a Carflex?
              </h2>
              <p className="text-secondary/60">
                Locação sem complicação, com suporte total
              </p>
            </div>

            {/* Feature cards - 2x2 grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-accent/10 backdrop-blur-sm rounded-xl p-5 space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-secondary">{feature.title}</h3>
                  <p className="text-sm text-secondary/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border-8 border-white/80 shadow-2xl">
              <img
                src={aboutCoupleImage}
                alt="Funcionário Carflex apresentando veículo"
                className="w-full h-[450px] object-cover object-top"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-secondary px-5 py-3 rounded-xl shadow-lg">
              <div className="text-center">
                <span className="text-3xl font-black block">10+</span>
                <span className="text-xs font-semibold">Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
