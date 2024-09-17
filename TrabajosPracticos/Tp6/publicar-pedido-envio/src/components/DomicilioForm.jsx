import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DomicilioForm = ({ value, name, tipoFormulario, handleChange }) => {
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState(value.provincia || '');

  // Obtener provincias al cargar el componente
  useEffect(() => {
    const fetchProvincias = async () => {
      try {
        const response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias?orden=nombre');
        setProvincias(response.data.provincias);
      } catch (error) {
        console.error('Error al obtener las provincias:', error);
      }
    };
    fetchProvincias();
  }, []);

  // Actualizar localidades cuando se selecciona una provincia
  useEffect(() => {
    const fetchLocalidades = async () => {
      if (provinciaSeleccionada) {
        try {
          const response = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?max=1000&orden=nombre&provincia=${provinciaSeleccionada}`);
          setLocalidades(response.data.localidades);
        } catch (error) {
          console.error('Error al obtener las localidades:', error);
        }
      }
    };
    fetchLocalidades();
  }, [provinciaSeleccionada]);

  return (
    <div className="domicilioContainer">
      <div className="fieldContainer">
        <label className="fieldLabel">Provincia</label>
        <select
          value={provinciaSeleccionada}
          onChange={(e) => {
            setProvinciaSeleccionada(e.target.value);
            handleChange(e); // Actualiza el valor del formulario padre
          }}
          name={`provincia${name}`}>
          <option value="">Seleccione..</option>
          {provincias.map((provincia) => (
            <option key={provincia.id} value={provincia.id}>
              {provincia.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="fieldContainer">
        <label className="fieldLabel">Localidad</label>
        <select
          value={value.localidad}
          onChange={handleChange}
          name={`localidad${name}`}>
          <option value="">Seleccione..</option>
          {localidades.map((localidad) => (
            <option key={localidad.id} value={localidad.nombre}>
              {localidad.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="fieldContainer">
        <label className="fieldLabel">Calle</label>
        <input
          type="text"
          value={value.calle}
          onChange={handleChange}
          name={`calle${name}`}
        />
      </div>

      <div className="fieldContainer">
        <label className="fieldLabel">Número</label>
        <input
          type="text"
          value={value.numero}
          onChange={handleChange}
          name={`numero${name}`}
        />
      </div>

      <div className="fieldContainer">
        <label className="fieldLabel">Referencia</label>
        <input
          type="text"
          name={`referencia${name}`}
          value={value.referencia}
          onChange={handleChange}
          placeholder="Opcional"
        />
      </div>

      <div className="fieldContainer">
        <label className="dateLabel fieldLabel">Fecha de {tipoFormulario}</label>
        <input
          type="date"
          value={value.fecha}
          name={`fecha${name}`}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
    </div>
  );
};

export default DomicilioForm;
