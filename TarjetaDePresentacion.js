import React from 'react';
import './TarjetaDePresentacion.css'; 

const TarjetaDePresentacion = ({ nombre, apellido, profesion, imagen }) => {
    return (
        <div className="tarjeta">
            <img src={imagen} alt={`${nombre} ${apellido}`} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h2 className="tarjeta-nombre">{nombre} {apellido}</h2>
                <p className="tarjeta-profesion">{profesion}</p>
            </div>
        </div>
    );
}

export default TarjetaDePresentacion;
