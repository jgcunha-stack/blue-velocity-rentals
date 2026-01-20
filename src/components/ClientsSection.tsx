import vmcLogo from "@/assets/clients/vmc-logo.png";
import tutoriLogo from "@/assets/clients/tutori-logo.png";
import nexusLogo from "@/assets/clients/nexus-logo.png";
import agileLogo from "@/assets/clients/agile-logo.png";

const ClientsSection = () => {
  const clients = [
    { name: "VMC Tanatopraxia", logo: vmcLogo },
    { name: "Tutori Segurança Armada", logo: tutoriLogo },
    { name: "Nexus Vigilância", logo: nexusLogo },
    { name: "Agile", logo: agileLogo },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Confiado por <span className="text-accent">+500 empresas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas de diversos segmentos confiam na Carflex para manter suas operações rodando com eficiência e tranquilidade.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 md:h-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-full w-auto object-contain max-w-[180px] md:max-w-[220px]"
              />
            </div>
          ))}
        </div>

        {/* Divider line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-accent/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
