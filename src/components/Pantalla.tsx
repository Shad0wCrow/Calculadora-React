import styles from "../styles/Estilos.module.css";
interface PantallaProps {
  displayValue: string;
}
function Pantalla({ displayValue }: PantallaProps) {
  return <div className={styles.pantalla}>{displayValue}</div>;
}
export default Pantalla;
