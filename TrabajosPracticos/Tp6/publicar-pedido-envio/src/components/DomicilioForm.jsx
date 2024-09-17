import { useEffect, useState } from "react";
import axios from "axios";

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

    const isError = !provincia || !localidad || !calle || !numero || !fecha;

    setError(isError);

    onChange(formData, isError, tipoFormulario);
  }, [formData, onChange, tipoFormulario]);


  // selectores
  const [provincias, setProvincias] = useState([])
  const [localidades, setLocalidades] = useState([])

  // Obtener provincias al cargar el componente
  useEffect(() => {
    const fetchProvincias = async () => {
      try {
        const response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias?orden=nombre');

        const responseDto = response.data.provincias.map((prov) => {
          return prov.nombre
        })

        setProvincias(responseDto);

      } catch (error) {
        console.error('Error al obtener las provincias:', error);
      }
    };
    fetchProvincias();
  }, []);

  // Actualizar localidades cuando se selecciona una provincia
  useEffect(() => {
    console.log("entro")
    const fetchLocalidades = async () => {
      if (formData.provincia) {
        try {
          const response = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?max=1000&orden=nombre&provincia=${formData.provincia}`);
          const responseDto = response.data.localidades.map((loc) => {
            return loc.nombre
          })
          console.log(response.data.localidades)
          setLocalidades(responseDto);
        } catch (error) {
          console.error('Error al obtener las localidades:', error);
        }
      }
      else {
        setLocalidades([])
      }
    };
    fetchLocalidades();
  }, [formData.provincia]);

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
          <select
            name="localidad"
            value={formData.localidad}
            onChange={handleChange}
            className={error ? "errorField" : null}
          >
            <option value="">Seleccione..</option>
            {localidades.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
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
