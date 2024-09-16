import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  // onFormSubmit = () => {};

  const onSubmit = (formData) => {

  };

  return (
    <>
      <Formulario onSubmit={onSubmit} />
    </>
  );
}

export default App;
