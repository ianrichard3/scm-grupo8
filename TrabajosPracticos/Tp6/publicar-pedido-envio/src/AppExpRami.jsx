import { useState } from "react";
import TipoCarga from "./components/TipoCarga";
import DomicilioForm from "./components/DomicilioForm";
import AdjuntarFotos from "./components/AdjuntarFotos";
import "./App.css";

function App() {
  const [step, setStep] = useState(1); // Para manejar la pantalla actual
  const [formData, setFormData] = useState({
    tipoCarga: "",
    domicilioRetiro: {
      calle: "",
      localidad: "",
      provincia: "",
      referencia: "",
    },
    domicilioEntrega: {
      calle: "",
      localidad: "",
      provincia: "",
      referencia: "",
    },
    fotos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (e, field, parent) => {
    const { value } = e.target;
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

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log("Datos del formulario:", formData);
  };

  switch (step) {
    case 1:
      return (
        <TipoCarga
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <DomicilioForm
          title="Domicilio de Retiro"
          formData={formData.domicilioRetiro}
          handleNestedChange={(e, field) =>
            handleNestedChange(e, field, "domicilioRetiro")
          }
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <DomicilioForm
          title="Domicilio de Entrega"
          formData={formData.domicilioEntrega}
          handleNestedChange={(e, field) =>
            handleNestedChange(e, field, "domicilioEntrega")
          }
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <AdjuntarFotos
          formData={formData}
          handleFileChange={handleFileChange}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      );
    default:
      return <h2>Formulario completo</h2>;
  }
}

export default App;
