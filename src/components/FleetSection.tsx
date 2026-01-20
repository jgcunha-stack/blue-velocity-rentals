import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import fleetEconomico from "@/assets/fleet-economico.png";
import fleetIntermediario from "@/assets/fleet-intermediario.png";
import fleetPickup from "@/assets/fleet-pickup.png";
import fleetMinivan from "@/assets/fleet-minivan.png";
import fleetMoto from "@/assets/fleet-moto.png";

const FleetSection = () => {
  const categories = [
    {
      name: "Econômico",
      image: fleetEconomico,
      description: "Veículos compactos ideais para operações urbanas",
      accentColor: "from-blue-500 to-blue-600",
    },
    {
      name: "Intermediário",
      image: fleetIntermediario,
      description: "Conforto e eficiência para equipes externas",
      accentColor: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Pick-up",
      image: fleetPickup,
      description: "Força e capacidade para cargas e terrenos diversos",
      accentColor: "from-amber-500 to-amber-600",
    },
    {
      name: "Mini Van",
      subtitle: "7 lugares",
      image: fleetMinivan,
      description: "Transporte de equipes com conforto e espaço",
      accentColor: "from-violet-500 to-violet-600",
    },
    {
      name: "Motos",
      image: fleetMoto,
      description: "Agilidade para entregas e deslocamentos rápidos",
      accentColor: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <section id="frota" className="py-24 bg-white relative overflow-hidden">
      {/* Futuristic background pattern */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--secondary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Accent gradients */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 0% 50%, hsl(var(--accent) / 0.08) 0%, transparent 50%),
                              radial-gradient(circle at 100% 50%, hsl(var(--accent) / 0.05) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm bg-accent/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Categorias
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary">NOSSA FROTA</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Veículos selecionados para atender diferentes necessidades operacionais
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
                {/* Accent line on top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Futuristic corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gray-200 group-hover:border-accent/50 transition-colors rounded-tr-lg" />
                </div>

                {/* Image container */}
                <div className="relative h-28 mb-4 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>

                {/* Content */}
                <div className="text-center space-y-2 flex-grow flex flex-col justify-center">
                  <h3 className="font-bold text-lg text-secondary group-hover:text-accent transition-colors">{category.name}</h3>
                  {category.subtitle && (
                    <span className="inline-block text-xs text-white bg-secondary/80 px-2 py-0.5 rounded-full">{category.subtitle}</span>
                  )}
                  <p className="text-xs text-secondary/50 leading-relaxed min-h-[2.5rem]">{category.description}</p>
                </div>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs text-accent font-semibold flex items-center gap-1">
                    Ver modelos <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
            <p className="text-secondary/70">
              Precisa de outra categoria de veículo?
            </p>
            <Button className="gap-2 bg-accent hover:bg-accent/90 font-semibold shadow-lg shadow-accent/25">
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
