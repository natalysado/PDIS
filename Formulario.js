import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); 
    setMensaje(`¡Bienvenido, ${nombre}!`);
    setNombre('');
  };

  return (
    <div>
      <h1>Formulario de Bienvenida</h1>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={manejarCambio}
            placeholder="Introduzca su nombre"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Formulario;
