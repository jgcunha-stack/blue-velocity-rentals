const ClientsSection = () => {
  const clients = [
    { name: "Empresa A", initials: "EA" },
    { name: "Empresa B", initials: "EB" },
    { name: "Empresa C", initials: "EC" },
    { name: "Empresa D", initials: "ED" },
    { name: "Empresa E", initials: "EE" },
    { name: "Empresa F", initials: "EF" },
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
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex items-center justify-center w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder para logos - substitua por imagens reais */}
              <div className="flex items-center justify-center w-full h-full border border-border/50 rounded-lg bg-muted/30 group-hover:border-accent/50 transition-colors">
                <span className="text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-accent transition-colors">
                  {client.initials}
                </span>
              </div>
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
