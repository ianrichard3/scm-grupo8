import { useEffect, useState } from "react";
import DomicilioForm from "./DomicilioForm";
import TipoCargaForm from "./TipoCargaForm";
import AdjuntarFotosForm from "./AdjuntarFotosForm";
import HeaderForm from "./HeaderForm";


const useDomicilioIsEmpty = (formData, retiro) => {
  if (retiro) {
    return [formData.calleRetiro, formData.localidadRetiro,
    formData.provinciaRetiro, formData.numeroRetiro,
    formData.fechaRetiro].includes("")
  }
  return [formData.calleEntrega, formData.localidadEntrega,
  formData.provinciaEntrega, formData.numeroEntrega,
  formData.fechaEntrega].includes("")
}



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

  const [step, setStep] = useState(1)

  useEffect(() => {
    if (formData.tipoCarga !== "") {
      setStep(2)
      if (!useDomicilioIsEmpty(formData, true)) {
        setStep(3)
        console.log("step3")
        if (!useDomicilioIsEmpty(formData, false)) {
          setStep(4)
        } else setStep(3)

      } else setStep(2)
    }
    else { setStep(1) }

  }, [formData])

  return (
    <form className="formContentContainer" onSubmit={handleSubmit}>
      <HeaderForm title="Formulario" />

      {step > 0 &&
        <TipoCargaForm
          name="tipoCarga"
          value={formData.tipoCarga}
          handleChange={handleChange}
        />}



      <div className="formStepsContainer">
        {step > 1 &&
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

        {step > 2 &&

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

        {step > 3 &&
          <AdjuntarFotosForm
            handleFileChange={handleFileChange}
            formData={formData}
          />

        }

      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
