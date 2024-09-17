import { useEffect, useState } from "react";
import DomicilioForm from "./DomicilioForm";
import TipoCargaForm from "./TipoCargaForm";
import AdjuntarFotosForm from "./AdjuntarFotosForm";
import HeaderForm from "./HeaderForm";
import transportistas from "../data/mockTransportistas";
import emailjs from "emailjs-com"

const stepTitles = [
  "Formulario",
  "Domicilio de Retiro",
  "Domicilio de Entrega",
  "Agregar Imagenes",
];

const Formulario = ({ onSubmit }) => {
  const [cargaFormData, setCargaFormData] = useState("");
  const [domicilioRetiroData, setDomicilioRetiroData] = useState({
    calle: "",
    numero: "",
    localidad: "",
    provincia: "",
    referencia: "",
    fecha: "",
  });
  const [domicilioEntregaData, setDomicilioEntregaData] = useState({
    numero: "",
    calle: "",
    localidad: "",
    provincia: "",
    referencia: "",
    fecha: "",
  });
  const [fotos, setFotos] = useState([]);

  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("Formulario");
  const [isError, setIsError] = useState(true);

  const handleNextStep = () => {
    if (!isError) setStep(step + 1);

    // Aca hay que guardar la data para poder poner volver
    // y que el componente no renderice todo vacio de vuelta
  };

  const handlePrevStep = () => {
    setIsError(false);
    setStep(step - 1);
  };


  // Envio de email
  const [email, setEmail] = useState("")

  const sendEmail = (toEmail, toName, localidadRetiro, localidadEntrega, fechaRetiro, fechaEntrega) => {
    const templateParams = {
      destinatario: toEmail,
      nombre: toName,
      locRetiro: localidadRetiro,
      locEntrega: localidadEntrega,
      fecRetiro: fechaRetiro,
      fecEntrega: fechaEntrega,
    };

    emailjs.send('service_n52m0kn', 'template_tj1hils', templateParams, 'g0LAslC8CH8ichX7q')
      .then((response) => {
        console.log(`Correo enviado a ${toName} con éxito!`, response.status, response.text);
      }, (err) => {
        console.error('Error al enviar el correo', err);
      });
  };

  const enviarCorreoATransportistas = async (localidadRetiro, localidadEntrega, fechaRetiro, fechaEntrega) => {

    // Filtrar los transportistas que cubren la localidad de retiro o entrega
    const transportistasFiltrados = transportistas.filter(t =>
      t.zonaCobertura.includes(localidadRetiro) || t.zonaCobertura.includes(localidadEntrega)
    );

    // Enviar correo a cada transportista filtrado
    for (const transportista of transportistasFiltrados) {
      console.log(transportista.mail, transportista.nombre, localidadRetiro, localidadEntrega, fechaRetiro, fechaEntrega);
      await sendEmail(transportista.mail, transportista.nombre, localidadRetiro, localidadEntrega, fechaRetiro, fechaEntrega);
    }
  };

  const handleSubmit = async () => {
    const returnData = {
      tipoCarga: cargaFormData,
      domicilioRetiro: domicilioRetiroData,
      domicilioEntrega: domicilioEntregaData,
      fotos: fotos,
    };

    onSubmit(returnData);

    // send email
    await enviarCorreoATransportistas(
      domicilioRetiroData.localidad,
      domicilioEntregaData.localidad,
      domicilioEntregaData.fecha,
      domicilioEntregaData.fecha
    )

  };

  useEffect(() => {
    setTitle(stepTitles[step - 1]);
  }, [step]);

  const handleCargaChange = (formValue, error) => {
    setIsError(error);
    setCargaFormData(formValue);
  };

  const handleDomicilioChange = (formValue, error, type) => {
    setIsError(error);
    if (type === "Retiro") setDomicilioRetiroData(formValue);
    else setDomicilioEntregaData(formValue);
  };

  const handleFileChange = (formValue, error) => {
    setIsError(error);
    setFotos(formValue);
  };




  return (
    <div className="formContentContainer">
      <HeaderForm title={title} />

      {step === 1 && (
        <TipoCargaForm
          onChange={handleCargaChange}
          dataTipoCarga={cargaFormData}
        />
      )}

      <div className="formStepsContainer">
        {step === 2 && (
          <DomicilioForm
            tipoFormulario="Retiro"
            onChange={handleDomicilioChange}
            dataDomicilioForm={domicilioRetiroData}
          />
        )}

        {step === 3 && (
          <DomicilioForm
            onChange={handleDomicilioChange}
            tipoFormulario="Entrega"
            dataDomicilioForm={domicilioEntregaData}
            fechaRetiro={domicilioRetiroData.fecha}
          />
        )}

        {step === 4 && (
          <AdjuntarFotosForm onChange={handleFileChange} dataFotos={fotos} />
        )}
      </div>
      <div className="navButtonsContainer">
        {step > 1 && (
          <button className="mainBtn" onClick={handlePrevStep}>
            Volver
          </button>
        )}
        {step < 4 && (
          <button
            className={`mainBtn ${isError && "disabledBtn"}`}
            onClick={handleNextStep}
          >
            Siguiente
          </button>
        )}
      </div>

      {step === 4 && (
        <button className="mainBtn submitBtn" onClick={handleSubmit}>
          Terminar
        </button>
      )}
    </div>
  );
};

export default Formulario;
