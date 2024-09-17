import { useEffect, useState } from "react";
import { provincias } from "../data/mockData";

const DomicilioForm = ({
  onChange,
  tipoFormulario,
  dataDomicilioForm,
  fechaRetiro,
}) => {
  const [formData, setFormData] = useState(dataDomicilioForm);
  const [error, setError] = useState(
    !dataDomicilioForm.provincia ||
      !dataDomicilioForm.localidad ||
      !dataDomicilioForm.calle ||
      !dataDomicilioForm.numero ||
      !dataDomicilioForm.fecha
  );

  useEffect(() => {
    if (
      fechaRetiro &&
      new Date(fechaRetiro) > new Date(dataDomicilioForm.fecha)
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        fecha: fechaRetiro,
      }));
    }
  }, [fechaRetiro, dataDomicilioForm.fecha]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const { provincia, localidad, calle, numero, fecha } = formData;

    // Valida que todos los campos requeridos estén llenos
    const isError = !provincia || !localidad || !calle || !numero || !fecha;

    setError(isError);

    // Propaga los datos y el estado de error al componente padre
    onChange(formData, isError, tipoFormulario);
  }, [formData, onChange, tipoFormulario]);

  return (
    <form>
      <div className="domicilioContainer">
        <div className="fieldContainer">
          <label className="fieldLabel">Provincia*</label>
          <select
            name="provincia"
            value={formData.provincia}
            onChange={handleChange}
            className={error ? "errorField" : null}
          >
            <option value="">Seleccione..</option>
            {provincias.map((prov, index) => (
              <option key={index} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        <div className="fieldContainer">
          <label className="fieldLabel">Localidad*</label>
          <input
            type="text"
            name="localidad"
            value={formData.localidad}
            onChange={handleChange}
            className={error ? "errorField" : null}
          />
        </div>

        <div className="fieldContainer">
          <label className="fieldLabel">Calle*</label>
          <input
            type="text"
            name="calle"
            value={formData.calle}
            onChange={handleChange}
            className={error ? "errorField" : null}
          />
        </div>

        <div className="fieldContainer">
          <label className="fieldLabel">Número*</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            className={error ? "errorField" : null}
          />
        </div>

        <div className="fieldContainer">
          <label className="fieldLabel">Referencia</label>
          <input
            type="text"
            name="referencia"
            value={formData.referencia}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </div>

        <div className="fieldContainer">
          <label className="fieldLabel">Fecha de {tipoFormulario}</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            min={
              fechaRetiro ? fechaRetiro : new Date().toISOString().split("T")[0]
            }
            className={error ? "errorField" : null}
          />
        </div>
      </div>
    </form>
  );
};

export default DomicilioForm;
