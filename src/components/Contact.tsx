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
      content: "Rua Franklin Delano Roosevelt, 87 - Macaé - RJ",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a quinta-feira: 7:30h às 17:30h • Sexta-feira: 7:30h às 17:30h",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender suas necessidades com soluções customizadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-dark rounded-2xl p-8 md:p-12 text-center space-y-6 animate-fade-in shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Fale conosco pelo WhatsApp
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Entre em contato agora mesmo e descubra como podemos ajudar seu negócio com nossas soluções especializadas.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <a
                href="https://wa.me/5522999693243"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">CNPJ</h3>
              <p className="text-muted-foreground">41.327.741/0001-69</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
