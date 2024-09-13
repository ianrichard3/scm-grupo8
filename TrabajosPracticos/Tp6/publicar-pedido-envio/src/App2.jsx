import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  // onFormSubmit = () => {};

  const onSubmit = (formData) => {
    console.log(formData);
    // Aquí podrías enviar la información al servidor
  };

  return (
    <>
      <h1>Formulario</h1>
      <Formulario onSubmit={onSubmit} />
    </>
  );
}

export default App;
