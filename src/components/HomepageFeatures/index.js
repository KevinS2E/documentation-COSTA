import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const guideCards = [
  {
    title: 'Reinicio del docking station',
    description:
      'Pasos simples para recuperar monitores, USB y red después de un apagón eléctrico.',
    to: '/docs/docking/reinicio-docking',
    label: 'Abrir guía',
  },
  {
    title: 'Reinicio de la laptop',
    description:
      'Instrucciones claras para restablecer la laptop y volver a trabajar con el docking.',
    to: '/docs/laptop/reinicio-laptop',
    label: 'Abrir guía',
  },
  {
    title: 'Guía de soporte TI',
    description:
      'Resumen general para saber cuándo usar estas instrucciones y cuándo escalar a soporte.',
    to: '/docs/intro',
    label: 'Ver introducción',
  },
];

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
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Acceso rápido</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Lo esencial para resolver fallas después de un apagón
          </Heading>
          <p className={styles.sectionIntro}>
            Esta documentación está pensada para que cualquier usuario pueda seguirla sin conocimientos técnicos.
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
