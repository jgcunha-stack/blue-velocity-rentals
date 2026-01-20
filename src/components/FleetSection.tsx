import { Car, Truck, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";

const FleetSection = () => {
  const categories = [
    {
      name: "Econômico",
      icon: Car,
      description: "Veículos compactos ideais para operações urbanas",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      name: "Intermediário",
      icon: Car,
      description: "Conforto e eficiência para equipes externas",
      color: "from-emerald-500/20 to-emerald-600/20",
    },
    {
      name: "Pick-up",
      icon: Truck,
      description: "Força e capacidade para cargas e terrenos diversos",
      color: "from-amber-500/20 to-amber-600/20",
    },
    {
      name: "Mini Van",
      subtitle: "7 lugares",
      icon: Car,
      description: "Transporte de equipes com conforto e espaço",
      color: "from-violet-500/20 to-violet-600/20",
    },
    {
      name: "Motos",
      icon: Bike,
      description: "Agilidade para entregas e deslocamentos rápidos",
      color: "from-rose-500/20 to-rose-600/20",
    },
  ];

  return (
    <section id="frota" className="py-24 carflex-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--accent) / 0.15) 0%, transparent 40%),
                              radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.1) 0%, transparent 40%)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Categorias
          </span>
          <h2 className="text-4xl lg:text-5xl font-black">NOSSA FROTA</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veículos selecionados para atender diferentes necessidades operacionais
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-square relative rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-accent transition-all duration-300 group-hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} group-hover:opacity-80 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/80 group-hover:bg-secondary/60 transition-colors">
                  <category.icon className="w-16 h-16 text-accent/70 group-hover:text-accent group-hover:scale-110 transition-all" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">{category.name}</h3>
                {category.subtitle && (
                  <span className="text-xs text-muted-foreground">{category.subtitle}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground">
            Precisa de outra categoria de veículo?
          </p>
          <Button className="gap-2 bg-accent hover:bg-accent/90 font-semibold">
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
