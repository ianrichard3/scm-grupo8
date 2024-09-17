import { useState } from "react";

const AdjuntarFotosForm = ({ onChange }) => {

  const [files, setFiles] = useState([])
  const [error, setError] = useState(true)

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convierte la lista de archivos en un array

    let isError = false;
    selectedFiles.forEach((file) => {
      if (file.size > 5000000) {
        isError = true;
      }
    });
    setFiles(selectedFiles);
    setError(isError);
    onChange(selectedFiles, isError);
  };
  return (
    <>
      <div className="adjuntarFotosContainer">
        <h3>(Opcional)</h3>
        <input className="imageInput"
          type="file"
          multiple={true}
          name="foto"
          value={files}
          accept=".jpg, .png"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default AdjuntarFotosForm;
