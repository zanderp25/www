import styles from '../styles/Components/cardSection.module.css';

export default function CardSection({ overlap, children }) {
  let className = overlap? styles.cardSectionOverlap : styles.cardSection;

  return (
    <section className={className}>
      {children}
    </section>
  );
}