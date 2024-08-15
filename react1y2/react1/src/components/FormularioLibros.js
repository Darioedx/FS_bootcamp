// FormularioLibros.js
import React, { useState } from 'react';

const FormularioLibros = ({ agregarLibro }) => {
    const [nuevoLibro, setNuevoLibro] = useState({
      id:'',
      titulo: '',
      autor: '',
      editorial: ''
    });
const [error, setError] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!nuevoLibro.titulo || !nuevoLibro.autor || !nuevoLibro.editorial) {
        setError('Por favor, completa todos los campos.');
        return;
      }
      const id = Math.floor(Math.random() * 10000) + 1;
      agregarLibro({ ...nuevoLibro, id }); // Agregar el ID al nuevo libro
      //agregarLibro(nuevoLibro);
      setNuevoLibro({
        id: '',
        titulo: '',
        autor: '',
        editorial: ''
      });
      setError('')
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setNuevoLibro({
        ...nuevoLibro,
        [name]: value
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Título"
          name="titulo"
          value={nuevoLibro.titulo}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Autor"
          name="autor"
          value={nuevoLibro.autor}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Editorial"
          name="editorial"
          value={nuevoLibro.editorial}
          onChange={handleChange}
        />
        <div className='divbutton'>
        <button type="submit">Agregar Libro</button>
        </div>
      </form>
    );
  };
  
  export default FormularioLibros;
  