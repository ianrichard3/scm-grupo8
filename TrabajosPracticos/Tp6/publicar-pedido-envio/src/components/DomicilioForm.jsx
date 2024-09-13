import { useState } from "react";

const DomicilioForm = ({ value, name, tipoFormulario, handleChange }) => {
  return (
    <>
      <div className="domicilioContainer">
        <h3>Domicilio de {tipoFormulario}</h3>

        <label className="fieldLabel">
          Provincia
          <input
            type="text"
            value={value.provincia}
            onChange={handleChange}
            name={`provincia${name}`}
          />
        </label>

        <label className="fieldLabel">
          Localidad
          <input
            type="text"
            value={value.localidad}
            onChange={handleChange}
            name={`localidad${name}`}
          />
        </label>

        <label className="fieldLabel">
          Calle y Número
          <input
            type="text"
            value={value.calle}
            onChange={handleChange}
            name={`calle${name}`}
          />
        </label>

        <label className="fieldLabel">
          Referencia
          <input
            type="text"
            name={`referencia${name}`}
            value={value.referencia}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </label>

        <div>
          <label className="dateLabel fieldLabel">
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
      </div>
    </>
  );
};

export default DomicilioForm;
