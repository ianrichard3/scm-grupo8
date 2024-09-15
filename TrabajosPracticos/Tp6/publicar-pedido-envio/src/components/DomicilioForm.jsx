import { provincias } from "../data/mockData";

const DomicilioForm = ({ value, name, tipoFormulario, handleChange }) => {
  return (
    <>
      <div className="domicilioContainer">
        <h3>Domicilio de {tipoFormulario}</h3>

        <div className="fieldContainer">
          <label className="fieldLabel">
            Provincia
          </label>
          {/* <input
            type="text"
            value={value.provincia}
            onChange={handleChange}
            name={`provincia${name}`}
          /> */}
          <select
            value={value.provincia}
            onChange={handleChange}
            name={`provincia${name}`}>
            <option value="">Seleccione..</option>
            {provincias.map((provincia, index) => (
              <option key={index} value={provincia}>{provincia}</option>
            ))}

          </select>


        </div>


        <div className="fieldContainer">
          <label className="fieldLabel">
            Localidad
          </label>
          <input
            type="text"
            value={value.localidad}
            onChange={handleChange}
            name={`localidad${name}`}
          />
        </div>


        <div className="fieldContainer">
          <label className="fieldLabel">
            Calle
          </label>
          <input
            type="text"
            value={value.calle}
            onChange={handleChange}
            name={`calle${name}`}
          />
        </div>


        <div className="fieldContainer">
          <label className="fieldLabel">
            Número
          </label>
          <input
            type="text"
            value={value.numero}
            onChange={handleChange}
            name={`numero${name}`}
          />
        </div>


        <div className="fieldContainer">
          <label className="fieldLabel">
            Referencia
          </label>
          <input
            type="text"
            name={`referencia${name}`}
            value={value.referencia}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </div>


        <div className="fieldContainer">
          <label className="dateLabel fieldLabel">
            Fecha de {tipoFormulario}
          </label>
          <input
            type="date"
            value={value.fecha}
            name={`fecha${name}`}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
    </>
  );
};

export default DomicilioForm;
