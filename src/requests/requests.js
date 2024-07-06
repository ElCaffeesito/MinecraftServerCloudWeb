
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm'); // Asegúrate de que tienes un formulario de registro con este ID
    const deleteUserForm = document.getElementById('deleteUserForm'); // Asegúrate de que tienes un formulario para borrar usuarios con este ID

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const user_id = document.getElementById('user_id').value;
        const password = document.getElementById('password').value;
        document.getElementById('welcomeHeader').innerHTML = "¡Welcome " + user_id + '!'

        const requestData = {
            "user_id": user_id,
            "password": password
        };

        try {
            const response = await fetch('https://n18ot5xx1d.execute-api.us-east-1.amazonaws.com/validate_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // Agrega más headers si son necesarios, como tokens de autorización
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
            console.log('API Response:', data);
            alert('Login exitoso');
            document.getElementById('welcomeHeader').innerHTML = "¡Welcome " + user_id + '!'
        } catch (error) {
            // Manejo de errores, por ejemplo, mostrar un mensaje de error
            console.error('Error:', error);
            alert('Hubo un error en el login');
        }
    });

    registerForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const user_id = document.getElementById('registeruser_id').value;
        const password = document.getElementById('registerPassword').value;

        const requestData = {
            "user_id": user_id,
            "password": password,
        };

        try {
            const response = await fetch('https://n18ot5xx1d.execute-api.us-east-1.amazonaws.com/create_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // Agrega más headers si son necesarios, como tokens de autorización
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
            console.log('API Response:', data);
            alert('Registro exitoso');
        } catch (error) {
            // Manejo de errores, por ejemplo, mostrar un mensaje de error
            console.error('Error:', error);
            alert('Hubo un error en el registro');
        }
    });

    /*deleteUserForm.addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const user_id = document.getElementById('deleteuser_id').value;
        const password = document.getElementById('deletePassword').value;
    
        const requestData = {
            "user_id": user_id,
            "password": password
        };
  
        try {
            const response = await fetch('https://n18ot5xx1d.execute-api.us-east-1.amazonaws.com/delete_user', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    // Agrega más headers si son necesarios, como tokens de autorización
                },
                body: JSON.stringify(requestData)
            });
  
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
  
            const data = await response.json();
            // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
            console.log('API Response:', data);
            alert('Usuario eliminado exitosamente');
        } catch (error) {
            // Manejo de errores, por ejemplo, mostrar un mensaje de error
            console.error('Error:', error);
            alert('Hubo un error al eliminar el usuario');
        }
    });*/

    async function createInstance() {

        var selectedVersion = document.getElementById('version-dropdown').value;
        const user_id = document.getElementById('user_id').value;
        const requestData = {
            "user_id": user_id,
            "version": selectedVersion
        };

        try {
            const response = await fetch('https://n18ot5xx1d.execute-api.us-east-1.amazonaws.com/create_server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // Agrega más headers si son necesarios, como tokens de autorización
                },
                body: JSON.stringify(requestData)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('API Response:', data);
            alert(`El servidor se inició correctamente`);
            document.getElementById('dns').innerHTML = requestData.public_dns;
        } catch (error) {
            console.error('Error:', error);
            alert(`Hubo un error al iniciar el servidor`);
        }
    }

    async function deleteInstance() {

        const user_id = document.getElementById('user_id').value;
        const requestData = {
            "user_id": user_id,
        };
    
        try {
            const response = await fetch("https://n18ot5xx1d.execute-api.us-east-1.amazonaws.com/terminate_server", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    // Agrega más headers si son necesarios, como tokens de autorización
                },
                body: JSON.stringify(requestData)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('API Response:', data);
            alert('Instancia eliminada correctamente');
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al eliminar la instncia');
        }
    }
    
    async function stopInstance() {

        const user_id = document.getElementById('user_id').value;
        const requestData = {
            "user_id": user_id,
        };
    
        try {
            const response = await fetch("https://n18ot5xx1d.execute-api.us-east-1.amazonaws.com/stop_server", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    // Agrega más headers si son necesarios, como tokens de autorización
                },
                body: JSON.stringify(requestData)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('API Response:', data);
            alert('Instancia eliminada correctamente');
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al eliminar la instncia');
        }
    }

    async function startInstance() {

        const user_id = document.getElementById('user_id').value;
        const requestData = {
            "user_id": user_id,
        };

        try {
            const response = await fetch('https://n18ot5xx1d.execute-api.us-east-1.amazonaws.com/start_server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // Agrega más headers si son necesarios, como tokens de autorización
                },
                body: JSON.stringify(requestData)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('API Response:', data);
            alert(`El servidor se inició correctamente`);
            document.getElementById('dns').innerHTML = requestData.public_dns;
        } catch (error) {
            console.error('Error:', error);
            alert(`Hubo un error al iniciar el servidor`);
        }
    }

    document.getElementById('crear-instancia').addEventListener('click', function () {
        createInstance();
    });

    document.getElementById('iniciar-instancia').addEventListener('click', function () {
        startInstance();
    });

    document.getElementById('detener-instancia').addEventListener('click', function () {
        stopInstance();
    });

    document.getElementById('borrar-instancia').addEventListener('click', function () {
        deleteInstance();
    });
});
