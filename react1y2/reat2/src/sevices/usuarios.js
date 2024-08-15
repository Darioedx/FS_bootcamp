
    export const getUsuario = (email, password) => {
        return fetch('http://localhost:5000/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los usuarios');
                }
                return response.json();
            })
            .then(users => {
                const user = users.find(user => user.email === email && user.password === password);
                if (user) {
                    return user.id;
                }else {
                   throw new Error('Usuario no encontrado');
                }
            })
            .catch(error => {
                console.error('Error al obtener el usuario:', error.message);
                
                throw new Error('Error al obtener los usuarios');
            });
    };

    export const getUsuarioName = (id) => {
        return fetch('http://localhost:5000/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los usuarios');
                }
                return response.json();
            })
            .then(users => {
                const user = users.find(user => user.id === id);
                if (user) {
                    
                    return user;
                }else {
                   throw new Error('Usuario no encontrado');
                }
            })
            .catch(error => {
                console.error('Error al obtener el usuario:', error.message);
                
                throw new Error('Error al obtener los usuarios');
            });
    };