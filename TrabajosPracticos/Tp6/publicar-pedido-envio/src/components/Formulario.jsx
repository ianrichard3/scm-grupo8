import { useState } from "react";

const Formulario = ({ onSubmit }) => {
  const initialState = {
    tipoCarga: "",
    domicilioRetiro: {
      calle: "",
      localidad: "",
      provincia: "",
      referencia: "",
    },
    fechaRetiro: "",
    domicilioEntrega: {
      calle: "",
      localidad: "",
      provincia: "",
      referencia: "",
    },
    fechaEntrega: "",
    fotos: [],
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (e, field, parent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [parent]: {
        ...formData[parent],
        [field]: value,
      },
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, fotos: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (
      new Date(formData.fechaRetiro) < new Date() ||
      new Date(formData.fechaEntrega) < new Date(formData.fechaRetiro)
    ) {
      alert("Las fechas no son válidas");
      return;
    }
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="tipoCargaContainer" style={{ marginBottom: "10px" }}>
        <label>
          Tipo de carga
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
      </div>

      <div
        className="domicilioRetiroContainer"
        style={{ marginBottom: "10px" }}
      >
        <h3>Domicilio de Retiro</h3>

        <label>
          Provincia
          <input
            type="text"
            value={formData.domicilioRetiro.provincia}
            onChange={(e) =>
              handleNestedChange(e, "provincia", "domicilioRetiro")
            }
          />
        </label>
        <label>
          Localidad
          <input
            type="text"
            value={formData.domicilioRetiro.localidad}
            onChange={(e) =>
              handleNestedChange(e, "localidad", "domicilioRetiro")
            }
          />
        </label>
        <label>
          Calle y Número
          <input
            type="text"
            value={formData.domicilioRetiro.calle}
            onChange={(e) => handleNestedChange(e, "calle", "domicilioRetiro")}
          />
        </label>
        <label>
          Referencia
          <input
            type="text"
            value={formData.domicilioRetiro.referencia}
            onChange={(e) =>
              handleNestedChange(e, "referencia", "domicilioRetiro")
            }
            placeholder="Opcional"
          />
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label className="dateLabel">
          Fecha de Retiro
          <input
            type="date"
            name="fechaRetiro"
            value={formData.fechaRetiro}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
        </label>
      </div>

      <div
        className="domicilioEntregaContainer"
        style={{ marginBottom: "10px" }}
      >
        <h3>Domicilio de Entrega</h3>

        <label>
          Provincia
          <input
            type="text"
            value={formData.domicilioEntrega.provincia}
            onChange={(e) =>
              handleNestedChange(e, "provincia", "domicilioEntrega")
            }
          />
          <label>
            Localidad
            <input
              type="text"
              value={formData.domicilioEntrega.localidad}
              onChange={(e) =>
                handleNestedChange(e, "localidad", "domicilioEntrega")
              }
            />
          </label>
          <label>
            Calle y Número
            <input
              type="text"
              value={formData.domicilioEntrega.calle}
              onChange={(e) =>
                handleNestedChange(e, "calle", "domicilioEntrega")
              }
            />
          </label>
        </label>
        <label>
          Referencia
          <input
            type="text"
            value={formData.domicilioEntrega.referencia}
            onChange={(e) =>
              handleNestedChange(e, "referencia", "domicilioEntrega")
            }
            placeholder="Opcional"
          />
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label className="dateLabel">
          Fecha de Entrega
          <input
            type="date"
            name="fechaEntrega"
            value={formData.fechaEntrega}
            onChange={handleChange}
            min={formData.fechaRetiro}
          />
        </label>
      </div>

      <div className="adjuntarFotosContainer" style={{ marginBottom: "10px" }}>
        <label>
          Adjuntar Fotos (Opcional)
          <input
            type="file"
            multiple
            accept=".jpg, .png"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
