const storage = window.localStorage

/* window.localStorage.setItem('user','kj') */

const user = storage.getItem('user')
if (user) {
  const signInButton = document.getElementsByClassName('sign-in')[0]
  signInButton.style.display = 'none'
}