import { useState } from "react";
import DomicilioForm from "./DomicilioForm";
import TipoCargaForm from "./TipoCargaForm";
import AdjuntarFotosForm from "./AdjuntarFotosForm";

const Formulario = ({ onSubmit }) => {
  const initialState = {
    tipoCarga: "",

    calleRetiro: "",
    localidadRetiro: "",
    provinciaRetiro: "",
    referenciaRetiro: "",
    fechaRetiro: "",

    calleEntrega: "",
    localidadEntrega: "",
    provinciaEntrega: "",
    referenciaEntrega: "",
    fechaEntrega: "",

    fotos: [],
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
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
      <TipoCargaForm
        name="tipoCarga"
        value={formData.tipoCarga}
        handleChange={handleChange}
      />

      <DomicilioForm
        name={"Retiro"}
        value={{
          calle: formData.calleRetiro,
          localidad: formData.localidadRetiro,
          provincia: formData.provinciaRetiro,
          referencia: formData.referenciaRetiro,
          fecha: formData.fechaRetiro,
        }}
        handleChange={handleChange}
        tipoFormulario="Retiro"
      />

      <DomicilioForm
        value={{
          calle: formData.calleEntrega,
          localidad: formData.localidadEntrega,
          provincia: formData.provinciaEntrega,
          referencia: formData.referenciaEntrega,
          fecha: formData.fechaEntrega,
        }}
        handleChange={handleChange}
        tipoFormulario="Entrega"
        name={"Entrega"}
      />

      <AdjuntarFotosForm
        handleFileChange={handleFileChange}
        formData={formData}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
