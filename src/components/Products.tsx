import { Package, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "Equipamentos e instrumentos",
      description: "Equipamentos e instrumentos especializados para inspeções conforme normas DS-1, APIs e NS-2.",
      items: [
        "Instrumentos de medição de precisão",
        "Equipamentos de inspeção não destrutiva",
        "Ferramentas especializadas para O&G",
      ],
    },
    {
      icon: Wrench,
      title: "Consumíveis",
      description: "Consumíveis diversos para manutenção de equipamentos utilizados no setor de Óleo & Gás.",
      items: [
        "Materiais para manutenção preventiva",
        "Insumos para manutenção corretiva",
        "Peças de reposição certificadas",
      ],
    },
  ];

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-4">
              Produtos
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Equipamentos e consumíveis de alta qualidade para o setor de Óleo & Gás
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-strong transition-all duration-300 border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <product.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{product.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.description}</p>
                    
                    <ul className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                      {product.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Soluções customizadas para seu negócio
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
              Entre em contato conosco para conhecer nosso portfólio completo de produtos e encontrar as melhores soluções para suas necessidades específicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
