import "../App.css";

const TipoCargaForm = ({ value, name, handleChange }) => {
  return (
    <>
      <div className="tipoCargaContainer">
        <label>Tipo de carga</label>
        <select name={name} value={value} onChange={handleChange}>
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
