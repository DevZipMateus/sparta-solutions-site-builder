import { CheckCircle2, ClipboardCheck, Users, FileText, GraduationCap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: CheckCircle2,
      title: "Inspeções de componentes de perfuração",
      description: "Drill Stem Elements Onshore/Offshore - Inspeções completas de componentes utilizados na coluna de perfuração.",
    },
    {
      icon: ClipboardCheck,
      title: "Inspeções OCTG Services",
      description: "Inspeções especializadas de componentes utilizados na coluna de produção.",
    },
    {
      icon: Shield,
      title: "Consultoria em QA/QC",
      description: "Controle e garantia da qualidade nas áreas de OCTG e elementos da coluna de perfuração.",
    },
    {
      icon: Users,
      title: "TPI Services",
      description: "Acompanhamento de processos junto a fornecedores representando o cliente.",
    },
    {
      icon: FileText,
      title: "Elaboração de documentação",
      description: "Criação e revisões de procedimentos, instruções técnicas, relatórios e check lists.",
    },
    {
      icon: GraduationCap,
      title: "Treinamento de pessoal",
      description: "Capacitação em QA/QC para aplicação de critérios em acordo com normas DS-1 e APIs.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossos serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas em controle de qualidade e manutenção para o setor de Óleo & Gás
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-dark rounded-2xl p-8 md:p-12 text-center space-y-4 animate-fade-in shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Conformidade com normas internacionais
            </h3>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Todos os nossos serviços seguem rigorosamente as normas DS-1, APIs e NS-2, garantindo a máxima qualidade e segurança em cada processo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
