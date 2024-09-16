const AdjuntarFotosForm = (formData, { handleFileChange }) => {
  return (
    <>
      <div className="adjuntarFotosContainer">
        <h3>(Opcional)</h3>
        <input
          type="file"
          multiple
          name="foto"
          accept=".jpg, .png"
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default AdjuntarFotosForm;
