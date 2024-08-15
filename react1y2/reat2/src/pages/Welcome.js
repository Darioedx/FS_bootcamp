import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, {useEffect, useState } from 'react';
import { getUsuarioName } from '../sevices/usuarios';

const Welcome = () => {
const [error, setError] = useState(null); 
const {Id} = useParams()   
const [userData, setUserData] = useState(null)

useEffect(() => {
    getUsuarioName(Id)
        .then(userData => {
            setError(null);
            setUserData(userData);
        })
        .catch(error => {
            setError(error.message);
        });
}, [Id]);
      
     return (
        <div>
          {userData ? (
            <div>
              <h2>Bienvenido, <span>{userData.name}</span></h2>
              <p>Edad: <span>{userData.age}</span></p>
              <p>Email: <span>{userData.email}</span></p>
              <Link to="/">
                 <button>Regresar a Inicio</button>
              </Link>
            </div>
          ) : (
            <p>Cargando datos del usuario...</p>
          )}
        </div>
      );
    };


export default Welcome;
