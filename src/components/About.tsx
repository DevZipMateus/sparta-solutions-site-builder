import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sobre a Sparta Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Com sede em Macaé - RJ e atuação em todo o território nacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground leading-relaxed">
                A Sparta Solutions surgiu com o propósito de entregar soluções customizadas e de alta eficiência para empresas no segmento de Óleo & Gás.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Adquirimos expertise técnica e know-how em mais de 15 anos atuando com liderança em grandes projetos de IOCs (International Oil Company) nas atividades de controle & garantia da qualidade, em manutenções nos tubulares de perfuração e produção, ferramentas e equipamentos utilizados em poços de O&G.
              </p>
            </div>

            <div className="bg-gradient-dark rounded-2xl p-8 text-center space-y-4 animate-fade-in shadow-strong">
              <div className="text-6xl font-bold text-primary">15+</div>
              <div className="text-xl text-white">Anos de experiência</div>
              <div className="text-sm text-white/80">
                Atuando em grandes projetos no setor de Óleo & Gás
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
