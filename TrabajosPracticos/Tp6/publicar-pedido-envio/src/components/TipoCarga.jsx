const TipoCarga = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
      <h2>Selecciona el Tipo de Carga</h2>
      <label>
        Tipo de carga:
        <select
          name="tipoCarga"
          value={formData.tipoCarga}
          onChange={handleChange}
        >
          <option value="">Seleccione...</option>
          <option value="documentacion">Documentación</option>
          <option value="paquete">Paquete</option>
          <option value="granos">Granos</option>
          <option value="hacienda">Hacienda</option>
        </select>
      </label>
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};

export default TipoCarga;
