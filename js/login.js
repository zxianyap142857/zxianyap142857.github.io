const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

document.getElementById('sign-up-form').addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.querySelector('#sign-up-form .input-name').value
  if (!name || name.length < 2 || name.length > 20) {
    alert('username length must be between 2 ~ 20')
    return false
  }

  const email = document.querySelector('#sign-up-form .input-email').value
  if (!email || !email.match(/[\w\d]+@[\w\d]+\.[\w\d]+/i)) {
    alert('email is not valid')
    return false
  }

  const password = document.querySelector('#sign-up-form .input-password').value
  if (!password || password.length < 6 || password.length > 30) {
    alert('password length must be between 6 ~ 30')
    return false
  }

  const birthDate = document.querySelector('#sign-up-form .input-birth-date').value
  if (!birthDate || !birthDate.match(/[\d]{1,2}[\D]+[\d]{1,2}[\D]+[\d]{4,4}/i)) {
    alert('birth date is not valid')
    return false
  }

  const dateArray = birthDate.split(/[\D]+/g)
  const day = parseInt(dateArray[0])
  const month = parseInt(dateArray[1])
  const year = parseInt(dateArray[2])
  if (day > 31 || month > 12) {
    alert('birth date is not valid')
    return false
  }


})

document.getElementById('sign-in-form').addEventListener('submit', (event) => {
  event.preventDefault()

  const email = document.querySelector('#sign-in-form .input-email').value
  if (!email || !email.match(/[\w\d]+@[\w\d]+\.[\w\d]+/i)) {
    alert('email is not valid')
    return false
  }

  const password = document.querySelector('#sign-in-form .input-password').value
  if (!password || password.length < 6 || password.length > 30) {
    alert('password length must be between 6 ~ 30')
    return false
  }

  signInWithEmail(email, password)
})
