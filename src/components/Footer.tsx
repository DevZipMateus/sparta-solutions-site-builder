import { Phone, Mail, MapPin } from "lucide-react";
import logoSparta from "@/assets/logo-sparta-footer.png";
import isoCertificationSeal from "@/assets/iso-certification-seal.png";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  const quickLinks = [{
    label: "Sobre",
    id: "sobre"
  }, {
    label: "Serviços",
    id: "servicos"
  }, {
    label: "Produtos",
    id: "produtos"
  }, {
    label: "Contato",
    id: "contato"
  }];
  return <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo e Slogan */}
          <div className="space-y-3 sm:space-y-4">
            <img src={logoSparta} alt="Sparta Solutions" className="h-12 sm:h-16 w-auto" />
            <p className="text-xs sm:text-sm leading-relaxed text-white/90">
              Soluções customizadas para seu negócio.
            </p>
            <p className="text-xs sm:text-sm text-white/70">
              Mais de 15 anos de experiência em Óleo & Gás.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white">Links rápidos</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-xs sm:text-sm text-white/80 hover:text-primary transition-colors text-left">
                  {link.label}
                </button>)}
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:+5522999693243" className="flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>(22) 99969-3243</span>
              </a>
              <a href="mailto:contato@spartasolutions.ind.br" className="flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-primary transition-colors break-all">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>contato@spartasolutions.ind.br</span>
              </a>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white">Localização</h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 mt-1" />
              <div>
                <p>Sede administrativa: Rua Franklin Delano Roosevelt Nº 87, Sala 01</p>
                <p>Cavaleiros, Macaé-RJ – CEP: 27920-240</p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-white/70">
              <p className="font-semibold mb-1">Horário de funcionamento:</p>
              <p>Seg a Sex: 7:30h às 17:30h</p>
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-white/70 text-center sm:text-left">
              © {new Date().getFullYear()} Sparta Solutions. Todos os direitos reservados.
            </p>
            <img src={isoCertificationSeal} alt="ISO 9001 Certified" className="h-12 sm:h-14 w-auto" />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;