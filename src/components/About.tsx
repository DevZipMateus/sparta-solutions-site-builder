import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import isoCertification from "@/assets/iso-certification.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Visão",
      description:
        "Ser referência na área de controle e garantia da qualidade e manutenções de ferramentas e equipamentos de O&G no Brasil.",
    },
    {
      icon: Eye,
      title: "Missão",
      description:
        "Oferecer soluções inteligentes e sob medida em consultoria, controle e garantia da qualidade, manutenção de equipamentos, promovendo resultados eficazes para nossos clientes.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Compromisso com o cliente • Excelência operacional • Inovação constante • Valorização das pessoas",
    },
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-4">
              Sobre a Sparta Solutions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Com sede em Macaé - RJ e atuação em todo o território nacional
            </p>
            <div className="flex justify-center mt-6">
              <img 
                src={isoCertification} 
                alt="Empresa certificada - ISO" 
                className="h-12 sm:h-16 object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                A Sparta Solutions surgiu com o propósito de entregar soluções customizadas e de alta eficiência para empresas no segmento de Óleo & Gás.
              </p>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Adquirimos expertise técnica e know-how em mais de 15 anos atuando com liderança em grandes projetos de IOCs (International Oil Company) nas atividades de controle & garantia da qualidade, em manutenções nos tubulares de perfuração e produção, ferramentas e equipamentos utilizados em poços de O&G.
              </p>
            </div>

            <div className="bg-gradient-dark rounded-2xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4 animate-fade-in shadow-strong">
              <div className="text-5xl sm:text-6xl font-bold text-primary">15+</div>
              <div className="text-lg sm:text-xl text-white">Anos de experiência</div>
              <div className="text-xs sm:text-sm text-white/80">
                Atuando em grandes projetos no setor de Óleo & Gás
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-strong transition-shadow duration-300 animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
