import { useState } from "react";

const AdjuntarFotosForm = ({ onChange, dataFotos }) => {
  const [files, setFiles] = useState(dataFotos || []);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convierte la lista de archivos en un array
    const updatedFiles = [...files, ...selectedFiles]; // Acumula los archivos seleccionados previamente

    let isError = false;
    setFiles(updatedFiles);
    setError(isError);
    onChange(updatedFiles, isError);
  };

  return (
    <>
      <div className="adjuntarFotosContainer">
        <h3>(Opcional)</h3>
        <input
          className="imageInput"
          type="file"
          multiple={true}
          name="foto"
          accept=".jpg, .png"
          onChange={handleChange}
        />
      </div>
      <div className="fileList">
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AdjuntarFotosForm;
