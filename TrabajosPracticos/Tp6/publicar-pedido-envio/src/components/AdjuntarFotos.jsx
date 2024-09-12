const AdjuntarFotos = ({
  formData,
  handleFileChange,
  prevStep,
  submitForm,
}) => {
  return (
    <div>
      <h2>Adjuntar Fotos (Opcional)</h2>
      <input
        type="file"
        multiple
        accept=".jpg, .png"
        onChange={handleFileChange}
      />
      <button onClick={prevStep}>Anterior</button>
      <button onClick={submitForm}>Enviar</button>
    </div>
  );
};

export default AdjuntarFotos;
