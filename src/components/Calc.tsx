import { ReactNode } from "react";
import styles from "../styles/Estilos.module.css";

interface Props {
  children: ReactNode;
}

function Calc(props: Props) {
  const { children } = props;
  return <div className={styles.calc}>{children}</div>;
}
export default Calc;
