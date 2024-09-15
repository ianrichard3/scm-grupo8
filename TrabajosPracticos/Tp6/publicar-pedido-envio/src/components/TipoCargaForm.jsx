import "../App.css";

const TipoCargaForm = ({ value, name, handleChange }) => {
  return (
    <>
      <div className="tipoCargaContainer">
        <h3 className="subtitle">Tipo de carga</h3>
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
