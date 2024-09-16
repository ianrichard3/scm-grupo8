import "./App.css";
import { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const onSubmit = (formData) => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            <Formulario onSubmit={onSubmit} />

            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>
                            &times;
                        </span>
                        <p>Formulario enviado</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
