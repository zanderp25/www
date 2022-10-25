import styles from './section.module.css';

export function CardSection({ overlap, children }) {
  let className = overlap? styles.cardSectionOverlap : styles.cardSection;

  return (
    <section className={className}>
      {children}
    </section>
  );
}