import { Instagram, Linkedin, Facebook } from "lucide-react";
import carflexLogoWhite from "@/assets/carflex-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2 space-y-4">
            <img 
              src={carflexLogoWhite} 
              alt="Carflex - Locadora de Veículos" 
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground max-w-sm">
              Locação de veículos pensada para manter operações em movimento. 
              Soluções em frota corporativa com foco em continuidade e previsibilidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-accent/20 transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-accent" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Modelo", "Frota", "Diferenciais", "Contato"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>(31) 99999-9999</li>
              <li>contato@carflex.com.br</li>
              <li>Belo Horizonte - MG</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Carflex Locadora de Veículos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
