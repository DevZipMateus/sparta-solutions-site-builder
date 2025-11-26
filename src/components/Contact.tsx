import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(22) 99969-3243",
      link: "tel:+5522999693243",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@spartasolutions.ind.br",
      link: "mailto:contato@spartasolutions.ind.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Franklin Delano Roosevelt, 87 Sala 01 Cavaleiros - Macaé RJ",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a sexta: 7:30h às 17:30h",
    },
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-4">
              Entre em contato
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Estamos prontos para atender suas necessidades com soluções customizadas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors block break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-dark rounded-2xl p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-6 animate-fade-in shadow-strong">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Fale conosco pelo WhatsApp
            </h3>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
              Entre em contato agora mesmo e descubra como podemos ajudar seu negócio com nossas soluções especializadas.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5522999693243"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Conversar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
