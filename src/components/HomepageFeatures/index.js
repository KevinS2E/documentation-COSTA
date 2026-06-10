import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

function getGuideCards() {
  return [
    {
      title: translate({
        id: 'homepageFeatures.guideCards.intro.title',
        message: 'Guía de soporte TI',
      }),
      description: translate({
        id: 'homepageFeatures.guideCards.intro.description',
        message:
          'Resumen general para saber cuándo usar estas instrucciones y cuándo escalar a soporte.',
      }),
      to: '/docs/intro',
      label: translate({
        id: 'homepageFeatures.guideCards.intro.label',
        message: 'Ver introducción',
      }),
    },
    {
      title: translate({
        id: 'homepageFeatures.guideCards.docking.title',
        message: 'Reinicio del docking station',
      }),
      description: translate({
        id: 'homepageFeatures.guideCards.docking.description',
        message:
          'Pasos simples para recuperar monitores, USB y red después de un apagón eléctrico.',
      }),
      to: '/docs/docking/reinicio-docking',
      label: translate({
        id: 'homepageFeatures.guideCards.docking.label',
        message: 'Abrir guía',
      }),
    },
    {
      title: translate({
        id: 'homepageFeatures.guideCards.laptop.title',
        message: 'Reinicio de la laptop',
      }),
      description: translate({
        id: 'homepageFeatures.guideCards.laptop.description',
        message:
          'Instrucciones claras para restablecer la laptop y volver a trabajar con el docking.',
      }),
      to: '/docs/laptop/reinicio-laptop',
      label: translate({
        id: 'homepageFeatures.guideCards.laptop.label',
        message: 'Abrir guía',
      }),
    },
  ];
}

function GuideCard({title, description, to, label}) {
  return (
    <article className={styles.card}>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
      <Link className={clsx('button button--secondary button--sm', styles.cardButton)} to={to}>
        {label}
      </Link>
    </article>
  );
}

export default function HomepageFeatures() {
  const guideCards = getGuideCards();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>
            {translate({
              id: 'homepageFeatures.kicker',
              message: 'Acceso rápido',
            })}
          </span>
          <Heading as="h2" className={styles.sectionTitle}>
            {translate({
              id: 'homepageFeatures.title',
              message: 'Lo esencial para resolver fallas después de un apagón',
            })}
          </Heading>
          <p className={styles.sectionIntro}>
            {translate({
              id: 'homepageFeatures.intro',
              message:
                'Esta documentación está pensada para que cualquier usuario pueda seguirla sin conocimientos técnicos.',
            })}
          </p>
        </div>

        <div className={styles.grid}>
          {guideCards.map((card) => (
            <GuideCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
