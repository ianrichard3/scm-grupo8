import { useEffect, useState } from "react";
import DomicilioForm from "./DomicilioForm";
import TipoCargaForm from "./TipoCargaForm";
import AdjuntarFotosForm from "./AdjuntarFotosForm";
import HeaderForm from "./HeaderForm";
import emailjs from 'emailjs-com';
import transportistas from './../data/mockTransportistas'; // Importa los transportistas mockeados


// Array con los títulos de los pasos del formulario
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
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, fotos: files });
  };

  // Función para enviar correo solo a transportistas que cubren las localidades
  const enviarCorreoATransportistas = async (formData) => {
    const { localidadRetiro, localidadEntrega, fechaEntrega, fechaRetiro } = formData;

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

  // Al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si es el último paso del formulario
    if (step !== 4) return;

    // Validaciones
    if (new Date(formData.fechaRetiro) < new Date() || new Date(formData.fechaEntrega) < new Date(formData.fechaRetiro)) {
      alert("Las fechas no son válidas");
      return;
    }

    onSubmit(formData);

    // Enviar correos a transportistas que cumplan con la condición
    await enviarCorreoATransportistas(formData);

    // Resetear el formulario
    setFormData(initialState);

    // Mostrar popup de confirmación
    togglePopup();
  };


  // Modifica la función sendEmail para enviar a cada transportista
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
    <div className="formContentContainer">
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
        {step < 4 && <button className="mainBtn" onClick={handleNextStep}>Siguiente</button>}
      </div>

      {step === 4 && <button className="mainBtn submitBtn" onClick={handleSubmit}>Terminar</button>}
    </div>
  );
};

export default Formulario;
