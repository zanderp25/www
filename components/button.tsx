import Link from "next/link";
import styles from "../styles/Components/button.module.css";

export function Button({href, disabled, children}: {href: string, disabled?: boolean, children: JSX.Element|string}): JSX.Element {
  return (
    <Link href={href}>
      <button className={styles.button} disabled={!!disabled}>{children}</button>
    </Link>
  );
}
