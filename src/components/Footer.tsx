import { Phone, Mail, MapPin } from "lucide-react";
import logoSparta from "@/assets/logo-sparta.png";

const Footer = () => {
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

  const quickLinks = [
    { label: "Sobre", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Produtos", id: "produtos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Slogan */}
          <div className="space-y-4">
            <img src={logoSparta} alt="Sparta Solutions" className="h-16 w-auto" />
            <p className="text-sm leading-relaxed">
              Soluções customizadas para seu negócio.
            </p>
            <p className="text-sm text-secondary-foreground/80">
              Mais de 15 anos de experiência em Óleo & Gás.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links rápidos</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="space-y-3">
              <a
                href="tel:+5522999693243"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(22) 99969-3243</span>
              </a>
              <a
                href="mailto:contato@spartasolutions.ind.br"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contato@spartasolutions.ind.br</span>
              </a>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Localização</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
              <div>
                <p>Rua Franklin Delano Roosevelt, 87</p>
                <p>Macaé - RJ</p>
              </div>
            </div>
            <div className="text-sm text-secondary-foreground/80">
              <p className="font-semibold mb-1">Horário de funcionamento:</p>
              <p>Seg a Qui: 7:30h às 17:30h</p>
              <p>Sexta: 7:30h às 17:30h</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="text-secondary-foreground/80">
            © {new Date().getFullYear()} Sparta Solutions. Todos os direitos reservados.
          </p>
          <p className="text-secondary-foreground/60 mt-2">
            CNPJ: 41.327.741/0001-69
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
