import React, { useState } from 'react';

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return; // No agregar tareas vacías
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    setNuevaTarea(''); // Limpiar el campo de entrada
  };

  const marcarComoCompletada = (index) => {
    const nuevasTareas = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Agregar una nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            style={{
              textDecoration: tarea.completada ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => marcarComoCompletada(index)}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
