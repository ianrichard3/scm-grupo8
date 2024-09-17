import { useState } from "react";

const AdjuntarFotosForm = ({ onChange, dataFotos }) => {
  const [files, setFiles] = useState(dataFotos || []);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convierte la lista de archivos en un array
    const validFiles = selectedFiles.filter(file => 
      file.type === "image/jpeg" || file.type === "image/png"
    );

    if (validFiles.length !== selectedFiles.length) {
      setError(true);
    } else {
      setError(false);
    }

    const updatedFiles = [...files, ...validFiles]; // Acumula los archivos seleccionados previamente
    setFiles(updatedFiles);
    onChange(updatedFiles, error);
  };

  const handleRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange(updatedFiles, error);
  };

  return (
    <>
      <div className="adjuntarFotosContainer">
        <h3>(Opcional)</h3>
        <input
          className="imageInput"
          type="file"
          onChange={handleChange}
          multiple
          accept=".jpg,.jpeg,.png"
        />
        {error && <p className="error">Solo se permiten archivos .jpg o .png</p>}
        <div className="fotosList">
          {files.map((file, index) => (
            <div key={index} className="fotoItem">
              <span>{file.name}</span>
              <button type="button" onClick={() => handleRemove(index)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdjuntarFotosForm;
