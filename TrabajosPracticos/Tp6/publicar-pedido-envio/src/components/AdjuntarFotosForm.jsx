const AdjuntarFotosForm = (formData, { handleFileChange }) => {
  return (
    <>
      <div className="adjuntarFotosContainer" style={{ marginBottom: "10px" }}>
        <label>
          Adjuntar Fotos (Opcional)
          <input
            type="file"
            multiple
            name="foto"
            accept=".jpg, .png"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </>
  );
};

export default AdjuntarFotosForm;
