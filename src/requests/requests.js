document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      const url = 'https://liz7qejhdl.execute-api.us-east-1.amazonaws.com/prueba/server/create';  // Reemplaza con tu URL de la API de AWS
  
      const requestData = {
        username: username,
        password: password
      };
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Agrega más headers si son necesarios, como tokens de autorización
        },
        body: JSON.stringify(requestData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
        console.log('API Response:', data);
        alert('Login exitoso');
      })
      .catch(error => {
        // Manejo de errores, por ejemplo, mostrar un mensaje de error
        console.error('Error:', error);
        alert('Hubo un error en el login');
      });
    });
  });
  