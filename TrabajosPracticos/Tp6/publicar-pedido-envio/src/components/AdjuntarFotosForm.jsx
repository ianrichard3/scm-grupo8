const AdjuntarFotosForm = (formData, { handleFileChange }) => {
  return (
    <>
      <div className="adjuntarFotosContainer">
        <h3>(Opcional)</h3>
        <input className="imageInput"
          type="file"
          multiple={true}
          name="foto"
          accept=".jpg, .png"
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default AdjuntarFotosForm;
