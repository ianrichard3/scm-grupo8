import { useEffect, useState } from "react";
import DomicilioForm from "./DomicilioForm";
import TipoCargaForm from "./TipoCargaForm";
import AdjuntarFotosForm from "./AdjuntarFotosForm";
import HeaderForm from "./HeaderForm";


const stepTitles = ["Formulario", "Domicilio de Retiro", "Domicilio de Entrega", "Agregar Imagenes"]

const Formulario = ({ onSubmit }) => {



  const initialState = {
    tipoCarga: "",

    calleRetiro: "",
    numeroRetiro: "",
    localidadRetiro: "",
    provinciaRetiro: "",
    referenciaRetiro: "",
    fechaRetiro: "",

    calleEntrega: "",
    numeroEntrega: "",
    localidadEntrega: "",
    provinciaEntrega: "",
    referenciaEntrega: "",
    fechaEntrega: "",

    fotos: [],
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
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

    console.log(formData)
  };

  const [step, setStep] = useState(1)
  const [title, setTitle] = useState("Formulario")

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  useEffect(() => {
    setTitle(stepTitles[step - 1])

  }, [step])



  return (
    <form className="formContentContainer" onSubmit={handleSubmit}>
      <HeaderForm title={title} />

      {step === 1 &&
        <TipoCargaForm
          name="tipoCarga"
          value={formData.tipoCarga}
          handleChange={handleChange}
        />}



      <div className="formStepsContainer">
        {step === 2 &&
          <DomicilioForm
            name={"Retiro"}
            value={{
              calle: formData.calleRetiro,
              numero: formData.numeroRetiro,
              localidad: formData.localidadRetiro,
              provincia: formData.provinciaRetiro,
              referencia: formData.referenciaRetiro,
              fecha: formData.fechaRetiro,
            }}
            handleChange={handleChange}
            tipoFormulario="Retiro"
          />
        }

        {step === 3 &&

          <DomicilioForm
            value={{
              calle: formData.calleEntrega,
              numero: formData.numeroEntrega,
              localidad: formData.localidadEntrega,
              provincia: formData.provinciaEntrega,
              referencia: formData.referenciaEntrega,
              fecha: formData.fechaEntrega,
            }}
            handleChange={handleChange}
            tipoFormulario="Entrega"
            name={"Entrega"}
          />
        }

        {step === 4 &&
          <AdjuntarFotosForm
            handleFileChange={handleFileChange}
            formData={formData}
          />

        }

      </div>
      <div className="navButtonsContainer">
        {step > 1 && <button className="mainBtn" onClick={handlePrevStep}>Volver</button>}
        {step < 4 && <button className="mainBtn" type="submit" onClick={handleNextStep}>Siguiente</button>}
      </div>

      {step === 4 && <button type="submit">Terminar</button>}
    </form>
  );
};

export default Formulario;
