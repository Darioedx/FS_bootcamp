import React, { useState } from 'react';

const ListaLibros = ({ libro }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='lista'>
    
      <ul>
       
          <li >
            <strong>Título:</strong> {libro.titulo}, <strong>Autor:</strong>{' '}
            {libro.autor}, <strong>Editorial:</strong> {libro.editorial}
            {isFavorite ? <span>&#9829;</span> : <span>&#9825;</span>}
            {isFavorite ? 
              <a onClick={handleIsFavorite} href='#'>Desmarcar como favorito</a>
            : 
              <a onClick={handleIsFavorite} href='#'>Marcar como favorito</a>
            }
          </li>
        
      </ul>
    </div>
  );
};

export default ListaLibros;
