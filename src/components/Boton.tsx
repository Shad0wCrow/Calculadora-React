import styles from "../styles/Estilos.module.css";

interface BotonProps {
  simbolo: string;
  onClick: (simbolo: string) => void;
}
function Boton({ simbolo, onClick }: BotonProps) {
  return (
    <button
      className={`${styles.boton} ${simbolo === "C" ? styles.especial : ""}`}
      onClick={() => onClick(simbolo)}
    >
      {simbolo}
    </button>
  );
}
export default Boton;
