import { useState } from "react";
import "../App.css";

const TipoCargaForm = ({ onChange, dataTipoCarga }) => {
  const [tipoCarga, setTipoCarga] = useState(dataTipoCarga);
  const [error, setError] = useState(dataTipoCarga === "");

  const handleChange = (e) => {
    const newValue = e.target.value;
    let isError = false;

    // validaciones
    if (newValue === "") isError = true;
    else isError = false;

    setTipoCarga(newValue);
    setError(isError);
    onChange(newValue, isError);
  };

  return (
    <>
      <div className="tipoCargaContainer">
        <h3 className="subtitle">Tipo de carga</h3>
        <select
          value={tipoCarga}
          onChange={handleChange}
          className={error ? "errorField" : null}
        >
          <option value="">Seleccione...</option>
          <option value="documentacion">Documentación</option>
          <option value="paquete">Paquete</option>
          <option value="granos">Granos</option>
          <option value="hacienda">Hacienda</option>
        </select>
      </div>
    </>
  );
};

export default TipoCargaForm;
