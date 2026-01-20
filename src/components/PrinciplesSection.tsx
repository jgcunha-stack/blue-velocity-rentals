import carflexLogo from "@/assets/carflex-logo.png";

const PrinciplesSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
      {/* Diagonal white shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <svg
          viewBox="0 0 500 600"
          fill="none"
          preserveAspectRatio="none"
          className="absolute top-0 right-0 h-full w-full"
        >
          <path
            d="M150 0 L500 0 L500 600 L0 600 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Professional image placeholder */}
              <div className="w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] bg-gradient-to-b from-secondary/50 to-secondary rounded-t-full overflow-hidden flex items-end justify-center">
                <div className="w-full h-full bg-gradient-to-t from-accent/10 to-transparent flex items-center justify-center">
                  <div className="text-center text-muted-foreground/50">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative z-10 lg:pl-8">
            {/* Logo */}
            <img 
              src={carflexLogo} 
              alt="Carflex Logo" 
              className="h-10 md:h-12 w-auto mb-8"
            />

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary leading-tight mb-6">
              Frota não é detalhe.
              <br />
              <span className="text-secondary">É estrutura.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-6 max-w-lg">
              A Carflex existe para <strong className="text-secondary font-semibold">garantir</strong> que os veículos{" "}
              <strong className="text-secondary font-semibold">não sejam um risco para o negócio,</strong> mas sim um
              suporte confiável para o crescimento da empresa.
            </p>

            <p className="text-lg text-muted-foreground max-w-lg">
              Vamos entender sua operação e estruturar a frota certa para ela.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60H1440V30C1440 30 1140 0 720 0C300 0 0 30 0 30V60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default PrinciplesSection;
