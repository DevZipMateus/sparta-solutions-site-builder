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
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Produtos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Equipamentos e consumíveis de alta qualidade para o setor de Óleo & Gás
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-strong transition-all duration-300 border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                    
                    <ul className="space-y-3 pt-4">
                      {product.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Soluções customizadas para seu negócio
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Entre em contato conosco para conhecer nosso portfólio completo de produtos e encontrar as melhores soluções para suas necessidades específicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
