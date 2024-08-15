import React, { useState, useEffect } from 'react';
import FormularioLibros from './components/FormularioLibros.js';
//import logo from './logo.svg';
import './App.css';
import ListaLibros from './components/ ListaLibros.js';
const App = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => { setTimeout(() => {
    const dataFromDatabase = [
      {id:Math.floor(Math.random() * 10000) + 1, titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', editorial: 'Minotauro' },
      {id:Math.floor(Math.random() * 10000) + 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', editorial: 'Diana' },
      {id:Math.floor(Math.random() * 10000) + 1, titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', editorial: 'Salamandra' }
    ];
    
   
    setLibros(dataFromDatabase);
  }, 2000);
   
    
  },[] );

  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, nuevoLibro]);
  };
  console.log('Lista de libros actualizada:', libros);
  return (
    <div className='div'>
      <h1>Gestor de Libros</h1>
      <FormularioLibros agregarLibro={agregarLibro} />
      <div className="container">
        <h2>Lista de libros</h2>
        {libros.map((libro, index) => (
          <ListaLibros key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  );
};

export default App;
