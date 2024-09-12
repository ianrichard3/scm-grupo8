const DomicilioForm = ({
  title,
  formData,
  handleNestedChange,
  nextStep,
  prevStep,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <label>
        Calle y Número:
        <input
          type="text"
          value={formData.calle}
          onChange={(e) => handleNestedChange(e, "calle")}
        />
      </label>
      <label>
        Localidad:
        <input
          type="text"
          value={formData.localidad}
          onChange={(e) => handleNestedChange(e, "localidad")}
        />
      </label>
      <label>
        Provincia:
        <input
          type="text"
          value={formData.provincia}
          onChange={(e) => handleNestedChange(e, "provincia")}
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
      <button onClick={prevStep}>Anterior</button>
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};

export default DomicilioForm;
