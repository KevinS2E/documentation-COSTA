import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Guía interna de TI para resolver problemas después de apagones eléctricos.">
      <main>
        <div className="container" style={{paddingTop: '2rem', paddingBottom: '1rem'}}>
          <div className="guide-hero">
            <span className="guide-kicker">Guía interna TI · soporte para usuarios finales</span>
            <Heading as="h1">Guía de Soporte TI</Heading>
            <p className="guide-summary">
              Instrucciones simples para ayudar a los usuarios de la empresa a resolver fallas
              después de apagones eléctricos, sin necesidad de conocimientos técnicos.
            </p>

            <div className="guide-meta">
              <span className="guide-pill">Docking station</span>
              <span className="guide-pill">Laptop</span>
              <span className="guide-pill">Monitores, USB y red</span>
            </div>

            <div className="guide-meta" style={{marginTop: '1.25rem'}}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Empezar aquí
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/docking/reinicio-docking">
                Ver docking
              </Link>
            </div>
          </div>

          <div className="guide-grid">
            <div className="guide-card">
              <h3>Qué resuelve</h3>
              <p>Problemas de energía, conexión y respuesta del equipo después de un apagón.</p>
            </div>
            <div className="guide-card">
              <h3>Cómo se usa</h3>
              <p>Primero el docking station, luego la laptop y finalmente soporte TI si sigue el fallo.</p>
            </div>
            <div className="guide-card">
              <h3>Para quién es</h3>
              <p>Usuarios no técnicos que necesitan una guía clara, rápida y segura.</p>
            </div>
          </div>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
