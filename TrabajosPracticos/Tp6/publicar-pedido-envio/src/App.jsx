import "./App.css";
import { useState } from "react";
import Formulario from "./components/Formulario";
import NotificationPopup from "./components/NotificationPopup";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({})

  const onSubmit = (formData) => {
    setIsPopupVisible(true);
    console.log(formData);
    setFormData(formData)
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <Formulario onSubmit={onSubmit} />

      {isPopupVisible && (
        <NotificationPopup onClose={closePopup} formData={formData} />
      )}
    </>
  );
}

export default App;
