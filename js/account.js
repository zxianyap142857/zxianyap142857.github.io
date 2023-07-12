placeUserDetail()

async function placeUserDetail () {
  const user = await getUserDetail()

  if (!user) {
    alert('you are not sign in yet')
    location.href = '/index.html'
  }

  document.getElementById('username').innerText = user.displayName
  document.getElementById('email').innerText = user.email

  if (user.photoURL) {
    document.querySelector('.profile img').src = user.photoURL
  }
}