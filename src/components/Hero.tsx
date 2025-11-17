import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoSparta from "@/assets/logo-sparta.png";
import heroBackground from "@/assets/hero-background.jpg";

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
    <section id="hero" className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/85" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          <div className="flex justify-center mb-4 sm:mb-8">
            <img src={logoSparta} alt="Sparta Solutions" className="h-32 sm:h-40 md:h-52 lg:h-64 w-auto" />
          </div>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Soluções customizadas em controle e garantia da qualidade para o setor de Óleo & Gás
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Com mais de 15 anos de experiência, oferecemos soluções inteligentes e sob medida em consultoria, controle de qualidade e manutenção de equipamentos para empresas do segmento de Óleo & Gás.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4">
            <Button
              onClick={() => scrollToSection("servicos")}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground group w-full sm:w-auto"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
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
