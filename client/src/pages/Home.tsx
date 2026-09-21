import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Dumbbell,
  Facebook,
  HeartPulse,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  ScanLine,
  Sparkles,
  X,
} from "lucide-react";
const WHATSAPP_URL =
  "https://wa.me/5541997780418?text=Ol%C3%A1%2C%20Inmove!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.%20Gostaria%20de%20saber%20quais%20hor%C3%A1rios%20est%C3%A3o%20dispon%C3%ADveis.";
const INSTAGRAM_URL = "https://www.instagram.com/inmoverecovery/";
const LOGO_URL = "/manus-storage/pasted_file_61a57O_image_339300e5.png";
// Preenchido quando a página oficial da clínica estiver definida.
const FACEBOOK_URL = "";

const imageUrls = {
  hero:
    "https://files.manuscdn.com/search-media/310519663970320780/8p9Mx9QinVznWqwjkXgO2n/RVZPvnvQjpR5fSU5vXA49U.jpg",
  clinic:
    "https://files.manuscdn.com/search-media/310519663970320780/8p9Mx9QinVznWqwjkXgO2n/QE4pCofLb64GQgueaWq3kQ.jpg",
  performance:
    "https://files.manuscdn.com/search-media/310519663970320780/8p9Mx9QinVznWqwjkXgO2n/9QvetBjTcWBJLC9rWTtaxD.jpg",
  biomechanics:
    "https://files.manuscdn.com/search-media/310519663970320780/8p9Mx9QinVznWqwjkXgO2n/7v5S2xJntTXdqg9cDWtTPf.jpg",
  strength:
    "https://files.manuscdn.com/search-media/310519663970320780/8p9Mx9QinVznWqwjkXgO2n/ysExrWcwUzByeT8CKAfqtY.jpg",
};

type IconType = LucideIcon;

type Service = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
};

const services: Service[] = [
  {
    number: "01",
    title: "Fisioterapia ortopédica",
    description:
      "Tratamento e acompanhamento de dores, lesões e alterações musculoesqueléticas.",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Fisioterapia esportiva",
    description:
      "Preparação, recuperação e acompanhamento de atletas e praticantes de atividade física.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Recovery",
    description:
      "Estratégias para reduzir a sobrecarga, recuperar o corpo e preparar novos estímulos.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Avaliação biomecânica",
    description:
      "Análise do movimento para identificar padrões, limitações e oportunidades de evolução.",
    icon: ScanLine,
  },
  {
    number: "05",
    title: "Performance",
    description:
      "Trabalho direcionado à evolução da capacidade física e funcional com segurança.",
    icon: Dumbbell,
  },
  {
    number: "06",
    title: "Reabilitação",
    description:
      "Acompanhamento progressivo para o retorno seguro às atividades e objetivos.",
    icon: MoveUpRight,
  },
];

const specialties = [
  "Fisioterapia ortopédica",
  "Fisioterapia esportiva",
  "Recovery",
  "Avaliação funcional",
  "Performance",
];

const processSteps = [
  {
    number: "01",
    title: "Avaliação",
    text: "Entendimento das necessidades, histórico e objetivos.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Definição do plano de tratamento mais adequado para você.",
  },
  {
    number: "03",
    title: "Evolução",
    text: "Acompanhamento próximo da resposta ao tratamento.",
  },
  {
    number: "04",
    title: "Retorno ao movimento",
    text: "Progressão para suas atividades e objetivos com confiança.",
  },
];

const instagramTiles = [
  { image: imageUrls.performance, label: "Movimento" },
  { image: imageUrls.biomechanics, label: "Avaliação" },
  { image: imageUrls.strength, label: "Performance" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="brand-lockup" aria-label="Inmove — voltar ao início">
      <img className="brand-logo-image" src={LOGO_URL} alt="Logo Inmove" />
      <span className={`brand-name ${light ? "brand-name--light" : ""}`}>
        inmove
        <small>recovery & fisioterapia</small>
      </span>
    </a>
  );
}

function WhatsAppButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
}) {
  return (
    <a
      className={`button button--${variant} ${className}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 26);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container header-inner">
          <Logo />
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}>
            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>
            <a href="#clinica" onClick={closeMenu}>
              A clínica
            </a>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#performance" onClick={closeMenu}>
              Performance
            </a>
            <a href="#depoimentos" onClick={closeMenu}>
              Depoimentos
            </a>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
            <WhatsAppButton className="nav-cta">Agendar horário</WhatsAppButton>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-line" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <p className="eyebrow">Fisioterapia · Recovery · Performance</p>
              <h1>
                Movimento
                <br />
                <em>com propósito.</em>
                <br />
                Recuperação com estratégia.
              </h1>
              <p className="hero-text">
                Cuidado especializado para quem busca recuperar movimentos, tratar
                dores e evoluir sua performance com segurança.
              </p>
              <div className="hero-actions">
                <WhatsAppButton>Agendar meu horário</WhatsAppButton>
                <a className="text-link" href="#clinica">
                  Conhecer a clínica <ArrowRight size={16} />
                </a>
              </div>
              <div className="hero-booking-note">
                <MessageCircle size={15} />
                <span>
                  <strong>Agendamento direto pelo WhatsApp</strong>
                  <small>Resposta da equipe da Inmove</small>
                </span>
              </div>
              <div className="hero-note">
                <span className="note-line" />
                <span>Campo Largo · Paraná</span>
              </div>
            </div>

            <div className="hero-visual reveal-up reveal-delay-1">
              <div className="hero-image-wrap">
                <img
                  src={imageUrls.hero}
                  alt="Atendimento de fisioterapia esportiva"
                  fetchPriority="high"
                />
                <div className="hero-image-caption">
                  <span>01</span>
                  <span>Seu movimento, no centro.</span>
                </div>
              </div>
              <div className="hero-side-note">
                <span>iM</span>
                <span>Recovery<br />& Fisioterapia</span>
              </div>
            </div>
          </div>
        </section>

        <section className="specialties section-light" aria-label="Especialidades">
          <div className="container">
            <div className="specialties-head">
              <p className="eyebrow eyebrow--blue">Cuidado especializado</p>
              <p className="specialties-intro">
                Diferentes caminhos para acompanhar cada momento do seu movimento.
              </p>
            </div>
            <div className="specialty-list">
              {specialties.map((specialty, index) => (
                <div className="specialty-item" key={specialty}>
                  <span className="specialty-index">0{index + 1}</span>
                  <span>{specialty}</span>
                  <Check size={16} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-light" id="clinica">
          <div className="container about-grid">
            <div className="about-media reveal-up">
              <div className="about-image-main">
                <img
                  src={imageUrls.clinic}
                  alt="Espaço de atendimento para fisioterapia"
                  loading="lazy"
                />
              </div>
              <div className="about-stamp">
                <span>INMOVE</span>
                <span>Recovery<br />& Fisioterapia</span>
              </div>
              <div className="about-coordinate">25°27'35.0"S · 49°31'40.0"W</div>
            </div>
            <div className="about-copy reveal-up reveal-delay-1">
              <p className="eyebrow eyebrow--blue">A Inmove</p>
              <h2>
                Mais do que tratar.
                <br />
                <em>Entender o movimento.</em>
              </h2>
              <p>
                Na Inmove, cada atendimento começa com escuta e avaliação. Em vez de
                tratar apenas o sintoma, buscamos compreender a origem das limitações
                para construir um caminho de recuperação que faça sentido para a sua
                rotina, seu corpo e seus objetivos.
              </p>
              <p>
                Uma abordagem individualizada, com ciência, experiência e atenção aos
                detalhes — para você voltar a fazer o que gosta com mais confiança.
              </p>
              <a className="arrow-link" href="#servicos">
                Conheça nossa abordagem <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="services section-mist" id="servicos">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow eyebrow--blue">Como podemos ajudar</p>
                <h2>Nossos serviços</h2>
              </div>
              <p>
                Estratégias personalizadas para diferentes necessidades e objetivos —
                do cuidado à evolução.
              </p>
            </div>
            <div className="services-grid">
              {services.map(({ number, title, description, icon: Icon }) => (
                <article className="service-card" key={title}>
                  <div className="service-card-top">
                    <span className="service-number">{number}</span>
                    <Icon size={22} strokeWidth={1.4} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#contato" className="service-link">
                    Saiba mais <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="performance" id="performance">
          <img
            className="performance-image"
            src={imageUrls.performance}
            alt="Atleta em treinamento de performance"
            loading="lazy"
          />
          <div className="performance-overlay" />
          <div className="container performance-content">
            <p className="eyebrow eyebrow--light">Performance com estratégia</p>
            <h2>
              Seu corpo também
              <br />
              <em>precisa de estratégia.</em>
            </h2>
            <p>
              Performance não começa apenas quando você treina. Começa quando entende
              como seu corpo se movimenta.
            </p>
            <a className="button button--light" href="#biomecanica">
              Quero saber mais <ArrowUpRight size={16} />
            </a>
          </div>
          <span className="performance-index">02 / 05</span>
        </section>

        <section className="biomechanics section-light" id="biomecanica">
          <div className="container biomechanics-grid">
            <div className="biomechanics-copy reveal-up">
              <p className="eyebrow eyebrow--blue">Avaliação funcional</p>
              <h2>
                Entenda como
                <br />
                <em>você se movimenta.</em>
              </h2>
              <p>
                Uma análise detalhada do movimento pode revelar informações importantes
                para prevenção, recuperação e evolução da performance.
              </p>
              <ul className="check-list">
                <li>
                  <Check size={15} /> Identificação de padrões de movimento
                </li>
                <li>
                  <Check size={15} /> Observação de limitações e compensações
                </li>
                <li>
                  <Check size={15} /> Estratégia para evoluir com mais segurança
                </li>
              </ul>
              <WhatsAppButton>Agendar avaliação</WhatsAppButton>
            </div>
            <div className="biomechanics-media reveal-up reveal-delay-1">
              <img
                src={imageUrls.biomechanics}
                alt="Avaliação funcional de movimento"
                loading="lazy"
              />
              <div className="media-label">Movimento em análise <span>↗</span></div>
            </div>
          </div>
        </section>

        <section className="process section-mist">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow--blue">Como funciona</p>
              <h2>Seu tratamento, passo a passo.</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step) => (
                <div className="process-step" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team section-light">
          <div className="container team-grid">
            <div>
              <p className="eyebrow eyebrow--blue">Presença e cuidado</p>
              <h2>
                Profissionais que
                <br />
                <em>entendem o movimento.</em>
              </h2>
              <p className="team-copy">
                A experiência Inmove é construída com atendimento próximo, olhar
                clínico e um plano que respeita o seu tempo.
              </p>
              <div className="team-note">
                <span className="team-note-line" />
                <span>Conheça a equipe diretamente na clínica.</span>
              </div>
            </div>
            <div className="team-visual">
              <img
                src={imageUrls.strength}
                alt="Atendimento de performance em ambiente clínico"
                loading="lazy"
              />
              <div className="team-placeholder">
                <span className="placeholder-dot" />
                <span>Fotos da equipe<br />em breve</span>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials section-mist" id="depoimentos">
          <div className="container testimonials-inner">
            <div className="section-heading section-heading--center">
              <p className="eyebrow eyebrow--blue">Experiências reais</p>
              <h2>O cuidado que continua<br /><em>depois da sessão.</em></h2>
            </div>
            <div className="testimonials-empty">
              <span className="quote-mark">“</span>
              <p>
                Os depoimentos de pacientes da Inmove serão publicados aqui assim que
                forem aprovados pela clínica.
              </p>
              <span className="empty-caption">Conteúdo real, com autorização real.</span>
            </div>
          </div>
        </section>

        <section className="instagram section-light" id="instagram">
          <div className="container">
            <div className="section-heading section-heading--split instagram-heading">
              <div>
                <p className="eyebrow eyebrow--blue">Por dentro da Inmove</p>
                <h2>Acompanhe a Inmove</h2>
              </div>
              <div>
                <p>Conteúdos sobre movimento, fisioterapia, recuperação e performance.</p>
                <a className="arrow-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  @inmoverecovery <Instagram size={17} />
                </a>
              </div>
            </div>
            <div className="instagram-grid">
              {instagramTiles.map((tile) => (
                <a
                  className="instagram-tile"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  key={tile.label}
                >
                  <img src={tile.image} alt={`Inmove — ${tile.label}`} loading="lazy" />
                  <span>{tile.label} <ArrowUpRight size={15} /></span>
                </a>
              ))}
            </div>
            <div className="instagram-cta">
              <a className="button button--outline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Seguir no Instagram <Instagram size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="location section-mist" id="contato">
          <div className="container location-grid">
            <div className="location-copy">
              <p className="eyebrow eyebrow--blue">Onde estamos</p>
              <h2>
                Estamos em
                <br />
                <em>Campo Largo.</em>
              </h2>
              <div className="address-block">
                <MapPin size={19} strokeWidth={1.5} />
                <p>
                  Rua Joaquim Ribas de Andrade, 780 — Sala 4
                  <br />
                  Campo Largo — PR
                </p>
              </div>
              <div className="location-actions">
                <a
                  className="arrow-link"
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Joaquim+Ribas+de+Andrade%2C+780%2C+Campo+Largo%2C+PR"
                  target="_blank"
                  rel="noreferrer"
                >
                  Como chegar <ArrowUpRight size={16} />
                </a>
                <a className="phone-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  (41) 99778-0418
                </a>
              </div>
            </div>
            <div className="map-frame">
              <iframe
                className="map-view"
                title="Mapa da Inmove Recovery e Fisioterapia"
                src="https://www.google.com/maps?q=Rua+Joaquim+Ribas+de+Andrade%2C+780%2C+Campo+Largo%2C+PR&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-label">
                <span className="map-pulse" />
                Inmove Recovery e Fisioterapia
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-orbit final-cta-orbit--one" />
          <div className="final-cta-orbit final-cta-orbit--two" />
          <div className="container final-cta-inner">
            <p className="eyebrow eyebrow--light">O próximo movimento é seu</p>
            <h2>
              Pronto para voltar
              <br />
              a se <em>movimentar melhor?</em>
            </h2>
            <p>Agende uma avaliação e converse com nossa equipe.</p>
            <WhatsAppButton variant="light">Agendar meu horário</WhatsAppButton>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>
              Fisioterapia, recovery e performance para você viver o movimento com mais
              confiança.
            </p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Navegue</span>
            <a href="#inicio">Início</a>
            <a href="#clinica">A clínica</a>
            <a href="#servicos">Serviços</a>
            <a href="#performance">Performance</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Fale com a gente</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="#contato">Localização</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
            {FACEBOOK_URL ? (
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook</a>
            ) : (
              <span className="footer-muted">Facebook em breve</span>
            )}
          </div>
          <div className="footer-column footer-address">
            <span className="footer-label">Endereço</span>
            <p>
              Rua Joaquim Ribas de Andrade, 780 — Sala 4<br />
              Campo Largo — PR
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">(41) 99778-0418</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Inmove Recovery e Fisioterapia.</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale com a Inmove pelo WhatsApp"
      >
        <MessageCircle size={22} strokeWidth={1.7} />
        <span>Fale com a Inmove</span>
      </a>
    </div>
  );
}
