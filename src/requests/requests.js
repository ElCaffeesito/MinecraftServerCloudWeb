
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm'); // Asegúrate de que tienes un formulario de registro con este ID
  const deleteUserForm = document.getElementById('deleteUserForm'); // Asegúrate de que tienes un formulario para borrar usuarios con este ID

  loginForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      document.getElementById('welcomeHeader').innerHTML = "¡Welcome " + username + '!'
      const url = 'https://liz7qejhdl.execute-api.us-east-1.amazonaws.com/prueba/users/login';  // Reemplaza con tu URL de la API de AWS

      const requestData = {
          username: username,
          password: password
      };

      try {
          const response = await fetch(url, {
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
          document.getElementById('welcomeHeader').innerHTML = "¡Welcome " + username + '!'
      } catch (error) {
          // Manejo de errores, por ejemplo, mostrar un mensaje de error
          console.error('Error:', error);
          alert('Hubo un error en el login');
      }
  });

  registerForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const username = document.getElementById('registerUsername').value;
      const password = document.getElementById('registerPassword').value;
      const url = 'https://liz7qejhdl.execute-api.us-east-1.amazonaws.com/prueba/users/create';  // Reemplaza con tu URL de la API de AWS para registro

      const requestData = {
          username: username,
          password: password,
      };

      try {
          const response = await fetch(url, {
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

      const username = document.getElementById('deleteUsername').value;
      const password = document.getElementById('deletePassword').value;

      const url = 'https://liz7qejhdl.execute-api.us-east-1.amazonaws.com/prueba/users/delete';  // Reemplaza con tu URL de la API de AWS para eliminar usuarios

      const requestData = {
          username: username,
          password: password
      };

      try {
          const response = await fetch(url, {
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

  async function sendGetRequest(url, requestData) {
      try {
          const params = new URLSearchParams(requestData);
          const response = await fetch(`${url}?${params.toString()}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
                  // Agrega más headers si son necesarios, como tokens de autorización
              }
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('API Response:', data);
          alert(`Operación exitosa en ${url}`);
      } catch (error) {
          console.error('Error:', error);
          alert(`Hubo un error en la operación ${url}`);
      }
  }

  async function startInstance(url, requestData) {
    try {
        const params = new URLSearchParams(requestData);
        const response = await fetch(`${url}?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // Agrega más headers si son necesarios, como tokens de autorización
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('API Response:', data);
        alert(`Operación exitosa en ${url}`);
        document.getElementById('dns').innerHTML = requestData.public_dns
    } catch (error) {
        console.error('Error:', error);
        alert(`Hubo un error en la operación ${url}`);
    }
}

  const requestData = {
      user_id: 'username_placeholder',
      password: 'password_placeholder'
  };

  const urls = {
      crearInstancia: 'https://liz7qejhdl.execute-api.us-east-1.amazonaws.com/prueba/server/create',  // Reemplaza con tu URL de la API de AWS
      iniciarInstancia: 'https://liz7qejhdl.execute-api.us-east-1.amazonaws.com/prueba/server/start',  // Reemplaza con tu URL de la API de AWS
      detenerInstancia: 'https://liz7qejhdl.execute-api.us-east-1.amazonaws.com/prueba/server/stop',  // Reemplaza con tu URL de la API de AWS
      borrarInstancia: 'https://liz7qejhdl.execute-api.us-east-1.amazonaws.com/prueba/server/terminate'  // Reemplaza con tu URL de la API de AWS
  };

  document.getElementById('crear-instancia').addEventListener('click', function() {
      sendGetRequest(urls.crearInstancia, requestData);
  });

  document.getElementById('iniciar-instancia').addEventListener('click', function() {
    startInstance(urls.iniciarInstancia, requestData);
  });

  document.getElementById('detener-instancia').addEventListener('click', function() {
      sendGetRequest(urls.detenerInstancia, requestData);
  });

  document.getElementById('borrar-instancia').addEventListener('click', function() {
      sendGetRequest(urls.borrarInstancia, requestData);
  });
});
