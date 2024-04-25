import styles from "./Header.module.css";
import tartarugaLogo from '../assets/tartaruga.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={tartarugaLogo} alt="Tartaruga voando no cabeçalho" />
    </header>
  );
}