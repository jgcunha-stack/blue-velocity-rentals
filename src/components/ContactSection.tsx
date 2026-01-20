import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 carflex-gradient relative overflow-hidden">
      {/* Decorative diagonal lines */}
      <div 
        className="absolute top-0 left-0 right-0 h-24 bg-background"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />
      
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              hsl(var(--accent) / 0.05) 100px,
              hsl(var(--accent) / 0.05) 101px
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Fale Conosco
              </span>
              <h2 className="text-4xl lg:text-5xl font-black">
                Vamos conversar sobre
                <span className="text-accent block">sua operação</span>
              </h2>
              <p className="text-muted-foreground">
                Entre em contato e descubra como a Carflex pode otimizar a mobilidade 
                da sua empresa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-semibold">(31) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold">contato@carflex.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-semibold">Belo Horizonte - MG</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="carflex-card p-8 lg:p-10">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome da Empresa</label>
                <Input 
                  placeholder="Digite o nome da sua empresa" 
                  className="bg-secondary/50 border-border/50 focus:border-accent"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Seu Nome</label>
                  <Input 
                    placeholder="Seu nome completo" 
                    className="bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefone</label>
                  <Input 
                    placeholder="(00) 00000-0000" 
                    className="bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">E-mail</label>
                <Input 
                  type="email"
                  placeholder="seu@email.com.br" 
                  className="bg-secondary/50 border-border/50 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos sobre sua necessidade de frota..." 
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-accent resize-none"
                />
              </div>

              <Button className="w-full gap-2 bg-accent hover:bg-accent/90 font-semibold py-6">
                Enviar Mensagem
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
