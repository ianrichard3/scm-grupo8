import { useState } from "react";

const DomicilioForm = ({ value, name, tipoFormulario, handleChange }) => {
  return (
    <>
      <div className="domicilioContainer" style={{ marginBottom: "10px" }}>
        <h3>Domicilio de {tipoFormulario}</h3>
        <label>
          Provincia
          <input
            type="text"
            value={value.provincia}
            onChange={handleChange}
            name={`provincia${name}`}
          />
        </label>
        <label>
          Localidad
          <input
            type="text"
            value={value.localidad}
            onChange={handleChange}
            name={`localidad${name}`}
          />
        </label>
        <label>
          Calle y Número
          <input
            type="text"
            value={value.calle}
            onChange={handleChange}
            name={`calle${name}`}
          />
        </label>
        <label>
          Referencia
          <input
            type="text"
            name={`referencia${name}`}
            value={value.referencia}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label className="dateLabel">
          Fecha de {tipoFormulario}
          <input
            type="date"
            value={value.fecha}
            name={`fecha${name}`}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
        </label>
      </div>
    </>
  );
};

export default DomicilioForm;
