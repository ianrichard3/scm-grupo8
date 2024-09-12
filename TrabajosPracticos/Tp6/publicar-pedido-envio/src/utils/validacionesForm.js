const FormValidations = (formData) => {
  const errors = {};

  if (!formData.tipoCarga) {
    errors.tipoCarga = "El tipo de carga es obligatorio";
  }
};
