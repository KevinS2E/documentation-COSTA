import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: 'home.description',
        message:
          'Guía interna de TI para resolver problemas después de apagones eléctricos.',
      })}>
      <main>
        <div className="container" style={{paddingTop: '2rem', paddingBottom: '1rem'}}>
          <div className="guide-hero">
            <span className="guide-kicker">
              {translate({
                id: 'home.kicker',
                message: 'Guía interna TI · soporte para usuarios finales',
              })}
            </span>
            <Heading as="h1">
              {translate({
                id: 'home.title',
                message: 'Guía de Soporte TI',
              })}
            </Heading>
            <p className="guide-summary">
              {translate({
                id: 'home.summary',
                message:
                  'Instrucciones simples para ayudar a los usuarios de la empresa a resolver fallas después de apagones eléctricos, sin necesidad de conocimientos técnicos.',
              })}
            </p>

            <div className="guide-meta">
              <span className="guide-pill">
                {translate({
                  id: 'home.pill.docking',
                  message: 'Guia de reinicio de Docking station',
                })}
              </span>
              <span className="guide-pill">
                {translate({
                  id: 'home.pill.laptop',
                  message: 'Guia de reinicio de Laptop',
                })}
              </span>
              <span className="guide-pill">
                {translate({
                  id: 'home.pill.devices',
                  message: 'Monitores, USB y red',
                })}
              </span>
            </div>

            <div className="guide-meta" style={{marginTop: '1.25rem'}}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                {translate({
                  id: 'home.primaryCta',
                  message: 'Empezar aquí',
                })}
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/docking/reinicio-docking">
                {translate({
                  id: 'home.secondaryCta',
                  message: 'Ver guía de reinicio de docking',
                })}
              </Link>
            </div>
          </div>

          <div className="guide-grid">
            <div className="guide-card">
              <h3>
                {translate({
                  id: 'home.cards.whatItSolves.title',
                  message: 'Qué resuelve',
                })}
              </h3>
              <p>
                {translate({
                  id: 'home.cards.whatItSolves.body',
                  message:
                    'Problemas de energía, conexión y respuesta del equipo después de un apagón.',
                })}
              </p>
            </div>
            <div className="guide-card">
              <h3>
                {translate({
                  id: 'home.cards.howToUse.title',
                  message: 'Cómo se usa',
                })}
              </h3>
              <p>
                {translate({
                  id: 'home.cards.howToUse.body',
                  message:
                    'Primero el docking station, luego la laptop y finalmente soporte TI si sigue el fallo.',
                })}
              </p>
            </div>
            <div className="guide-card">
              <h3>
                {translate({
                  id: 'home.cards.whoItsFor.title',
                  message: 'Para quién es',
                })}
              </h3>
              <p>
                {translate({
                  id: 'home.cards.whoItsFor.body',
                  message:
                    'Usuarios no técnicos que necesitan una guía clara, rápida y segura.',
                })}
              </p>
            </div>
          </div>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
