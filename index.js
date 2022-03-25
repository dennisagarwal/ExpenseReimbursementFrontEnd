let loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', async()=>{
  let usernameInput = document.querySelector('#username');
  let passwordInput = document.querySelector('#password');

  const URL = 'http://localhost:8081/login';

  const jsonString = JSON.stringify({
    "username": usernameInput.value,
    "password": passwordInput.value
  })

  let res = await fetch(URL,{
    method: 'POST',
    body: jsonString,
  });


  //Get the token and store the token in localStorage
  let token = res.headers.get('Token');
  localStorage.setItem('jwt',token);

  let user = await res.json();
  console.log(user);

});