import { useState } from "react";
import Calc from "./components/Calc";
import Pantalla from "./components/Pantalla";
import Teclado from "./components/Teclado";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const handleButtonClick = (simbolo: string) => {
    if (simbolo === "=") {
      try {
        const resp = eval(displayValue);
        setDisplayValue(resp);
      } catch {
        setDisplayValue("ERROR");
      }
    } else if (simbolo === "C") {
      setDisplayValue("");
    } else {
      setDisplayValue((prev) => prev + simbolo);
    }
  };
  return (
    <>
      <Calc>
        <Pantalla displayValue={displayValue} />
        <Teclado handleButtonClick={handleButtonClick} />
      </Calc>
    </>
  );
}

export default App;
