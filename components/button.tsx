import Link from "next/link";
import styles from "../styles/Components/button.module.css";

export function Button({href, disabled, children}: {href: string, disabled?: boolean, children: any}) {
  return (
    <Link href={href}>
      <button className={styles.button} disabled={!!disabled}>{children}</button>
    </Link>
  );
}
