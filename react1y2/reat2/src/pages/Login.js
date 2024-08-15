import React, { useState, useEffect } from 'react';
import { getUsuario } from '../sevices/usuarios';
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const navigate = useNavigate();
 
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        if (email && password) {
            getUsuario(email, password)
                .then(id => {
              
                    setError(null);
                    navigate(`/welcome/${id}`)
                })
                .catch(error => {
                 
                    setError(error.message);
                  
                });
        }
    }, [email, password]);

    const handleOnChange = e => {
        setError(null);
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(formData.email)
        setPassword(formData.password)
        
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            {error && <p style={{ color: 'red', marginLeft:'50px'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input autoComplete='email'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" >Contraseña:</label>
                    <input autoComplete="current-password"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;
