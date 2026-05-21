import "./style.css";
import SpotlightCard from "./components/SpotlightCard";
import BorderGlow from "./components/BorderGlow";
import LogoLoop from "./components/LogoLoop";
import SplitText from "./components/SplitText";
import Mouse3D from "./components/Mouse3D";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    node: <FaInstagram />,
    title: "Instagram",
    href: "https://www.instagram.com/marion.bolos.de.sonho?igsh=cXd1cjY5MHlzYXZu&utm_source=qr",
  },
  {
    node: <FaWhatsapp />,
    title: "WhatsApp",
    href: "https://wa.me/244934371373",
  },
  {
    node: <FaInstagram />,
    title: "Instagram",
    href: "https://www.instagram.com/marion.bolos.de.sonho?igsh=cXd1cjY5MHlzYXZu&utm_source=qr",
  },
  {
    node: <FaWhatsapp />,
    title: "WhatsApp",
    href: "https://wa.me/244934371373",
  },
];

function App() {
  return (
    <main className="page">
      <BorderGlow className="nav-wrapper">
        <header className="nav glass">
          <div className="brand">
            <span>♡</span>

            <div>
              <h1>MARION</h1>
              <p>Bolos de Sonho</p>
            </div>
          </div>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#encomendas">Encomendas</a>
            <a href="#contactos">Contactos</a>
          </nav>

          <a
            className="nav-btn"
            href="https://wa.me/244934371373"
            target="_blank"
          >
            WhatsApp
          </a>
        </header>
      </BorderGlow>

      <section id="inicio" className="hero">
        <Mouse3D intensity={6}>
          <BorderGlow className="hero-glow">
            <div className="hero-text glass">
              <p className="small">FEITO COM AMOR • BOLOS ARTESANAIS</p>

              <SplitText
                text="Bolos de sonho para momentos especiais"
                className="hero-title"
                tag="h2"
                delay={120}
                duration={2}
                splitType="words"
              />

              <p className="desc">
                Criamos bolos personalizados, sobremesas, salgados e catering
                premium para aniversários, casamentos e eventos.
              </p>

              <div className="actions">
                <a href="https://wa.me/244934371373" target="_blank">
                  Fazer pedido
                </a>

                <a className="secondary" href="#servicos">
                  Ver serviços
                </a>
              </div>
            </div>
          </BorderGlow>
        </Mouse3D>

        <Mouse3D intensity={7}>
          <BorderGlow className="photo-glow">
            <div className="hero-photo">
              <img
                src="/imagens/bolo-hero.png"
                alt="Bolo Marion"
                className="hero-cake"
              />
            </div>
          </BorderGlow>
        </Mouse3D>
      </section>

      <section id="servicos" className="services">
        <BorderGlow className="title-glow">
          <div className="section-title glass">
            <p className="small">OS NOSSOS SERVIÇOS</p>

            <SplitText
              text="Doces, bolos e catering"
              className="section-heading"
              tag="h2"
              delay={110}
              duration={1.8}
              splitType="words"
              textAlign="center"
            />
          </div>
        </BorderGlow>

        <div className="grid">
          <Mouse3D>
            <BorderGlow>
              <SpotlightCard className="card cake-spotlight">
                <img src="/imagens/bolo-hero.png" alt="Bolos personalizados" />

                <SplitText
                  text="Bolos personalizados"
                  className="card-title"
                  tag="h3"
                  delay={80}
                  duration={1.4}
                />

                <p>Bolos premium personalizados para aniversários e eventos.</p>
              </SpotlightCard>
            </BorderGlow>
          </Mouse3D>

          <Mouse3D>
            <BorderGlow>
              <SpotlightCard className="card cake-spotlight">
                <img src="/imagens/bolo-floral.png" alt="Bolos variados" />

                <SplitText
                  text="Bolos variados"
                  className="card-title"
                  tag="h3"
                  delay={80}
                  duration={1.4}
                />

                <p>Designs modernos e elegantes feitos à medida.</p>
              </SpotlightCard>
            </BorderGlow>
          </Mouse3D>

          <Mouse3D>
            <BorderGlow>
              <SpotlightCard className="card cake-spotlight">
                <img src="/imagens/sobremesa-premium.png" alt="Sobremesas premium" />

                <SplitText
                  text="Sobremesas"
                  className="card-title"
                  tag="h3"
                  delay={80}
                  duration={1.4}
                />

                <p>Doces artesanais para festas e eventos especiais.</p>
              </SpotlightCard>
            </BorderGlow>
          </Mouse3D>

          <Mouse3D>
            <BorderGlow>
              <SpotlightCard className="card cake-spotlight">
                <img src="/imagens/catering-premium.png"
                  alt="Catering premium"
                  />

                <SplitText
                  text="Catering & Coffee Break"
                  className="card-title"
                  tag="h3"
                  delay={80}
                  duration={1.4}
                />

                <p>Salgados, tábuas e catering premium para eventos.</p>
              </SpotlightCard>
            </BorderGlow>
          </Mouse3D>
        </div>
      </section>

      <section id="encomendas" className="details">
        <Mouse3D intensity={8}>
          <BorderGlow>
            <article className="info-block">
              <span>🛵</span>

              <SplitText
                text="Entregas"
                className="info-title"
                tag="h3"
                delay={90}
                duration={1.5}
                textAlign="center"
              />

              <p>Fazemos entregas com taxa adicional conforme a zona.</p>
            </article>
          </BorderGlow>
        </Mouse3D>

        <Mouse3D intensity={8}>
          <BorderGlow>
            <article className="info-block">
              <span>⏰</span>

              <SplitText
                text="Horário"
                className="info-title"
                tag="h3"
                delay={90}
                duration={1.5}
                textAlign="center"
              />

              <p>Atendimento de segunda a sábado.</p>
            </article>
          </BorderGlow>
        </Mouse3D>

        <Mouse3D intensity={8}>
          <BorderGlow>
            <article className="info-block">
              <span>📅</span>

              <SplitText
                text="Pedidos"
                className="info-title"
                tag="h3"
                delay={90}
                duration={1.5}
                textAlign="center"
              />

              <p>Faça a sua encomenda com antecedência.</p>
            </article>
          </BorderGlow>
        </Mouse3D>
      </section>

      <Mouse3D intensity={5}>
        <BorderGlow className="cta-glow">
          <section className="cta glass">
            <div>
              <p className="small">FAÇA A SUA ENCOMENDA</p>

              <SplitText
                text="Pronta para adoçar o seu momento?"
                className="cta-title"
                tag="h2"
                delay={110}
                duration={1.8}
              />
            </div>

            <a href="https://wa.me/244934371373" target="_blank">
              Pedir pelo WhatsApp
            </a>
          </section>
        </BorderGlow>
      </Mouse3D>

      <BorderGlow className="footer-glow">
        <footer id="contactos" className="footer glass">
          <div className="footer-top">
            <div>
              <SplitText
                text="MARION"
                className="footer-title"
                tag="h2"
                delay={100}
                duration={1.5}
              />

              <p>Bolos de Sonho</p>

              <p>Bolos premium, sobremesas, catering e coffee breaks.</p>
            </div>

            <div>
              <SplitText
                text="Contactos"
                className="footer-heading"
                tag="h3"
                delay={90}
                duration={1.4}
              />

              <p>WhatsApp: +244 934 371 373</p>
              <p>Email: marionbolosdesonho@gmail.com</p>
            </div>

            <div>
              <SplitText
                text="Informações"
                className="footer-heading"
                tag="h3"
                delay={90}
                duration={1.4}
              />

              <p>Entregas disponíveis</p>
              <p>Encomendas por WhatsApp</p>
            </div>
          </div>

          <div className="footer-social">
            <LogoLoop
              logos={socialLinks}
              speed={65}
              direction="left"
              logoHeight={26}
              gap={24}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#24100c"
              ariaLabel="Redes sociais Marion"
            />
          </div>

          <div className="footer-bottom">
            <p>© 2026 MARION Bolos de Sonho.</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </footer>
      </BorderGlow>
    </main>
  );
}

export default App;