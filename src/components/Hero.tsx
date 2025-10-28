import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoSparta from "@/assets/logo-sparta.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img src={logoSparta} alt="Sparta Solutions" className="h-32 md:h-40 w-auto" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Sparta Solutions
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções customizadas em controle e garantia da qualidade para o setor de Óleo & Gás
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Com mais de 15 anos de experiência, oferecemos soluções inteligentes e sob medida em consultoria, controle de qualidade e manutenção de equipamentos para empresas do segmento de Óleo & Gás.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection("servicos")}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground group"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
