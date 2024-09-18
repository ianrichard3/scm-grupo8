import React, { useEffect } from 'react';
import logo from "/logo-tango-envios.jpg";

const NotificationPopup = ({ formData, onClose }) => {

  useEffect(() => {
    const audio = new Audio('/notif-sound.mp3');
    audio.play();
  }, []);

  console.log(formData)

  return (
    <div className='popupBackground'>
      <div className='notificationPopupContainer'>
        <div className='notificationPopupContent'>
          <div className='notificationPopupHeader'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className='notificationPopupIcon'>

                <img src="/logo-tango-envios.jpg" alt="Icon" style={{ width: '40px', height: '40px' }}
                />
              </div>
              <p className='notificationPopupTitle'>
                TANGO Envíos
              </p>
            </div>
            <p className='notificationPopupTime'>
              Just now
            </p>
          </div>
          <div className='notificationPopupBody'>
            <p className='notificationPopupDescription'>
              ¡Tienes un nuevo pedido en tu zona de cobertura! Ver detalles
            </p>
          </div>
        </div>
      </div>

      <div className='popupPositionContainer'>
        <div className="popupContainer">
          <div className="popupContent">
            <div className="popupHeader">

              <img
                src={logo}
                alt="Logo Empresa"
                className="logoEmpresa"
              />
              <span className="popupTitle">Pedido Confirmado</span>
            </div>
            <div className="popupBody">
              <p><strong>Tipo de Carga:</strong> {formData.tipoCarga}</p>
              <p><strong>Retiro:</strong> {formData.domicilioRetiro.calle} {formData.domicilioRetiro.numero}, {formData.domicilioRetiro.localidad}, {formData.domicilioRetiro.provincia}</p>
              <p><strong>Entrega:</strong> {formData.domicilioEntrega.calle} {formData.domicilioEntrega.numero}, {formData.domicilioEntrega.localidad}, {formData.domicilioEntrega.provincia}</p>
              <p><strong>Fecha de Retiro:</strong> {formData.domicilioRetiro.fecha}</p>
              <p><strong>Fecha de Entrega:</strong> {formData.domicilioEntrega.fecha}</p>
            </div>
            <button onClick={onClose} className="closeButton">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
