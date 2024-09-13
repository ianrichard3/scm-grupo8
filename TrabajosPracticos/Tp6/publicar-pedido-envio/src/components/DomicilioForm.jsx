import { provincias } from "../data"; 


const DomicilioForm = ({ title, formData, handleNestedChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2>{title}</h2>
      <label>
        Provincia:
        <select
          value={formData.provincia}
          onChange={(e) => handleNestedChange(e, "provincia")}
        >
          <option value="">Seleccione una provincia...</option>
          {provincias.map((provincia, index) => (
            <option key={index} value={provincia}>
              {provincia}
            </option>
          ))}
        </select>
      </label>
      <label>
        Localidad:
        <input
          type="text"
          value={formData.localidad}
          onChange={(e) => handleNestedChange(e, "localidad")}
          placeholder="Escribir localidad"
        />
      </label>
      <label>
        Calle y Número:
        <input
          type="text"
          value={formData.calle}
          onChange={(e) => handleNestedChange(e, "calle")}
          placeholder="Calle + Número"
        />
      </label>
      <label>
        Referencia:
        <input
          type="text"
          value={formData.referencia}
          onChange={(e) => handleNestedChange(e, "referencia")}
          placeholder="Opcional"
        />
      </label>
      <label>
        Fecha de {title.includes("Retiro") ? "Retiro" : "Entrega"}:
        <input
          type="date"
          value={formData.fecha}
          onChange={(e) => handleNestedChange(e, "fecha")}
        />
      </label>
      <button onClick={prevStep}>Anterior</button>
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};

export default DomicilioForm;
