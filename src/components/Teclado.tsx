import Boton from "./Boton";
import styles from "../styles/Estilos.module.css";

interface TecladoProps {
  handleButtonClick: (simbolo: string) => void;
}

function Teclado({ handleButtonClick }: TecladoProps) {
  const simbolos = [
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "-",
    ".",
    "0",
    "=",
    "+",
  ];
  return (
    <div className={styles.teclado}>
      {simbolos.map((simbolo) => (
        <Boton
          key={simbolo}
          simbolo={simbolo}
          onClick={() => handleButtonClick(simbolo)}
        />
      ))}
      <Boton onClick={handleButtonClick} key={"C"} simbolo="C" />
    </div>
  );
}
export default Teclado;
