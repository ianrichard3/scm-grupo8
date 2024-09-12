export const FormValidations = (formData) => {
  const errors = {};

  if (!formData.tipoCarga) {
    errors.tipoCarga = "El tipo de carga es obligatorio.";
  }

  if (!formData.domicilioRetiro.provincia) {
    errors.domicilioRetiroProvincia = "La provincia de retiro es obligatoria.";
  }
  if (!formData.domicilioRetiro.localidad) {
    errors.domicilioRetiroLocalidad = "La localidad de retiro es obligatoria.";
  }
  if (!formData.domicilioRetiro.calle) {
    errors.domicilioRetiroCalle = "La calle de retiro es obligatoria.";
  }

  if (!formData.domicilioEntrega.provincia) {
    errors.domicilioEntregaProvincia =
      "La provincia de entrega es obligatoria.";
  }
  if (!formData.domicilioEntrega.localidad) {
    errors.domicilioEntregaLocalidad =
      "La localidad de entrega es obligatoria.";
  }
  if (!formData.domicilioEntrega.calle) {
    errors.domicilioEntregaCalle = "La calle de entrega es obligatoria.";
  }

  if (!formData.fechaRetiro) {
    errors.fechaRetiro = "La fecha de retiro es obligatoria.";
  } else if (new Date(formData.fechaRetiro) < new Date()) {
    errors.fechaRetiro = "La fecha de retiro no puede ser anterior a hoy.";
  }

  if (!formData.fechaEntrega) {
    errors.fechaEntrega = "La fecha de entrega es obligatoria.";
  } else if (new Date(formData.fechaEntrega) < new Date(formData.fechaRetiro)) {
    errors.fechaEntrega =
      "La fecha de entrega no puede ser anterior a la de retiro.";
  }

  return errors;
};
