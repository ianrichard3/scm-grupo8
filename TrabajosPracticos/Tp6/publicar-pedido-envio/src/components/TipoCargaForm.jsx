const TipoCargaForm = ({ value, name, handleChange }) => {
  return (
    <>
      <div className="tipoCargaContainer" style={{ marginBottom: "10px" }}>
        <label>
          Tipo de carga
          <select name={name} value={value} onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="documentacion">Documentación</option>
            <option value="paquete">Paquete</option>
            <option value="granos">Granos</option>
            <option value="hacienda">Hacienda</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default TipoCargaForm;
