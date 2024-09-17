import { useEffect, useState } from "react";
import DomicilioForm from "./DomicilioForm";
import TipoCargaForm from "./TipoCargaForm";
import AdjuntarFotosForm from "./AdjuntarFotosForm";
import HeaderForm from "./HeaderForm";


const stepTitles = ["Formulario", "Domicilio de Retiro", "Domicilio de Entrega", "Agregar Imagenes"]

const Formulario = ({ onSubmit }) => {

  const [cargaFormData, setCargaFormData] = useState("");
  const [domicilioRetiroData, setDomicilioRetiroData] = useState({
    calleRetiro: "",
    numeroRetiro: "",
    localidadRetiro: "",
    provinciaRetiro: "",
    referenciaRetiro: "",
    fechaRetiro: "",
  })
  const [domicilioEntregaData, setDomicilioEntregaData] = useState({
    calleEntrega: "",
    numeroEntrega: "",
    localidadEntrega: "",
    provinciaEntrega: "",
    referenciaEntrega: "",
    fechaEntrega: "",
  })
  const [fotos, setFotos] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();

    // Solo mostrar popup y enviar el formulario si es el último paso
    if (step !== 4) {
      return;  // No hacer nada si no es el último paso
    }

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

    // Aquí el código para mostrar el popup
    togglePopup();
  };


  const [step, setStep] = useState(1)
  const [title, setTitle] = useState("Formulario")
  const [isError, setIsError] = useState(true)



  const handleNextStep = () => {
    if (!isError) setStep(step + 1)


    // Aca hay que guardar la data para poder poner volver 
    // y que el componente no renderice todo vacio de vuelta



  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  useEffect(() => {
    setTitle(stepTitles[step - 1])

  }, [step])


  const handleCargaChange = (formValue, error) => {
    setIsError(error)
    setCargaFormData(formValue)
  }

  const handleDomicilioChange = (formValue, error, type) => {
    setIsError(error)
    if (type === "Retiro") setDomicilioRetiroData(formValue)
    else setDomicilioEntregaData(formValue)
  }

  const handleFileChange = (formValue, error) => {
    setIsError(error)
    setFotos(formValue)
  }




  return (
    <div className="formContentContainer">
      <HeaderForm title={title} />

      {step === 1 &&
        <TipoCargaForm
          onChange={handleCargaChange}
        />}

      <div className="formStepsContainer">
        {step === 2 &&
          <DomicilioForm
            tipoFormulario="Retiro"
            onChange={handleDomicilioChange}
          />
        }

        {step === 3 &&

          <DomicilioForm
            onChange={handleDomicilioChange}
            tipoFormulario="Entrega"
          />
        }

        {step === 4 &&
          <AdjuntarFotosForm
            onChange={handleFileChange}
          />
        }

      </div>
      <div className="navButtonsContainer">
        {step > 1 && <button className="mainBtn" onClick={handlePrevStep}>Volver</button>}
        {step < 4 && <button className={`mainBtn ${isError && "disabledBtn"}`} onClick={handleNextStep}>Siguiente</button>}
      </div>

      {step === 4 && <button className="mainBtn submitBtn" onClick={() => onSubmit()}>Terminar</button>}
    </div>
  );
};

export default Formulario;
