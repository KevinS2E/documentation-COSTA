import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

function getGuideCards() {
  return [
    {
      title: translate({
        id: 'homepageFeatures.guideCards.apagones.title',
        message: 'Recuperación después de apagones',
      }),
      description: translate({
        id: 'homepageFeatures.guideCards.apagones.description',
        message:
          'Pasos simples para recuperar el docking station, la laptop, monitores, USB y red después de un apagón eléctrico.',
      }),
      to: '/docs/intro',
      label: translate({
        id: 'homepageFeatures.guideCards.apagones.label',
        message: 'Ver guías',
      }),
    },
    {
      title: translate({
        id: 'homepageFeatures.guideCards.seguridad.title',
        message: 'Seguridad y cuentas',
      }),
      description: translate({
        id: 'homepageFeatures.guideCards.seguridad.description',
        message:
          'Cómo reconocer correos de phishing y reportarlos para mantener el acceso a tus cuentas de forma segura.',
      }),
      to: '/docs/seguridad',
      label: translate({
        id: 'homepageFeatures.guideCards.seguridad.label',
        message: 'Ver guías',
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
              message: 'Encontrá la guía que necesitás, por categoría',
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
